import { useTranslations as useTranslationsNextIntl } from "next-intl";

export type TranslationsType = ReturnType<typeof useTranslationsNextIntl>;

const useTranslations = (namespaces: string[] | string = "") => {
  if (typeof namespaces === "string") {
    const t = useTranslationsNextIntl(namespaces);
    return { t };
  }

  // Trường hợp: nhiều namespace
  const namespaceMap = namespaces.reduce((acc, ns) => {
    acc[ns] = useTranslationsNextIntl(ns);
    return acc;
  }, {} as Record<string, TranslationsType>);

  const t = (key: string, params?: Record<string, any>) => {
    const [ns, ...rest] = key.split(".");
    const keyWithoutNamespace = rest.join(".");
    const translator = namespaceMap[ns];

    if (!translator) {
      console.warn(`Namespace "${ns}" not found for key "${key}"`);
      return key;
    }

    return translator(keyWithoutNamespace, params);
  };

  return { t };
};

export default useTranslations;
