export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-4xl mx-auto w-full">
        <span className="font-serif italic text-2xl text-[#FAF8F5] tracking-tight">friendly</span>
        <div className="flex items-center gap-4">
          <a
            href="/membership"
            className="text-sm text-[rgba(250,248,245,0.5)] hover:text-[rgba(250,248,245,0.85)] transition-colors"
          >
            Pricing
          </a>
          <a
            href="/credits"
            className="text-sm text-[rgba(250,248,245,0.5)] hover:text-[rgba(250,248,245,0.85)] transition-colors"
          >
            Get credits
          </a>
          <a
            href="#download"
            className="text-sm font-semibold text-[#FAF8F5] border border-[rgba(250,248,245,0.2)] px-4 py-2 rounded-full hover:border-[rgba(250,248,245,0.5)] transition-colors"
          >
            Download
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-16 pb-24 md:pt-24 md:pb-36">
        {/* Glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(193,113,74,0.12) 0%, transparent 70%)",
          }}
        />

        <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-8">
          Dubai · 2026
        </p>

        <h1 className="font-serif italic text-[clamp(72px,16vw,140px)] leading-none text-[#FAF8F5] tracking-tight mb-8">
          friendly
        </h1>

        <p className="text-[clamp(16px,2.5vw,20px)] text-[rgba(250,248,245,0.5)] max-w-sm leading-relaxed mb-12">
          Show up. Be present.<br />That's where the meaning is.
        </p>

        <div id="download" className="flex flex-row gap-3">
          <a
            href="#"
            className="flex items-center gap-2 bg-[#FAF8F5] text-[#1A1210] px-5 py-3 rounded-full font-semibold text-sm hover:bg-white transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </a>
          <a
            href="#"
            className="flex items-center gap-2 border border-[rgba(250,248,245,0.15)] text-[#FAF8F5] px-5 py-3 rounded-full font-semibold text-sm hover:border-[rgba(250,248,245,0.35)] transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.3.17.64.22.99.14l12.24-7.07-2.76-2.76-10.47 9.69zM20.68 10.3L17.6 8.54l-3.06 3.06 3.06 3.06 3.1-1.78c.88-.51.88-1.56-.02-2.08zM3.18.24L13.66 9.93l-2.76 2.76L1.18.7C.85.52.5.52.18.7L3.18.24z"/>
            </svg>
            Google Play
          </a>
        </div>

        <p className="text-[rgba(250,248,245,0.2)] text-xs mt-4">Coming soon</p>
      </section>

      {/* Divider */}
      <div className="w-px h-16 bg-[rgba(250,248,245,0.08)] mx-auto" />

      {/* Manifesto */}
      <section className="relative z-10 py-20 md:py-32 px-6 max-w-2xl mx-auto w-full text-center">
        <p className="font-serif italic text-[clamp(22px,4vw,32px)] text-[rgba(250,248,245,0.85)] leading-relaxed mb-10">
          "300,000 followers.<br />No one to grab coffee with."
        </p>
        <p className="text-[rgba(250,248,245,0.35)] text-base md:text-lg leading-relaxed mb-10">
          We built tools to connect everyone.<br />
          They left us more alone than before.<br />
          Exhausted by swipes. Performed for feeds.<br />
          Surrounded by noise, starved of presence.
        </p>
        <p className="font-serif italic text-[clamp(18px,3vw,24px)] text-[rgba(250,248,245,0.7)] leading-relaxed">
          You're not lonely because you're alone.<br />
          You're lonely because nothing feels real.<br />
          <span className="text-[#FAF8F5] not-italic">This does.</span>
        </p>
      </section>

      {/* Divider */}
      <div className="w-px h-16 bg-[rgba(250,248,245,0.08)] mx-auto" />

      {/* Three ideas */}
      <section className="relative z-10 py-20 md:py-32 px-6 max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
          {[
            {
              symbol: "☕",
              title: "Start an experience",
              body: "Coffee, a run, lunch. Set a time. It goes live on the map.",
            },
            {
              symbol: "→",
              title: "Someone nearby joins",
              body: "No swiping. No chatting first. A real person, a confirmed plan.",
            },
            {
              symbol: "◎",
              title: "Show up",
              body: "Check in. Put your phone down. Be here.",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-4">
              <span className="text-[#C1714A] text-2xl">{item.symbol}</span>
              <h3 className="font-serif text-xl text-[#FAF8F5]">{item.title}</h3>
              <p className="text-[rgba(250,248,245,0.4)] text-sm leading-relaxed max-w-[200px]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-px h-16 bg-[rgba(250,248,245,0.08)] mx-auto" />

      {/* Circular economy */}
      <section className="relative z-10 py-20 md:py-32 px-6 max-w-2xl mx-auto w-full text-center">
        <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-8">How it flows</p>
        <p className="font-serif italic text-[clamp(22px,4vw,32px)] text-[rgba(250,248,245,0.85)] leading-relaxed mb-10">
          Every host earns.<br />Every guest gives back.
        </p>
        <p className="text-[rgba(250,248,245,0.35)] text-base md:text-lg leading-relaxed">
          When you show up as a guest, your contribution goes to the person who opened the door.<br /><br />
          When you open the door, the next guest pays it forward.<br /><br />
          <span className="text-[rgba(250,248,245,0.6)]">Presence, exchanged. Value, circulated. Not extracted.</span>
        </p>
      </section>

      {/* Divider */}
      <div className="w-px h-16 bg-[rgba(250,248,245,0.08)] mx-auto" />

      {/* Venues */}
      <section className="relative z-10 py-20 md:py-32 px-6 max-w-4xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <div className="flex-1">
            <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-4">For venues</p>
            <h2 className="font-serif text-[clamp(28px,5vw,48px)] text-[#FAF8F5] leading-tight mb-5">
              Your space.<br />Their moment.
            </h2>
            <p className="text-[rgba(250,248,245,0.4)] text-base leading-relaxed max-w-sm">
              You've tried the ads. The Instagram posts. The discount codes.<br />
              Your best customers still walk in by accident.<br /><br />
              Friendly makes that happen on purpose.<br />
              List your space. Create offers for hosts. They bring guests —<br />
              you build a community of regulars.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="mailto:hello@itsjustafriendly.com?subject=Venue partnership"
              className="inline-block bg-[#C1714A] text-[#FAF8F5] px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity text-sm"
            >
              Partner with us →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[rgba(250,248,245,0.06)] py-8 px-6 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[rgba(250,248,245,0.25)] text-sm">
          <span className="font-serif italic text-lg">friendly</span>
          <div className="flex items-center gap-5">
            <a href="/about" className="hover:text-[rgba(250,248,245,0.5)] transition-colors">About</a>
            <a href="/membership" className="hover:text-[rgba(250,248,245,0.5)] transition-colors">Pricing</a>
            <a href="/credits" className="hover:text-[rgba(250,248,245,0.5)] transition-colors">Get credits</a>
            <a href="mailto:hello@itsjustafriendly.com" className="hover:text-[rgba(250,248,245,0.5)] transition-colors">hello@itsjustafriendly.com</a>
          </div>
          <span className="text-xs">© 2026 Friendly · Dubai</span>
        </div>
      </footer>

    </main>
  );
}
