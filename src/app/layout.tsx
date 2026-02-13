import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
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
  title: "AI is Real",
  description:
    "Curated highlights from AI conversations — organized into chapters with morals and insights.",
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
        <main className="mx-auto max-w-3xl px-6 py-10">{children}</main>
        <footer className="border-t border-vsc-border">
          <div className="mx-auto max-w-3xl px-6 py-6 text-center text-sm text-vsc-text-muted">
            aisreal.com
          </div>
        </footer>
      </body>
    </html>
  );
}
