"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "../../lib/supabase";
import { getCreditPackages, formatPrice, type CreditPackage } from "../../lib/pricing";

type Step = "loading" | "phone" | "otp" | "packages" | "purchasing";

export default function CreditsPage() {
  const [step, setStep] = useState<Step>("loading");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [selected, setSelected] = useState<number | null>(null);
  const [credits, setCredits] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resent, setResent] = useState(false);

  const packages = getCreditPackages("AE");

  const fetchCredits = useCallback(async (userId: string) => {
    const { data } = await supabase
      .from("users")
      .select("credits")
      .eq("id", userId)
      .single();
    if (data) setCredits(data.credits as number);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session?.user) {
        fetchCredits(data.session.user.id);
        setStep("packages");
      } else {
        setStep("phone");
      }
    });
  }, [fetchCredits]);

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
    const { data, error } = await supabase.auth.verifyOtp({
      phone: fullPhone,
      token: otp,
      type: "sms",
    });
    setBusy(false);
    if (error) { setError("Incorrect code. Try again."); return; }
    if (data.user) {
      fetchCredits(data.user.id);
      setStep("packages");
    }
  }

  async function handlePurchase() {
    if (!selected) return;
    const pkg = packages.find(p => p.credits === selected);
    if (!pkg) return;

    setStep("purchasing");
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { setError("Session expired. Please refresh."); setStep("packages"); return; }

    const res = await fetch("/api/create-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session.access_token}`,
      },
      // price omitted — server looks it up from canonical pricing table
      body: JSON.stringify({
        credits: pkg.credits,
        currency: pkg.currency,
      }),
    });

    if (!res.ok) { setError("Something went wrong. Please try again."); setStep("packages"); return; }
    const { url } = await res.json();
    window.location.href = url;
  }

  if (step === "loading") {
    return <Screen><div className="text-[rgba(250,248,245,0.3)] text-sm">Loading…</div></Screen>;
  }

  if (step === "purchasing") {
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
        <span className="font-serif italic text-xl text-[#FAF8F5]">friendly</span>
        {step === "packages" && (
          <button
            onClick={async () => { await supabase.auth.signOut(); setStep("phone"); setCredits(null); }}
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
                <h1 className="font-serif text-3xl text-[#FAF8F5] mb-2">Get credits</h1>
                <p className="text-[rgba(250,248,245,0.4)] text-sm leading-relaxed">
                  Sign in with your phone number to load credits into your account.
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
                <p className="text-[rgba(250,248,245,0.25)] text-xs">Include country code — e.g. +971 for UAE, +44 for UK</p>
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
                <p className="text-[rgba(250,248,245,0.4)] text-sm">
                  Code sent to {phone}
                </p>
              </div>

              <div className="flex flex-col gap-3">
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
              </div>

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

          {/* PACKAGES */}
          {step === "packages" && (
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="font-serif text-3xl text-[#FAF8F5] mb-1">Get credits</h1>
                {credits !== null && (
                  <p className="text-[rgba(250,248,245,0.4)] text-sm">
                    Current balance: <span className="text-[#C1714A] font-semibold">{credits} credits</span>
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-3">
                {packages.map((pkg, i) => {
                  const isSelected = selected === pkg.credits;
                  const isPopular = i === 1;
                  return (
                    <button
                      key={pkg.credits}
                      onClick={() => setSelected(pkg.credits)}
                      className={`relative w-full text-left rounded-2xl border px-5 py-4 transition-all ${
                        isSelected
                          ? "border-[#C1714A] bg-[rgba(193,113,74,0.08)]"
                          : "border-[rgba(250,248,245,0.08)] bg-[rgba(250,248,245,0.03)] hover:border-[rgba(250,248,245,0.15)]"
                      }`}
                    >
                      {isPopular && (
                        <span className="absolute top-4 right-4 text-[10px] font-semibold bg-[#C1714A] text-white px-2.5 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`font-semibold text-lg ${isSelected ? "text-[#C1714A]" : "text-[#FAF8F5]"}`}>
                            {pkg.credits} credits
                          </p>
                        </div>
                        <p className={`font-semibold text-xl ${isSelected ? "text-[#C1714A]" : "text-[rgba(250,248,245,0.5)]"}`}>
                          {formatPrice(pkg)}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}

              <button
                onClick={handlePurchase}
                disabled={!selected}
                className="w-full bg-[#C1714A] text-[#FAF8F5] py-4 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {selected
                  ? (() => {
                      const p = packages.find(pkg => pkg.credits === selected)!;
                      return `Buy ${selected} credits · ${formatPrice(p)} →`;
                    })()
                  : "Select a package"}
              </button>

              <p className="text-center text-[rgba(250,248,245,0.2)] text-xs">
                Credits appear in the app instantly after payment.<br />
                Pull down to refresh your balance.
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
