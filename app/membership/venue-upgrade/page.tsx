"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "../../../lib/supabase";
import { VENUE_MEMBERSHIP_PLANS, VENUE_TIER_ORDER, type VenueMembershipTier } from "../../../lib/pricing";

type Step = "loading" | "phone" | "otp" | "venues" | "plans" | "subscribing";

type Venue = {
  id: string;
  name: string;
  venue_membership: VenueMembershipTier;
};

export default function VenueMembershipUpgradePage() {
  const [step, setStep] = useState<Step>("loading");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [venues, setVenues] = useState<Venue[]>([]);
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<VenueMembershipTier | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resent, setResent] = useState(false);
  const [autoToken, setAutoToken] = useState<string | null>(null);

  const resolveVenues = useCallback((venueList: Venue[], targetVenueId?: string | null) => {
    setVenues(venueList);
    if (targetVenueId) {
      const match = venueList.find(v => v.id === targetVenueId);
      if (match) { setSelectedVenue(match); setStep("plans"); return; }
    }
    if (venueList.length === 1) {
      setSelectedVenue(venueList[0]);
      setStep("plans");
    } else {
      setStep("venues");
    }
  }, []);

  const fetchVenues = useCallback(async (userId: string, targetVenueId?: string | null) => {
    const { data } = await supabase
      .from("venues")
      .select("id, name, venue_membership")
      .eq("owner_id", userId)
      .order("name");

    if (data && data.length > 0) {
      resolveVenues(data as Venue[], targetVenueId);
    } else {
      setError("No venues found for this account.");
      setStep("plans");
    }
  }, [resolveVenues]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const venueId = params.get("venue_id");

    if (token) {
      setAutoToken(token);
      // Verify token and fetch venues directly — skip OTP
      supabase.auth.getUser(token).then(({ data }) => {
        if (data.user) {
          fetchVenues(data.user.id, venueId);
        } else {
          setStep("phone");
        }
      });
    } else {
      supabase.auth.getSession().then(({ data }) => {
        if (data.session?.user) {
          fetchVenues(data.session.user.id);
        } else {
          setStep("phone");
        }
      });
    }
  }, [fetchVenues]);

  async function sendOtp() {
    if (!phone.trim()) return;
    setBusy(true);
    setError(null);
    const fullPhone = phone.startsWith("+") ? phone : `+${phone}`;
    const { error } = await supabase.auth.signInWithOtp({ phone: fullPhone });
    setBusy(false);
    if (error) { setError(error.message); return; }
    setStep("otp");
  }

  async function resendOtp() {
    setBusy(true);
    const fullPhone = phone.startsWith("+") ? phone : `+${phone}`;
    await supabase.auth.signInWithOtp({ phone: fullPhone });
    setBusy(false);
    setResent(true);
    setTimeout(() => setResent(false), 4000);
  }

  async function verifyOtp() {
    if (otp.length < 6) return;
    setBusy(true);
    setError(null);
    const fullPhone = phone.startsWith("+") ? phone : `+${phone}`;
    const { data, error } = await supabase.auth.verifyOtp({ phone: fullPhone, token: otp, type: "sms" });
    setBusy(false);
    if (error) { setError("Incorrect code. Try again."); return; }
    if (data.user) fetchVenues(data.user.id);
  }

  async function handleSubscribe() {
    if (!selectedPlan || !selectedVenue) return;
    setStep("subscribing");

    // Use app-passed token if available, otherwise fall back to session
    let token = autoToken;
    if (!token) {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { setError("Session expired. Please refresh."); setStep("plans"); return; }
      token = session.access_token;
    }

    const res = await fetch("/api/create-venue-membership-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ plan: selectedPlan, venue_id: selectedVenue.id }),
    });

    if (!res.ok) { setError("Something went wrong. Please try again."); setStep("plans"); return; }
    const { url } = await res.json();
    window.location.href = url;
  }

  if (step === "loading") {
    return <Screen><div className="w-8 h-8 border-2 border-[#C1714A] border-t-transparent rounded-full animate-spin" /></Screen>;
  }

  if (step === "subscribing") {
    return (
      <Screen>
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-[#C1714A] border-t-transparent rounded-full animate-spin" />
          <p className="text-[rgba(250,248,245,0.5)] text-sm">Redirecting to checkout…</p>
        </div>
      </Screen>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1210] flex flex-col">
      <nav className="flex items-center justify-between px-6 py-5 max-w-lg mx-auto w-full">
        <a href="/" className="font-serif italic text-xl text-[#FAF8F5]">friendly</a>
        {(step === "venues" || step === "plans") && (
          <button
            onClick={async () => { await supabase.auth.signOut(); setStep("phone"); setVenues([]); setSelectedVenue(null); }}
            className="text-xs text-[rgba(250,248,245,0.3)] hover:text-[rgba(250,248,245,0.6)] transition-colors"
          >
            Sign out
          </button>
        )}
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-16">
        <div className="w-full max-w-sm">

          {/* PHONE */}
          {step === "phone" && (
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="font-serif text-3xl text-[#FAF8F5] mb-2">Upgrade venue plan</h1>
                <p className="text-[rgba(250,248,245,0.4)] text-sm leading-relaxed">
                  Sign in with your venue account phone number.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xs text-[rgba(250,248,245,0.4)] font-semibold uppercase tracking-widest">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="+971 50 123 4567"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && sendOtp()}
                  className="w-full bg-[rgba(250,248,245,0.05)] border border-[rgba(250,248,245,0.1)] rounded-2xl px-4 py-4 text-[#FAF8F5] text-base placeholder:text-[rgba(250,248,245,0.2)] focus:outline-none focus:border-[rgba(193,113,74,0.5)] transition-colors"
                  autoComplete="tel"
                  autoFocus
                />
                <p className="text-[rgba(250,248,245,0.25)] text-xs">Include country code — e.g. +971 for UAE</p>
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <button
                onClick={sendOtp}
                disabled={busy || !phone.trim()}
                className="w-full bg-[#C1714A] text-[#FAF8F5] py-4 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-40"
              >
                {busy ? "Sending…" : "Send code →"}
              </button>
            </div>
          )}

          {/* OTP */}
          {step === "otp" && (
            <div className="flex flex-col gap-6">
              <div>
                <button
                  onClick={() => { setStep("phone"); setOtp(""); setError(null); }}
                  className="text-[rgba(250,248,245,0.4)] text-sm mb-4 hover:text-[rgba(250,248,245,0.7)] transition-colors"
                >
                  ← Back
                </button>
                <h1 className="font-serif text-3xl text-[#FAF8F5] mb-2">Enter code</h1>
                <p className="text-[rgba(250,248,245,0.4)] text-sm">Code sent to {phone}</p>
              </div>
              <input
                type="text"
                inputMode="numeric"
                placeholder="000000"
                maxLength={6}
                value={otp}
                onChange={e => { setOtp(e.target.value.replace(/\D/g, "")); setError(null); }}
                onKeyDown={e => e.key === "Enter" && verifyOtp()}
                className="w-full bg-[rgba(250,248,245,0.05)] border border-[rgba(250,248,245,0.1)] rounded-2xl px-4 py-4 text-[#FAF8F5] text-2xl text-center tracking-[0.5em] placeholder:tracking-normal placeholder:text-[rgba(250,248,245,0.2)] focus:outline-none focus:border-[rgba(193,113,74,0.5)] transition-colors"
                autoFocus
              />
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <button
                onClick={verifyOtp}
                disabled={busy || otp.length < 6}
                className="w-full bg-[#C1714A] text-[#FAF8F5] py-4 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-40"
              >
                {busy ? "Verifying…" : "Verify →"}
              </button>
              <button
                onClick={resendOtp}
                disabled={busy}
                className="text-center text-xs text-[rgba(250,248,245,0.3)] hover:text-[rgba(250,248,245,0.6)] transition-colors"
              >
                {resent ? "Code resent ✓" : "Didn't receive it? Resend"}
              </button>
            </div>
          )}

          {/* VENUE SELECTOR — only shown when owner has multiple venues */}
          {step === "venues" && (
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="font-serif text-3xl text-[#FAF8F5] mb-2">Select venue</h1>
                <p className="text-[rgba(250,248,245,0.4)] text-sm">Which venue would you like to upgrade?</p>
              </div>
              <div className="flex flex-col gap-3">
                {venues.map(venue => {
                  const isEnterprise = (venue.venue_membership || "starter") === "enterprise";
                  return (
                    <button
                      key={venue.id}
                      onClick={() => { setSelectedVenue(venue); setStep("plans"); }}
                      className="w-full text-left rounded-2xl border border-[rgba(250,248,245,0.08)] bg-[rgba(250,248,245,0.03)] hover:border-[rgba(250,248,245,0.15)] px-5 py-4 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-[#FAF8F5]">{venue.name}</p>
                        {isEnterprise && (
                          <span className="text-[10px] font-semibold bg-[rgba(250,248,245,0.1)] text-[rgba(250,248,245,0.5)] px-2 py-0.5 rounded-full">
                            Highest plan
                          </span>
                        )}
                      </div>
                      <p className={`text-xs mt-1 capitalize ${isEnterprise ? "text-[rgba(250,248,245,0.25)]" : "text-[rgba(250,248,245,0.4)]"}`}>
                        Current: {venue.venue_membership || "starter"}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* PLANS */}
          {step === "plans" && selectedVenue && (selectedVenue.venue_membership || "starter") === "enterprise" && (
            <div className="flex flex-col gap-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[rgba(193,113,74,0.15)] flex items-center justify-center mx-auto">
                <span className="text-[#C1714A] text-2xl">✦</span>
              </div>
              <div>
                <h1 className="font-serif text-3xl text-[#FAF8F5] mb-3">{selectedVenue.name}</h1>
                <p className="text-[rgba(250,248,245,0.4)] text-base leading-relaxed">
                  This venue is already on Enterprise — our highest plan. No further upgrades available.
                </p>
              </div>
              <a
                href="mailto:hello@itsjustafriendly.com"
                className="text-[#C1714A] text-sm hover:opacity-80 transition-opacity"
              >
                Questions? hello@itsjustafriendly.com
              </a>
              {venues.length > 1 && (
                <button
                  onClick={() => { setSelectedVenue(null); setSelectedPlan(null); setStep("venues"); }}
                  className="text-[rgba(250,248,245,0.3)] text-xs hover:text-[rgba(250,248,245,0.6)] transition-colors"
                >
                  ← Choose a different venue
                </button>
              )}
            </div>
          )}

          {step === "plans" && selectedVenue && (selectedVenue.venue_membership || "starter") !== "enterprise" && (
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="font-serif text-3xl text-[#FAF8F5] mb-1">Upgrade venue plan</h1>
                <p className="text-[rgba(250,248,245,0.4)] text-sm">
                  {selectedVenue.name} ·{" "}
                  <span className="text-[#C1714A] font-semibold capitalize">
                    {selectedVenue.venue_membership || "Starter"}
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {VENUE_MEMBERSHIP_PLANS.map(plan => {
                  const currentTier = (selectedVenue.venue_membership || "starter") as VenueMembershipTier;
                  const isCurrent = plan.id === currentTier;
                  const isDowngrade = VENUE_TIER_ORDER.indexOf(plan.id) <= VENUE_TIER_ORDER.indexOf(currentTier);
                  const isSelected = selectedPlan === plan.id;

                  return (
                    <button
                      key={plan.id}
                      onClick={() => !isDowngrade && setSelectedPlan(plan.id)}
                      disabled={isDowngrade}
                      className={`relative w-full text-left rounded-2xl border px-5 py-4 transition-all ${
                        isCurrent
                          ? "border-[rgba(250,248,245,0.15)] bg-[rgba(250,248,245,0.04)] opacity-60 cursor-default"
                          : isSelected
                            ? "border-[#C1714A] bg-[rgba(193,113,74,0.08)]"
                            : isDowngrade
                              ? "border-[rgba(250,248,245,0.05)] bg-[rgba(250,248,245,0.02)] opacity-40 cursor-not-allowed"
                              : "border-[rgba(250,248,245,0.08)] bg-[rgba(250,248,245,0.03)] hover:border-[rgba(250,248,245,0.15)]"
                      }`}
                    >
                      {plan.popular && !isCurrent && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold bg-[#C1714A] text-white px-2.5 py-1 rounded-full whitespace-nowrap">
                          Most popular
                        </span>
                      )}
                      {isCurrent && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold bg-[rgba(250,248,245,0.15)] text-[rgba(250,248,245,0.6)] px-2.5 py-1 rounded-full whitespace-nowrap">
                          Current plan
                        </span>
                      )}

                      <div className="flex items-start justify-between mb-3">
                        <p className={`font-semibold text-lg ${isSelected ? "text-[#C1714A]" : "text-[#FAF8F5]"}`}>
                          {plan.name}
                        </p>
                        <div className="text-right">
                          <p className={`font-semibold text-xl ${isSelected ? "text-[#C1714A]" : "text-[rgba(250,248,245,0.5)]"}`}>
                            {plan.displayPrice}
                          </p>
                          <p className="text-[rgba(250,248,245,0.25)] text-xs">/ month</p>
                        </div>
                      </div>

                      <ul className="flex flex-col gap-1">
                        {plan.features.map(f => (
                          <li key={f} className="flex items-center gap-2 text-xs text-[rgba(250,248,245,0.5)]">
                            <span className={`shrink-0 ${isSelected ? "text-[#C1714A]" : "text-[rgba(250,248,245,0.3)]"}`}>✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}

              <button
                onClick={handleSubscribe}
                disabled={!selectedPlan}
                className="w-full bg-[#C1714A] text-[#FAF8F5] py-4 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {selectedPlan
                  ? (() => {
                      const p = VENUE_MEMBERSHIP_PLANS.find(p => p.id === selectedPlan)!;
                      return `Subscribe to ${p.name} · ${p.displayPrice}/mo →`;
                    })()
                  : "Select a plan"}
              </button>

              {venues.length > 1 && (
                <button
                  onClick={() => { setSelectedVenue(null); setSelectedPlan(null); setStep("venues"); }}
                  className="text-center text-xs text-[rgba(250,248,245,0.3)] hover:text-[rgba(250,248,245,0.6)] transition-colors"
                >
                  ← Choose a different venue
                </button>
              )}

              <p className="text-center text-[rgba(250,248,245,0.2)] text-xs">
                Billed monthly · Cancel anytime by emailing<br />
                <a href="mailto:hello@itsjustafriendly.com" className="underline">hello@itsjustafriendly.com</a>
              </p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

function Screen({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#1A1210] flex items-center justify-center">
      {children}
    </div>
  );
}
