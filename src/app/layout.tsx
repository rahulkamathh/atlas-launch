import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas — Benefit from expertise. Not screen time.",
  description:
    "Atlas helps investors automatically follow trusted human experts and AI investment agents from a single platform.",
  keywords: ["investing", "AI agents", "copy trading", "India", "NSE", "portfolio"],
  openGraph: {
    title: "Atlas — Benefit from expertise. Not screen time.",
    description:
      "The future of investing won't be manual. Allocate capital to human traders and AI agents automatically.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
