import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  const [login, common, register, resend, forgot, reset] = await Promise.all([
    import(`../../public/messages/${locale}/login.json`).then((m) => m.default),
    import(`../../public/messages/${locale}/common.json`).then((m) => m.default),
    import(`../../public/messages/${locale}/register.json`).then((m) => m.default),
    import(`../../public/messages/${locale}/resend.json`).then((m) => m.default),
    import(`../../public/messages/${locale}/forgot-password.json`).then((m) => m.default),
    import(`../../public/messages/${locale}/reset-password.json`).then((m) => m.default),
  ]);
  return {
    locale: "en",
    messages: { login, common, register, resend, forgot, reset },
  };
});
