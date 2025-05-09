const config = {
  locales: ["en", "vi"],
  sourceLocale: "en",
  catalogs: [
    {
      path: "src/locales/{locale}/messages",
      include: ["src/"],
      exclude: ["node_modules/"],
    },
  ],
  format: "po",
};

export default config;