"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function ManageMembershipPage() {
  const [status, setStatus] = useState<"loading" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function redirect() {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");

      let accessToken: string | null = token;

      if (!accessToken) {
        const { data } = await supabase.auth.getSession();
        accessToken = data.session?.access_token ?? null;
      }

      if (!accessToken) {
        setErrorMsg("Please sign in to manage your subscription.");
        setStatus("error");
        return;
      }

      const res = await fetch("/api/create-portal-session", {
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const json = await res.json();

      if (json.url) {
        window.location.href = json.url;
      } else {
        setErrorMsg(json.error === "No subscription found"
          ? "No active subscription found. Upgrade first to manage billing."
          : "Something went wrong. Please try again.");
        setStatus("error");
      }
    }

    redirect();
  }, []);

  return (
    <main className="min-h-screen bg-[#0D0B0A] flex items-center justify-center px-6">
      <div className="text-center">
        {status === "loading" ? (
          <>
            <div className="w-8 h-8 border-2 border-[#C1714A] border-t-transparent rounded-full animate-spin mx-auto mb-6" />
            <p className="text-[rgba(250,248,245,0.5)] text-sm">Opening subscription portal…</p>
          </>
        ) : (
          <>
            <p className="text-[#FAF8F5] text-lg font-semibold mb-3">Oops</p>
            <p className="text-[rgba(250,248,245,0.5)] text-sm max-w-xs">{errorMsg}</p>
            <a
              href="/membership"
              className="mt-6 inline-block text-sm text-[#C1714A] hover:underline"
            >
              ← Back to plans
            </a>
          </>
        )}
      </div>
    </main>
  );
}
