import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: `Ремонт стиральных машин в ${siteConfig.city} | Частный мастер`,
    template: `%s | Ремонт стиральных машин в ${siteConfig.city}`,
  },
  description: `Ремонт стиральных машин на дому в ${siteConfig.city}. Частный мастер ${siteConfig.masterName}. Выезд в день обращения, гарантия до 12 месяцев.`,
  metadataBase: new URL(siteConfig.baseUrl),
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
