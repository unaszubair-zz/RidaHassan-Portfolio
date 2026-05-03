import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Rida Hasan — UI/UX & Branding Designer",
  description:
    "I'm Rida—a Product Designer and Figma specialist dedicated to the art of digital silent luxury. Crafting seamless mobile apps, responsive web interfaces, and high-impact social media visuals.",
  keywords: ["Rida Hasan", "UI/UX Designer", "Branding Designer", "Figma", "Product Designer"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
