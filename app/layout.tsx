import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "friendly — show up, be present",
  description: "Real experiences with real people. Coffee, runs, walks — no messaging, no profiles. Just show up.",
  openGraph: {
    title: "friendly",
    description: "Real experiences with real people. Coffee, runs, walks — no messaging, no profiles. Just show up.",
    url: "https://itsjustafriendly.com",
    siteName: "friendly",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "friendly",
    description: "Real experiences with real people. Coffee, runs, walks — no messaging, no profiles. Just show up.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body className="min-h-full flex flex-col bg-[#1A1210] text-[#FAF8F5] font-sans">
        {children}
      </body>
    </html>
  );
}
