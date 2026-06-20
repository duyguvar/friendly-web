export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#1A1210] flex flex-col overflow-x-hidden">

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
        <section className="pt-16 pb-20 md:pt-24 md:pb-28 text-center">
          <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-6">About</p>
          <h1 className="font-serif italic text-[clamp(40px,8vw,72px)] text-[#FAF8F5] leading-none mb-8">
            We asked a simple question.
          </h1>
          <p className="text-[rgba(250,248,245,0.4)] text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Why is it so hard to just grab a coffee with someone new?
          </p>
        </section>

        {/* Divider */}
        <div className="w-px h-16 bg-[rgba(250,248,245,0.08)] mx-auto" />

        {/* The problem */}
        <section className="py-20 md:py-32 max-w-2xl mx-auto text-center">
          <p className="font-serif italic text-[clamp(22px,4vw,32px)] text-[rgba(250,248,245,0.85)] leading-relaxed mb-10">
            "More connected than ever.<br />More alone than before."
          </p>
          <p className="text-[rgba(250,248,245,0.35)] text-base md:text-lg leading-relaxed mb-8">
            We've been sold tools that promised connection.<br />
            What we got was performance. Metrics. Feeds optimised for time spent, not meaning felt.
          </p>
          <p className="text-[rgba(250,248,245,0.35)] text-base md:text-lg leading-relaxed">
            The problem isn't technology. It's what we built it for.<br />
            Engagement over presence. Scale over depth. Attention over time.
          </p>
        </section>

        {/* Divider */}
        <div className="w-px h-16 bg-[rgba(250,248,245,0.08)] mx-auto" />

        {/* The idea */}
        <section className="py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-5">The idea</p>
              <h2 className="font-serif text-[clamp(28px,5vw,44px)] text-[#FAF8F5] leading-tight mb-6">
                Presence<br />is the product.
              </h2>
              <p className="text-[rgba(250,248,245,0.4)] text-base leading-relaxed">
                Friendly is not a social network. There are no profiles to curate, no messages to craft, no followers to accumulate.
              </p>
            </div>
            <div className="flex flex-col gap-8 md:pt-16">
              <div>
                <p className="text-[#FAF8F5] font-semibold mb-2">One thing happens here.</p>
                <p className="text-[rgba(250,248,245,0.4)] text-base leading-relaxed">
                  Someone starts a moment worth sharing — a coffee, a run, a walk. A real time, a real place. Someone nearby joins. They show up. They meet. That's it.
                </p>
              </div>
              <div>
                <p className="text-[#FAF8F5] font-semibold mb-2">No chat. No swiping. No profiles.</p>
                <p className="text-[rgba(250,248,245,0.4)] text-base leading-relaxed">
                  The friction we removed wasn't the useful kind. The friction we kept is the point — you have to show up.
                </p>
              </div>
              <div>
                <p className="text-[#FAF8F5] font-semibold mb-2">Credits, not currency.</p>
                <p className="text-[rgba(250,248,245,0.4)] text-base leading-relaxed">
                  Hosts design the moment. Guests make it real. Credits flow between them — a quiet acknowledgment that someone's time and care mattered.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-px h-16 bg-[rgba(250,248,245,0.08)] mx-auto" />

        {/* Dubai */}
        <section className="py-20 md:py-32 max-w-2xl mx-auto text-center">
          <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-6">Where we started</p>
          <h2 className="font-serif text-[clamp(28px,5vw,44px)] text-[#FAF8F5] leading-tight mb-8">
            Dubai · 2026
          </h2>
          <p className="text-[rgba(250,248,245,0.4)] text-base md:text-lg leading-relaxed mb-6">
            Dubai is one of the most diverse cities on earth. Over 200 nationalities, millions of people who moved here with ambition — and found themselves eating alone.
          </p>
          <p className="text-[rgba(250,248,245,0.4)] text-base md:text-lg leading-relaxed">
            It felt like the right place to start. A city full of interesting people, all waiting for the same first move.
          </p>
        </section>

        {/* Divider */}
        <div className="w-px h-16 bg-[rgba(250,248,245,0.08)] mx-auto" />

        {/* Contact */}
        <section className="py-20 md:py-32 text-center">
          <p className="text-[#C1714A] text-xs font-semibold tracking-[0.2em] uppercase mb-6">Say hello</p>
          <h2 className="font-serif italic text-[clamp(28px,5vw,44px)] text-[#FAF8F5] leading-tight mb-8">
            We'd love to hear from you.
          </h2>
          <p className="text-[rgba(250,248,245,0.4)] text-base leading-relaxed mb-10 max-w-sm mx-auto">
            Venues, partnerships, press, or just a thought — reach out.
          </p>
          <a
            href="mailto:hello@itsjustafriendly.com"
            className="bg-[#C1714A] text-[#FAF8F5] px-8 py-4 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            hello@itsjustafriendly.com
          </a>
        </section>

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
