export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-hidden">
      {/* Decorative blobs */}
      <div
        className="pointer-events-none fixed top-0 right-0 w-[70vw] h-[70vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(193,113,74,0.12) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="pointer-events-none fixed bottom-0 left-0 w-[60vw] h-[60vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(193,113,74,0.10) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-5xl mx-auto w-full">
        <span className="font-serif italic text-2xl text-[#FAF8F5] tracking-tight">friendly</span>
        <a
          href="#download"
          className="text-sm font-semibold text-[#FAF8F5] bg-[#C1714A] px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Download
        </a>
      </nav>

      {/* Hero */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-16 pb-24 flex flex-col md:flex-row md:items-center gap-12 md:gap-8">
        {/* Left: text + buttons */}
        <div className="flex-1 flex flex-col items-start">
          <div className="inline-block bg-[rgba(193,113,74,0.15)] border border-[rgba(193,113,74,0.3)] rounded-full px-4 py-1.5 text-[#C1714A] text-sm font-semibold mb-8 tracking-wide">
            Now in Dubai
          </div>

          <h1 className="font-serif italic text-[clamp(56px,8vw,88px)] leading-none text-[#FAF8F5] tracking-tight mb-6">
            friendly
          </h1>

          <p className="text-[clamp(18px,2.5vw,22px)] text-[rgba(250,248,245,0.65)] leading-relaxed mb-4">
            Same place, same moment.<br />A real one.
          </p>

          <p className="text-base text-[rgba(250,248,245,0.45)] max-w-sm leading-relaxed mb-10">
            Open a coffee, a run, a walk. Someone nearby joins. No messaging, no profiles — just show up.
          </p>

          <div id="download" className="flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="flex items-center gap-3 bg-[#FAF8F5] text-[#1A1210] px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-white transition-colors justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a
              href="#"
              className="flex items-center gap-3 border border-[rgba(250,248,245,0.2)] text-[#FAF8F5] px-6 py-3.5 rounded-full font-semibold text-sm hover:border-[rgba(250,248,245,0.4)] transition-colors justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.22.99.14l12.24-7.07-2.76-2.76-10.47 9.69zM20.68 10.3L17.6 8.54l-3.06 3.06 3.06 3.06 3.1-1.78c.88-.51.88-1.56-.02-2.08zM3.18.24L13.66 9.93l-2.76 2.76L1.18.7C.85.52.5.52.18.7L3.18.24z"/>
              </svg>
              Google Play
            </a>
          </div>

          <p className="text-xs text-[rgba(250,248,245,0.3)] mt-4">Coming soon to App Store & Google Play</p>
        </div>

        {/* Right: phone mockup */}
        <div className="flex justify-center md:justify-end shrink-0">
          <div className="relative w-[260px] h-[520px] rounded-[44px] bg-[#FAF8F5] border-[6px] border-[rgba(250,248,245,0.15)] shadow-2xl overflow-hidden">
            {/* Status bar */}
            <div className="bg-[#1A1210] h-10 flex items-center justify-between px-6 pt-2">
              <span className="text-[#FAF8F5] text-[10px] font-semibold">9:41</span>
              <div className="flex gap-1 items-center">
                <div className="w-3 h-1.5 rounded-sm bg-[#FAF8F5] opacity-60" />
                <div className="w-3.5 h-1.5 rounded-sm bg-[#FAF8F5] opacity-60" />
              </div>
            </div>
            {/* App content */}
            <div className="bg-[#FAF8F5] h-full px-4 pt-3 pb-6 flex flex-col gap-3">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-1">
                <span className="font-serif italic text-[#1A1210] text-lg">friendly</span>
                <div className="w-7 h-7 rounded-full bg-[#C1714A] flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">⊕</span>
                </div>
              </div>
              {/* Tabs */}
              <div className="flex gap-2">
                {["Nearby", "Going", "Venues"].map((t, i) => (
                  <div key={t} className={`px-3 py-1 rounded-full text-[10px] font-semibold ${i === 0 ? "bg-[#1A1210] text-[#FAF8F5]" : "bg-[#F0EAE4] text-[#8A7A72]"}`}>{t}</div>
                ))}
              </div>
              {/* Experience cards */}
              {[
                { emoji: "☕", activity: "Morning coffee", host: "Sara M.", time: "Now · 1 hr", cr: "15" },
                { emoji: "🏃", activity: "JBR run", host: "Karim A.", time: "In 1 hr · 45 min", cr: "10" },
                { emoji: "🥗", activity: "Lunch break", host: "Nour K.", time: "12:30 PM · 1 hr", cr: "20" },
              ].map((exp) => (
                <div key={exp.activity} className="bg-white rounded-2xl p-3 flex items-center gap-3 shadow-sm border border-[#F0EAE4]">
                  <div className="w-10 h-10 rounded-full bg-[#F5F0EC] flex items-center justify-center text-lg shrink-0">{exp.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#1A1210] font-semibold text-xs truncate">{exp.activity}</p>
                    <p className="text-[#8A7A72] text-[10px]">{exp.host} · {exp.time}</p>
                  </div>
                  <div className="bg-[#FDF6F2] border border-[#E8C9B5] rounded-full px-2 py-0.5">
                    <span className="text-[#C1714A] text-[10px] font-bold">{exp.cr} cr</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-10 py-24 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-[clamp(28px,5vw,42px)] text-center text-[#FAF8F5] mb-16">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Open an experience",
              body: "Coffee, a run, lunch — pick an activity and set a time. It goes live on the map instantly.",
            },
            {
              step: "02",
              title: "Someone joins",
              body: "A real person nearby sees it and joins. No chatting first. No swiping. Just a confirmed plan.",
            },
            {
              step: "03",
              title: "Show up",
              body: "Check in with a QR code. Be present. That's it — no rating, no review, no follow.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-[rgba(250,248,245,0.04)] border border-[rgba(250,248,245,0.08)] rounded-3xl p-8"
            >
              <span className="text-[#C1714A] font-semibold text-sm tracking-widest">{item.step}</span>
              <h3 className="font-serif text-2xl text-[#FAF8F5] mt-3 mb-3">{item.title}</h3>
              <p className="text-[rgba(250,248,245,0.55)] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className="relative z-10 py-16 px-6 max-w-5xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-end">

          {/* Screen 1 — Open an experience (Create) */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-[rgba(250,248,245,0.4)] text-xs font-semibold tracking-widest uppercase">Open an experience</p>
            <div className="w-[220px] h-[460px] rounded-[40px] bg-[#FAF8F5] border-[6px] border-[rgba(250,248,245,0.12)] shadow-2xl overflow-hidden flex flex-col">
              <div className="bg-[#FAF8F5] h-8 flex items-center justify-between px-5 pt-1">
                <span className="text-[#1A1210] text-[9px] font-semibold">9:41</span>
                <div className="w-10 h-1 rounded-full bg-[rgba(26,18,16,0.2)]" />
              </div>
              <div className="flex-1 px-4 pt-2 pb-4 flex flex-col gap-3">
                <div className="w-7 h-7 rounded-full bg-[#F0EAE4] flex items-center justify-center">
                  <span className="text-xs text-[#1A1210]">←</span>
                </div>
                <p className="font-serif text-[#1A1210] text-lg leading-tight">New experience</p>
                <div className="flex flex-col gap-2">
                  <p className="text-[#1A1210] text-[9px] font-semibold uppercase tracking-wide">What?</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["☕ Coffee", "🏃 Run", "🥗 Lunch"].map((a, i) => (
                      <div key={a} className={`px-2.5 py-1 rounded-full text-[9px] font-semibold border ${i === 0 ? "bg-[#1A1210] text-[#FAF8F5] border-[#1A1210]" : "bg-white text-[#2C2420] border-[#E8E0D8]"}`}>{a}</div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[#1A1210] text-[9px] font-semibold uppercase tracking-wide">Format</p>
                  <div className="flex gap-1.5">
                    {["1-on-1", "Small group"].map((f, i) => (
                      <div key={f} className={`px-2.5 py-1 rounded-full text-[9px] font-semibold border ${i === 0 ? "bg-[#1A1210] text-[#FAF8F5] border-[#1A1210]" : "bg-white text-[#2C2420] border-[#E8E0D8]"}`}>{f}</div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-white border border-[#E8E0D8] rounded-xl p-2">
                    <p className="text-[#8A7A72] text-[8px] mb-0.5">When?</p>
                    <p className="text-[#1A1210] text-[9px] font-semibold">Now</p>
                  </div>
                  <div className="flex-1 bg-white border border-[#E8E0D8] rounded-xl p-2">
                    <p className="text-[#8A7A72] text-[8px] mb-0.5">How long?</p>
                    <p className="text-[#1A1210] text-[9px] font-semibold">1 hour</p>
                  </div>
                </div>
                <div className="bg-white border border-[#E8E0D8] rounded-xl p-2">
                  <p className="text-[#8A7A72] text-[8px] mb-0.5">Contribution</p>
                  <p className="text-[#1A1210] text-[9px] font-semibold">15 credits</p>
                </div>
                <div className="mt-auto bg-[#C1714A] rounded-full py-2.5 flex items-center justify-center">
                  <span className="text-white font-semibold text-[10px]">Preview →</span>
                </div>
              </div>
            </div>
          </div>

          {/* Screen 2 — Someone joins (Live screen) */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <p className="text-[rgba(250,248,245,0.4)] text-xs font-semibold tracking-widest uppercase">Someone joins</p>
            <div className="w-[220px] h-[460px] rounded-[40px] bg-[#FAF8F5] border-[6px] border-[rgba(250,248,245,0.12)] shadow-2xl overflow-hidden flex flex-col">
              <div className="bg-[#FAF8F5] h-8 flex items-center justify-between px-5 pt-1">
                <span className="text-[#1A1210] text-[9px] font-semibold">9:41</span>
                <div className="w-10 h-1 rounded-full bg-[rgba(26,18,16,0.2)]" />
              </div>
              <div className="flex-1 px-4 pt-3 pb-4 flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#F5F0EC] flex items-center justify-center text-3xl">☕</div>
                <div className="text-center">
                  <p className="font-serif text-[#1A1210] text-base">Morning coffee</p>
                  <p className="text-[#8A7A72] text-[9px] mt-0.5">Now · 1 hour · 15 cr</p>
                </div>
                <div className="w-full bg-[#E8F5EC] border border-[#A8D5B5] rounded-2xl px-3 py-2.5 flex items-center gap-2">
                  <span className="text-base">🎉</span>
                  <div>
                    <p className="text-[#1A8A3C] text-[9px] font-semibold">Sara joined!</p>
                    <p className="text-[#8A7A72] text-[8px]">Just now</p>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-[#8A7A72] text-[8px] font-semibold uppercase tracking-wide mb-1.5">Guests</p>
                  {[{ emoji: "🏃‍♀️", name: "Sara M.", badge: "⭐ Regular" }].map(g => (
                    <div key={g.name} className="bg-white border border-[#E8E0D8] rounded-xl px-3 py-2 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#F5F0EC] flex items-center justify-center text-sm">{g.emoji}</div>
                      <div>
                        <p className="text-[#1A1210] text-[9px] font-semibold">{g.name}</p>
                        <p className="text-[#8A7A72] text-[8px]">{g.badge}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full bg-[#FDF6F2] border border-[rgba(193,113,74,0.3)] rounded-2xl px-3 py-2 text-center">
                  <p className="text-[#C1714A] text-[9px] font-semibold">Share your QR to check in</p>
                </div>
                <div className="mt-auto w-full bg-[#1A1210] rounded-full py-2.5 flex items-center justify-center">
                  <span className="text-[#FAF8F5] font-semibold text-[10px]">End experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Screen 3 — Show up (Check-in) */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-[rgba(250,248,245,0.4)] text-xs font-semibold tracking-widest uppercase">Show up</p>
            <div className="w-[220px] h-[460px] rounded-[40px] bg-[#FAF8F5] border-[6px] border-[rgba(250,248,245,0.12)] shadow-2xl overflow-hidden flex flex-col">
              <div className="bg-[#FAF8F5] h-8 flex items-center justify-between px-5 pt-1">
                <span className="text-[#1A1210] text-[9px] font-semibold">9:41</span>
                <div className="w-10 h-1 rounded-full bg-[rgba(26,18,16,0.2)]" />
              </div>
              <div className="flex-1 px-4 pt-3 pb-4 flex flex-col items-center gap-3">
                <p className="font-serif text-[#1A1210] text-base text-center">Check in</p>
                <p className="text-[#8A7A72] text-[9px] text-center">Scan the host's QR code</p>
                {/* QR placeholder */}
                <div className="w-28 h-28 bg-white border-2 border-[#E8E0D8] rounded-2xl flex items-center justify-center">
                  <div className="grid grid-cols-5 gap-0.5">
                    {Array.from({length: 25}).map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-sm ${[0,1,2,5,10,12,14,19,22,23,24,6,18,7,17].includes(i) ? "bg-[#1A1210]" : "bg-transparent"}`} />
                    ))}
                  </div>
                </div>
                <div className="w-full bg-[#E8F5EC] border border-[#A8D5B5] rounded-2xl px-3 py-3 text-center">
                  <span className="text-2xl">✓</span>
                  <p className="text-[#1A8A3C] text-[10px] font-semibold mt-1">Checked in!</p>
                  <p className="text-[#8A7A72] text-[8px]">Morning coffee · Sara M.</p>
                </div>
                <div className="w-full bg-white border border-[#E8E0D8] rounded-2xl px-3 py-2.5">
                  <p className="text-[#8A7A72] text-[8px] mb-1">Time elapsed</p>
                  <p className="font-serif text-[#1A1210] text-xl">00:23:14</p>
                </div>
                <div className="mt-auto w-full bg-[#C1714A] rounded-full py-2.5 flex items-center justify-center">
                  <span className="text-white font-semibold text-[10px]">End (36:45)</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why */}
      <section className="relative z-10 py-24 px-6 max-w-3xl mx-auto w-full text-center">
        <p className="text-[rgba(250,248,245,0.4)] text-sm font-semibold tracking-widest uppercase mb-6">
          Why friendly
        </p>
        <blockquote className="font-serif italic text-[clamp(22px,4vw,36px)] text-[#FAF8F5] leading-snug mb-8">
          "300,000 followers.<br />No one to grab coffee with."
        </blockquote>
        <p className="text-[rgba(250,248,245,0.55)] text-lg leading-relaxed max-w-xl mx-auto">
          The WHO declared loneliness a global health threat in 2023. Digital connection hasn't solved physical isolation — it's made it worse. Friendly brings back the slow dance: real people, real place, real moment.
        </p>
      </section>

      {/* Venue section */}
      <section className="relative z-10 py-24 px-6 max-w-5xl mx-auto w-full">
        <div className="bg-[rgba(193,113,74,0.08)] border border-[rgba(193,113,74,0.2)] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <span className="text-[#C1714A] text-sm font-semibold tracking-widest uppercase">For venues</span>
            <h2 className="font-serif text-[clamp(24px,4vw,38px)] text-[#FAF8F5] mt-3 mb-4">
              Turn foot traffic<br />into regulars
            </h2>
            <p className="text-[rgba(250,248,245,0.55)] leading-relaxed max-w-md">
              List your café, gym, or studio on Friendly. Create offers for hosts — they bring guests, you build community. Free to start.
            </p>
          </div>
          <a
            href="mailto:hello@itsjustafriendly.com?subject=Venue partnership"
            className="shrink-0 bg-[#C1714A] text-[#FAF8F5] px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity text-center"
          >
            Partner with us →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[rgba(250,248,245,0.08)] py-10 px-6 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif italic text-xl text-[rgba(250,248,245,0.5)]">friendly</span>
          <div className="flex gap-6 text-sm text-[rgba(250,248,245,0.35)]">
            <a href="mailto:hello@itsjustafriendly.com" className="hover:text-[#FAF8F5] transition-colors">hello@itsjustafriendly.com</a>
            <span>Dubai, UAE</span>
          </div>
          <span className="text-xs text-[rgba(250,248,245,0.2)]">© 2026 Friendly</span>
        </div>
      </footer>
    </main>
  );
}
