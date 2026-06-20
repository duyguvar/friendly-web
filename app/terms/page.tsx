export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#1A1210] flex flex-col">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-4xl mx-auto w-full">
        <a href="/" className="flex items-center gap-2"><svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="13" r="6" fill="#C1714A"/><circle cx="20" cy="20" r="6" fill="#C1714A" opacity="0.45"/></svg><span className="font-serif italic text-xl text-[#FAF8F5]">friendly</span></a>
        <div className="flex items-center gap-4">
          <a href="/about" className="hidden sm:block text-sm text-[rgba(250,248,245,0.5)] hover:text-[rgba(250,248,245,0.85)] transition-colors">About</a>
          <a href="/membership" className="hidden sm:block text-sm text-[rgba(250,248,245,0.5)] hover:text-[rgba(250,248,245,0.85)] transition-colors">Pricing</a>
          <a href="/credits" className="hidden sm:block text-sm text-[rgba(250,248,245,0.5)] hover:text-[rgba(250,248,245,0.85)] transition-colors">Get credits</a>
          <a href="/#download" className="text-sm font-semibold text-[#FAF8F5] border border-[rgba(250,248,245,0.2)] px-4 py-2 rounded-full hover:border-[rgba(250,248,245,0.5)] transition-colors">Download</a>
        </div>
      </nav>

      <div className="px-6 max-w-4xl mx-auto w-full pb-32">

        {/* Hero */}
        <section className="pt-16 pb-16 md:pt-24 md:pb-20">
          <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-6">Legal</p>
          <h1 className="font-serif italic text-[clamp(40px,8vw,72px)] text-[#FAF8F5] leading-none mb-6">
            Terms of Service
          </h1>
          <p className="text-[rgba(250,248,245,0.4)] text-base md:text-lg max-w-xl leading-relaxed">
            By using Friendly, you agree to these terms. They&apos;re written to be readable — not to trap you.
          </p>
          <p className="text-[rgba(250,248,245,0.25)] text-sm mt-4">Last updated: June 1, 2026</p>
        </section>

        {/* Divider */}
        <div className="h-px bg-[rgba(250,248,245,0.06)] mb-16" />

        {/* Content */}
        <div className="space-y-16 max-w-2xl">

          {/* 1 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">01</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">What Friendly is</h2>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed">
              Friendly is a platform that lets people create and join real-world experiences — coffee, walks, runs, lunch, and more. We facilitate connections but are not a party to any meeting that takes place. Users are responsible for their own conduct before, during, and after experiences.
            </p>
          </section>

          {/* 2 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">02</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">Eligibility</h2>
            <ul className="space-y-3 text-[rgba(250,248,245,0.4)] leading-relaxed">
              {[
                "You must be 18 years of age or older to use Friendly.",
                "You must provide a valid phone number to create an account.",
                "You may not create an account on behalf of another person.",
                "One account per person. Duplicate accounts may be removed.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#C1714A] mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">03</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">Credits</h2>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed mb-4">
              Credits are Friendly&apos;s internal platform currency. They have no monetary value outside of the platform.
            </p>
            <ul className="space-y-3 text-[rgba(250,248,245,0.4)] leading-relaxed">
              {[
                "Credits can be purchased via the website or earned through hosting, referrals, and missions.",
                "Credits are non-refundable except where required by applicable law.",
                "Transferring credits between users is prohibited.",
                "We reserve the right to adjust credit balances in cases of fraud, abuse, or technical error.",
                "Unused credits do not expire as long as your account remains active.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#C1714A] mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">04</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">Cancellations &amp; refunds</h2>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed mb-6">
              When a guest cancels a booking, the following credit refund policy applies:
            </p>
            <div className="space-y-3 mb-6">
              {[
                { time: "4+ hours before", refund: "100% refund" },
                { time: "1–4 hours before", refund: "50% refund" },
                { time: "Less than 1 hour before", refund: "No refund" },
              ].map(({ time, refund }) => (
                <div key={time} className="rounded-2xl border border-[rgba(250,248,245,0.08)] bg-[rgba(250,248,245,0.03)] px-5 py-4 flex items-center justify-between">
                  <span className="text-[rgba(250,248,245,0.4)] text-sm">{time}</span>
                  <span className="text-[#FAF8F5] text-sm font-semibold">{refund}</span>
                </div>
              ))}
            </div>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed mb-4">
              When a host cancels an experience, all confirmed guests receive a 100% credit refund. Guests also receive a 10-credit bonus if the host cancels within 4 hours of the scheduled start. Hosts who cancel may incur a penalty:
            </p>
            <div className="space-y-3">
              {[
                { time: "4+ hours before", penalty: "No penalty" },
                { time: "1–4 hours before", penalty: "−10 credits" },
                { time: "Less than 1 hour before", penalty: "−25 credits" },
              ].map(({ time, penalty }) => (
                <div key={time} className="rounded-2xl border border-[rgba(250,248,245,0.08)] bg-[rgba(250,248,245,0.03)] px-5 py-4 flex items-center justify-between">
                  <span className="text-[rgba(250,248,245,0.4)] text-sm">{time}</span>
                  <span className="text-[#FAF8F5] text-sm font-semibold">{penalty}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 5 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">05</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">Memberships</h2>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed mb-4">
              Friendly offers optional paid memberships (Silver, Gold, Platinum for users; Essential, Partner, Enterprise for venues). Memberships are billed monthly and renew automatically.
            </p>
            <ul className="space-y-3 text-[rgba(250,248,245,0.4)] leading-relaxed">
              {[
                "You may cancel your membership at any time. Access continues until the end of the current billing period.",
                "Downgrade requests take effect at the next billing cycle.",
                "Monthly credits included in your plan are added at the start of each cycle and do not roll over.",
                "We reserve the right to change membership pricing with 30 days' notice.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#C1714A] mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 6 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">06</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">Conduct</h2>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed mb-4">
              Friendly is built on trust. You agree not to:
            </p>
            <ul className="space-y-3 text-[rgba(250,248,245,0.4)] leading-relaxed">
              {[
                "Create experiences you have no intention of attending.",
                "Harass, threaten, or discriminate against other users.",
                "Use the platform for commercial solicitation or spam.",
                "Attempt to manipulate credits, trust tiers, or referral systems.",
                "Use automated tools or bots to interact with the platform.",
                "Share your account or credentials with others.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#C1714A] mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed mt-5">
              Violations may result in account suspension or permanent removal, at our discretion.
            </p>
          </section>

          {/* 7 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">07</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">Safety &amp; liability</h2>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed mb-4">
              Friendly connects people but does not supervise, verify, or guarantee any meeting that takes place. By participating in an experience, you acknowledge that:
            </p>
            <ul className="space-y-3 text-[rgba(250,248,245,0.4)] leading-relaxed">
              {[
                "You meet other users at your own risk.",
                "Friendly is not liable for any harm, loss, or damage arising from real-world interactions.",
                "You are responsible for your own safety and the safety of those around you.",
                "You will not hold Friendly responsible for the actions of other users.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#C1714A] mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 8 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">08</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">Intellectual property</h2>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed">
              The Friendly name, logo, and app design are owned by us. You may not reproduce or use them without written permission. Content you submit (your name, bio, experience descriptions) remains yours — you grant us a limited license to display it within the platform.
            </p>
          </section>

          {/* 9 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">09</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">Account termination</h2>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed mb-4">
              You can delete your account at any time from the profile screen. We may suspend or terminate accounts that violate these terms. Upon termination:
            </p>
            <ul className="space-y-3 text-[rgba(250,248,245,0.4)] leading-relaxed">
              {[
                "Any unused credits are forfeited (unless required otherwise by law).",
                "Active bookings will be cancelled and guests refunded.",
                "Your personal data will be deleted within 30 days per our Privacy Policy.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#C1714A] mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 10 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">10</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">Governing law</h2>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed">
              These terms are governed by the laws of the United Arab Emirates. Any disputes will be resolved in the courts of Dubai, UAE. Friendly is operated by XDLabs Future FZCO, a free zone company registered in Dubai, UAE (IFZA).
            </p>
          </section>

          {/* 11 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">11</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">Changes to these terms</h2>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed">
              We may update these terms as the platform evolves. Material changes will be communicated via in-app notification. Continued use of Friendly after changes take effect constitutes acceptance of the new terms.
            </p>
          </section>

          {/* Contact CTA */}
          <div className="rounded-2xl border border-[rgba(250,248,245,0.08)] bg-[rgba(250,248,245,0.03)] p-8 text-center">
            <p className="text-[#FAF8F5] font-serif italic text-xl mb-3">Questions or concerns?</p>
            <p className="text-[rgba(250,248,245,0.4)] text-sm mb-6">
              Also see our{" "}
              <a href="/privacy" className="text-[#C1714A] hover:opacity-80 transition-opacity">Privacy Policy</a>
              .
            </p>
            <a
              href="mailto:hello@itsjustafriendly.com"
              className="bg-[#C1714A] text-[#FAF8F5] px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity inline-block"
            >
              hello@itsjustafriendly.com →
            </a>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[rgba(250,248,245,0.06)] py-8 px-6 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[rgba(250,248,245,0.25)] text-sm">
          <span className="font-serif italic text-lg">friendly</span>
          <div className="flex items-center gap-5">
            <a href="/membership" className="hover:text-[rgba(250,248,245,0.5)] transition-colors">Pricing</a>
            <a href="/credits" className="hover:text-[rgba(250,248,245,0.5)] transition-colors">Get credits</a>
            <a href="/privacy" className="hover:text-[rgba(250,248,245,0.5)] transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-[rgba(250,248,245,0.5)] transition-colors">Terms</a>
            <a href="mailto:hello@itsjustafriendly.com" className="hover:text-[rgba(250,248,245,0.5)] transition-colors">hello@itsjustafriendly.com</a>
          </div>
          <div className="flex items-center gap-2">
            <img src="/xdlabs-logo.png" alt="XDLabs Future" style={{height: '28px', width: 'auto', mixBlendMode: 'screen', opacity: 0.7}} />
            <span className="text-xs">© 2026 XDLabs Future FZCO · Dubai</span>
          </div>
        </div>
      </footer>

    </main>
  );
}
