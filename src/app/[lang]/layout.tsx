import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import {
  allMessages,
  getI18nInstance,
  initLingui,
  LinguiClientProvider,
  PageLangParam,
} from "@/libs/lingui";
import config from "../../../lingui.config";

const fontSans = Rajdhani({
  variable: "--font-rajdhani-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateStaticParams() {
  return config.locales.map((lang) => ({ lang }));
}

export async function generateMetadata(
  props: PageLangParam
): Promise<Metadata> {
  const { lang } = await props.params; // Await params here
  const i18n = getI18nInstance(lang);

  return {
    title: i18n._("Web3s Social"),
    description: i18n._("Social network with web3 features"),
  };
}
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "vi" }>;
}>) {
  const { lang } = await params;

  initLingui(lang);
  return (
    <html lang={lang}>
      <LinguiClientProvider
        initialLocale={lang}
        initialMessages={allMessages[lang]!}
      >
        <body className={`${fontSans.variable} antialiased`}>{children}</body>
      </LinguiClientProvider>
    </html>
  );
}
