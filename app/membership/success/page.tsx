"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const TIER_LABELS: Record<string, string> = {
  silver: "Silver",
  gold: "Gold",
  platinum: "Platinum",
};

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [state, setState] = useState<"loading" | "done" | "error">("loading");
  const [membership, setMembership] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) { setState("error"); return; }

    fetch("/api/fulfill-membership", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session_id: sessionId }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.ok) { setMembership(data.membership); setState("done"); }
        else setState("error");
      })
      .catch(() => setState("error"));
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-[#1A1210] flex flex-col items-center justify-center px-6 text-center">
      <a href="/" className="font-serif italic text-2xl text-[#FAF8F5] mb-16">friendly</a>

      {state === "loading" && (
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-[#C1714A] border-t-transparent rounded-full animate-spin" />
          <p className="text-[rgba(250,248,245,0.4)] text-sm">Activating your membership…</p>
        </div>
      )}

      {state === "done" && (
        <div className="flex flex-col items-center gap-6 max-w-sm">
          <div className="w-16 h-16 rounded-full bg-[rgba(193,113,74,0.15)] flex items-center justify-center">
            <span className="text-[#C1714A] text-2xl">✓</span>
          </div>
          <div>
            <h1 className="font-serif text-3xl text-[#FAF8F5] mb-3">
              {TIER_LABELS[membership ?? ""] ?? "Membership"} activated
            </h1>
            <p className="text-[rgba(250,248,245,0.4)] text-base leading-relaxed">
              Your plan is now active. Open the Friendly app and pull down on the home screen to see your updated tier.
            </p>
          </div>
          <a
            href="/"
            className="text-[rgba(250,248,245,0.3)] text-xs hover:text-[rgba(250,248,245,0.6)] transition-colors mt-2"
          >
            ← Back to home
          </a>
        </div>
      )}

      {state === "error" && (
        <div className="flex flex-col items-center gap-6 max-w-sm">
          <div className="w-16 h-16 rounded-full bg-[rgba(250,100,100,0.1)] flex items-center justify-center">
            <span className="text-red-400 text-2xl">!</span>
          </div>
          <div>
            <h1 className="font-serif text-3xl text-[#FAF8F5] mb-3">Something went wrong</h1>
            <p className="text-[rgba(250,248,245,0.4)] text-base leading-relaxed">
              Your payment may have gone through but the plan wasn&apos;t activated.
              Email us at{" "}
              <a href="mailto:hello@itsjustafriendly.com" className="text-[#C1714A] hover:opacity-80">
                hello@itsjustafriendly.com
              </a>{" "}
              and we&apos;ll sort it out.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MembershipSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#1A1210] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#C1714A] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
