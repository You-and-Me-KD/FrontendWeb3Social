import type { Metadata } from "next";
import { Rajdhani, Titillium_Web } from "next/font/google";
import "./globals.css";

import config from "../../../lingui.config";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

const fontSans = Rajdhani({
  variable: "--font-rajdhani-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const fontSans2 = Titillium_Web({
  variable: "--font-titillium-web-sans",
  weight: ["200", "300", "400", "600", "700", "900"],
});

export async function generateStaticParams() {
  return config.locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Web3s Social",
    description: "Social network with web3 features",
  };
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <NextIntlClientProvider>
        <body className={`${fontSans.variable} ${fontSans2} antialiased`}>
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
