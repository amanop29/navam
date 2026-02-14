import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/MainLayout";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Navam Sunil Jewellers | Crafting Heritage into Gold",
    template: "%s | Navam Sunil Jewellers",
  },
  description:
    "Premium gold jewellery crafted with exquisite craftsmanship. Explore our heritage collections — Aradhya, Devyani, and Tarini. From sketch to sparkle since 1964.",
  keywords: [
    "gold jewellery",
    "luxury jewellery",
    "heritage jewellery",
    "gold necklace",
    "gold earrings",
    "diamond jewellery",
    "Navam Sunil Jewellers",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Navam Sunil Jewellers",
    title: "Navam Sunil Jewellers | Crafting Heritage into Gold",
    description:
      "Premium gold jewellery crafted with exquisite craftsmanship since 1964.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
