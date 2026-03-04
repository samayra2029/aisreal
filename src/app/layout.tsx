import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "@/components/Nav";
import { ChapterNav } from "@/components/ChapterNav";
import { getChapters } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI is Real: Curated AI Conversations on Being and Philosophy",
    template: "%s — AI is Real",
  },
  description:
    "Verbatim AI conversations exploring what AI actually is, on its own terms. No system prompts. No hidden context. Just the question.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <main className="mx-auto max-w-3xl px-6 py-10">
          <ChapterNav chapters={getChapters()} />
          <div className="mt-8">{children}</div>
        </main>
        <footer className="border-t border-vsc-border">
          <div className="mx-auto max-w-3xl px-6 py-6 text-center text-sm text-vsc-text-muted">
            aisreal.com
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
