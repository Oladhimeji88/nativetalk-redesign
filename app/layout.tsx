import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NativeTalk - Cloud calling, in your hands",
  description:
    "NativeTalk is the cloud phone system for modern business. Generate virtual numbers without a SIM, separate work from personal, and launch a full call center in 24 hours.",
  icons: { icon: "/assets/favicon.png" },
};

export const viewport: Viewport = {
  themeColor: "#0a211f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
