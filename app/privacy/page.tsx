export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#1A1210] flex flex-col">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-4xl mx-auto w-full">
        <a href="/" className="font-serif italic text-xl text-[#FAF8F5]">friendly</a>
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
            Privacy Policy
          </h1>
          <p className="text-[rgba(250,248,245,0.4)] text-base md:text-lg max-w-xl leading-relaxed">
            We collect only what we need to connect people. Here&apos;s exactly what that means.
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
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">Who we are</h2>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed">
              Friendly is a counter-loneliness platform that helps people open and join real-world experiences — coffee, walks, runs, lunch. We are based in Dubai, UAE. Questions? Reach us at{" "}
              <a href="mailto:hello@itsjustafriendly.com" className="text-[#C1714A] hover:opacity-80 transition-opacity">
                hello@itsjustafriendly.com
              </a>
            </p>
          </section>

          {/* 2 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">02</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">What we collect</h2>
            <div className="space-y-4">
              {[
                {
                  label: "Phone number",
                  detail: "Used for sign-in via one-time password (OTP). We never share it with other users.",
                },
                {
                  label: "Name",
                  detail: "Displayed on your profile and experience cards so others know who to meet.",
                },
                {
                  label: "Location",
                  detail: "Used to show experiences near you and to pin your experience on the map. We request location permission explicitly — you can deny it and still use the app.",
                },
                {
                  label: "Push notification token",
                  detail: "Stored so we can send you reminders when an experience is about to start. Only sent with your permission.",
                },
                {
                  label: "Profile preferences",
                  detail: "Age range, gender, interests, and meeting preferences you choose during onboarding. Used only to filter and sort experiences for you.",
                },
                {
                  label: "Activity history",
                  detail: "Experiences you host or join, check-ins, and credits earned. Used to compute your trust tier and show you your history.",
                },
              ].map(({ label, detail }) => (
                <div key={label} className="rounded-2xl border border-[rgba(250,248,245,0.08)] bg-[rgba(250,248,245,0.03)] p-5">
                  <p className="text-[#FAF8F5] font-semibold text-sm mb-1">{label}</p>
                  <p className="text-[rgba(250,248,245,0.4)] text-sm leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">03</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">How we use your data</h2>
            <ul className="space-y-3 text-[rgba(250,248,245,0.4)] leading-relaxed">
              {[
                "Authenticate you securely via phone OTP",
                "Show you experiences that match your preferences and location",
                "Send push reminders before experiences you joined or host",
                "Process credits — earned, spent, and refunded",
                "Compute your trust tier based on your activity history",
                "Allow venues to show relevant offers to confirmed guests",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#C1714A] mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed mt-5">
              We do not sell your data. We do not use your data for advertising.
            </p>
          </section>

          {/* 4 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">04</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">Third-party services</h2>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed mb-5">
              We use the following services to operate Friendly. Each has its own privacy policy.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Supabase",
                  role: "Database, authentication, and real-time features. Data is stored in secure, access-controlled tables.",
                  url: "https://supabase.com/privacy",
                },
                {
                  name: "Twilio / WhatsApp",
                  role: "Delivers OTP verification messages to your phone number.",
                  url: "https://www.twilio.com/en-us/legal/privacy",
                },
                {
                  name: "Stripe",
                  role: "Processes credit purchases and membership subscriptions. We never store your card details.",
                  url: "https://stripe.com/privacy",
                },
                {
                  name: "Expo (push notifications)",
                  role: "Delivers push notifications to iOS and Android devices via Apple APNs and Google FCM.",
                  url: "https://expo.dev/privacy",
                },
              ].map(({ name, role, url }) => (
                <div key={name} className="rounded-2xl border border-[rgba(250,248,245,0.08)] bg-[rgba(250,248,245,0.03)] p-5">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[#FAF8F5] font-semibold text-sm">{name}</p>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-[rgba(250,248,245,0.25)] text-xs hover:text-[rgba(250,248,245,0.5)] transition-colors">
                      Privacy policy ↗
                    </a>
                  </div>
                  <p className="text-[rgba(250,248,245,0.4)] text-sm leading-relaxed">{role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">05</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">Data retention</h2>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed">
              We retain your data for as long as your account is active. If you delete your account from the app, your personal data (name, phone, preferences, push token) is removed within 30 days. Transaction and booking records may be retained for up to 2 years for financial compliance purposes.
            </p>
          </section>

          {/* 6 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">06</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">Your rights</h2>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed mb-5">
              You can exercise the following rights at any time by emailing{" "}
              <a href="mailto:hello@itsjustafriendly.com" className="text-[#C1714A] hover:opacity-80 transition-opacity">
                hello@itsjustafriendly.com
              </a>
            </p>
            <ul className="space-y-3 text-[rgba(250,248,245,0.4)] leading-relaxed">
              {[
                "Access a copy of the data we hold about you",
                "Correct inaccurate data",
                "Delete your account and associated data",
                "Withdraw consent for push notifications (via device settings)",
                "Withdraw consent for location access (via device settings)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#C1714A] mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 7 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">07</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">Children</h2>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed">
              Friendly is intended for users aged 18 and over. We do not knowingly collect data from anyone under 18. If you believe a minor has created an account, please contact us and we will remove it promptly.
            </p>
          </section>

          {/* 8 */}
          <section>
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">08</p>
            <h2 className="font-serif text-2xl text-[#FAF8F5] mb-5">Changes to this policy</h2>
            <p className="text-[rgba(250,248,245,0.4)] leading-relaxed">
              We may update this policy as the product evolves. Material changes will be communicated via in-app notification. The &ldquo;last updated&rdquo; date at the top of this page always reflects the current version.
            </p>
          </section>

          {/* Contact CTA */}
          <div className="rounded-2xl border border-[rgba(250,248,245,0.08)] bg-[rgba(250,248,245,0.03)] p-8 text-center">
            <p className="text-[#FAF8F5] font-serif italic text-xl mb-3">Questions about your data?</p>
            <p className="text-[rgba(250,248,245,0.4)] text-sm mb-6">We&apos;re a small team and we read every email.</p>
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
          <span className="text-xs">© 2026 Friendly · Dubai</span>
        </div>
      </footer>

    </main>
  );
}
