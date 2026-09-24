import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "SISA — Dari Sisa, Jadi Cahaya.",
  description: "Kisah lilin aromaterapi SISA: dibuat dari ampas kopi kafe mitra, dikeringkan, dan dilebur bersama palm wax.",
  openGraph: {
    title: "SISA — Lilin Aromaterapi dari Ampas Kopi",
    description: "Dari Sisa, Jadi Cahaya.",
    locale: "id_ID",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#17100D",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // wajib agar env(safe-area-inset-*) aktif di iOS
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
