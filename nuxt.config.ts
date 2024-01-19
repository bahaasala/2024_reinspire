export default defineNuxtConfig({
  // Other Nuxt configuration options...

  runtimeConfig: {
    private: {
      DATO_CMS_TOKEN: process.env.DATO_CMS_TOKEN,
    },
  },
  app: {
    head: {
      title: "Reinspire",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#131010" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#000000" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  css: ["@/assets/style/scss/index.scss"],

  modules: ["@sidebase/nuxt-session", "@nuxt/image"]
});
