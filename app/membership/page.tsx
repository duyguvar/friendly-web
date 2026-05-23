export default function MembershipPage() {
  const userPlans = [
    {
      name: "Free",
      price: null,
      color: "rgba(250,248,245,0.06)",
      border: "rgba(250,248,245,0.08)",
      badge: null,
      features: [
        "3 experiences per day",
        "Up to 35 cr contribution",
        "5% platform fee",
        "Schedule today only",
        "Basic feed access",
      ],
      missing: [
        "Monthly credit bonus",
        "Reduced fee",
        "Scheduled repeats",
        "Priority matching",
      ],
    },
    {
      name: "Silver",
      price: "AED 39",
      color: "rgba(250,248,245,0.04)",
      border: "rgba(250,248,245,0.12)",
      badge: null,
      features: [
        "5 experiences per day",
        "Up to 50 cr contribution",
        "4% platform fee",
        "Schedule up to tomorrow",
        "60 credits / month bonus",
      ],
      missing: [
        "Repeat scheduling",
        "Priority matching",
        "Gender/age filter",
      ],
    },
    {
      name: "Gold",
      price: "AED 69",
      color: "rgba(193,113,74,0.06)",
      border: "rgba(193,113,74,0.3)",
      badge: "Most popular",
      features: [
        "10 experiences per day",
        "Up to 100 cr contribution",
        "3% platform fee",
        "Schedule up to 7 days",
        "120 credits / month bonus",
        "Weekly repeat scheduling",
        "Gender preference filter",
        "Age preference filter",
      ],
      missing: [],
    },
    {
      name: "Platinum",
      price: "AED 99",
      color: "rgba(250,248,245,0.04)",
      border: "rgba(250,248,245,0.15)",
      badge: null,
      features: [
        "Unlimited experiences",
        "Up to 500 cr contribution",
        "1% platform fee",
        "Schedule up to 30 days",
        "200 credits / month bonus",
        "Weekly + monthly repeats",
        "All preference filters",
        "Priority matching",
        "Monthly & daily payouts",
      ],
      missing: [],
    },
  ];

  const venuePlans = [
    {
      name: "Starter",
      price: null,
      border: "rgba(250,248,245,0.08)",
      badge: null,
      features: [
        "2 active offers",
        "2 venues",
        "Map listing",
        "Friendly Partner badge",
      ],
      missing: ["Analytics", "Push notifications", "Priority listing", "Branding"],
    },
    {
      name: "Essential",
      price: "AED 99",
      border: "rgba(250,248,245,0.12)",
      badge: null,
      features: [
        "5 active offers",
        "5 venues",
        "Map listing",
        "Basic analytics",
        "Push notification when experience starts",
      ],
      missing: ["Priority listing", "Branding", "Detailed analytics"],
    },
    {
      name: "Partner",
      price: "AED 249",
      border: "rgba(193,113,74,0.3)",
      badge: "Most popular",
      features: [
        "10 active offers",
        "10 venues",
        "Priority listing in feed",
        "Detailed analytics",
        "Weekly automated reports",
        "Venue branding on experience cards",
        "Push notifications",
      ],
      missing: [],
    },
    {
      name: "Enterprise",
      price: "AED 599",
      border: "rgba(250,248,245,0.15)",
      badge: null,
      features: [
        "Unlimited offers",
        "Unlimited venues",
        "Featured tab placement",
        "Full analytics & cohort data",
        "Dedicated support",
        "Multi-venue management",
        "Custom branding",
      ],
      missing: [],
    },
  ];

  return (
    <main className="min-h-screen bg-[#1A1210] flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto w-full">
        <a href="/" className="font-serif italic text-xl text-[#FAF8F5]">friendly</a>
        <div className="flex items-center gap-4">
          <a href="/about" className="text-sm text-[rgba(250,248,245,0.5)] hover:text-[rgba(250,248,245,0.85)] transition-colors">About</a>
          <a href="/credits" className="text-sm text-[rgba(250,248,245,0.5)] hover:text-[rgba(250,248,245,0.85)] transition-colors">Get credits</a>
          <a href="/#download" className="text-sm font-semibold text-[#FAF8F5] border border-[rgba(250,248,245,0.2)] px-4 py-2 rounded-full hover:border-[rgba(250,248,245,0.5)] transition-colors">Download</a>
        </div>
      </nav>

      <div className="px-6 max-w-5xl mx-auto w-full pb-32">

        {/* Hero */}
        <div className="text-center pt-16 pb-20 md:pt-24 md:pb-28">
          <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-6">Plans & pricing</p>
          <h1 className="font-serif italic text-[clamp(40px,8vw,72px)] text-[#FAF8F5] leading-none mb-6">
            Show up more.
          </h1>
          <p className="text-[rgba(250,248,245,0.4)] text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Earn credits as a host. Spend them as a guest.<br />
            Upgrade to do more of both.
          </p>
        </div>

        {/* — USER PLANS — */}
        <section id="user-plans" className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-[rgba(250,248,245,0.06)]" />
            <p className="text-[rgba(250,248,245,0.3)] text-xs font-semibold tracking-[0.2em] uppercase shrink-0">
              For individuals
            </p>
            <div className="h-px flex-1 bg-[rgba(250,248,245,0.06)]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {userPlans.map(plan => (
              <div
                key={plan.name}
                className="relative flex flex-col rounded-2xl p-6"
                style={{
                  background: plan.color,
                  border: `1px solid ${plan.border}`,
                }}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold bg-[#C1714A] text-white px-3 py-1 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </span>
                )}

                <div className="mb-5">
                  <p className="font-serif text-xl text-[#FAF8F5] mb-1">{plan.name}</p>
                  {plan.price ? (
                    <p className="text-[rgba(250,248,245,0.5)] text-sm">
                      <span className="text-[#FAF8F5] text-2xl font-semibold">{plan.price}</span>
                      <span className="text-[rgba(250,248,245,0.4)]"> / mo</span>
                    </p>
                  ) : (
                    <p className="text-2xl font-semibold text-[#FAF8F5]">Free</p>
                  )}
                </div>

                <ul className="flex flex-col gap-2 mb-4 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[rgba(250,248,245,0.7)]">
                      <span className="text-[#C1714A] shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                  {plan.missing.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[rgba(250,248,245,0.2)] line-through">
                      <span className="shrink-0 mt-0.5 opacity-30">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex flex-col items-center gap-3 bg-[rgba(250,248,245,0.03)] border border-[rgba(250,248,245,0.07)] rounded-2xl px-8 py-5">
              <p className="text-[rgba(250,248,245,0.5)] text-sm">Subscriptions launching soon</p>
              <a
                href="mailto:hello@itsjustafriendly.com?subject=I want early access to Silver/Gold/Platinum"
                className="bg-[#C1714A] text-[#FAF8F5] px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Get early access →
              </a>
            </div>
          </div>
        </section>

        {/* — VENUE PLANS — */}
        <section id="venue-plans">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-[rgba(250,248,245,0.06)]" />
            <p className="text-[rgba(250,248,245,0.3)] text-xs font-semibold tracking-[0.2em] uppercase shrink-0">
              For venues
            </p>
            <div className="h-px flex-1 bg-[rgba(250,248,245,0.06)]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {venuePlans.map(plan => (
              <div
                key={plan.name}
                className="relative flex flex-col rounded-2xl p-6 bg-[rgba(250,248,245,0.03)]"
                style={{ border: `1px solid ${plan.border}` }}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold bg-[#C1714A] text-white px-3 py-1 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </span>
                )}

                <div className="mb-5">
                  <p className="font-serif text-xl text-[#FAF8F5] mb-1">{plan.name}</p>
                  {plan.price ? (
                    <p className="text-[rgba(250,248,245,0.5)] text-sm">
                      <span className="text-[#FAF8F5] text-2xl font-semibold">{plan.price}</span>
                      <span className="text-[rgba(250,248,245,0.4)]"> / mo</span>
                    </p>
                  ) : (
                    <p className="text-2xl font-semibold text-[#FAF8F5]">Free</p>
                  )}
                </div>

                <ul className="flex flex-col gap-2 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[rgba(250,248,245,0.7)]">
                      <span className="text-[#C1714A] shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                  {plan.missing.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[rgba(250,248,245,0.2)] line-through">
                      <span className="shrink-0 mt-0.5 opacity-30">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex flex-col items-center gap-3 bg-[rgba(250,248,245,0.03)] border border-[rgba(250,248,245,0.07)] rounded-2xl px-8 py-5">
              <p className="text-[rgba(250,248,245,0.5)] text-sm">Venue subscriptions launching soon</p>
              <a
                href="mailto:hello@itsjustafriendly.com?subject=Venue partnership enquiry"
                className="bg-[#C1714A] text-[#FAF8F5] px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Partner with us →
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-[rgba(250,248,245,0.06)] py-8 px-6 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[rgba(250,248,245,0.25)] text-sm">
          <span className="font-serif italic text-lg">friendly</span>
          <a href="mailto:hello@itsjustafriendly.com" className="hover:text-[rgba(250,248,245,0.5)] transition-colors">
            hello@itsjustafriendly.com
          </a>
          <span className="text-xs">© 2026 Friendly · Dubai</span>
        </div>
      </footer>
    </main>
  );
}
