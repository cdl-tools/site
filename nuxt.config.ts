// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@formkit/nuxt",
    "nuxt-typed-router",
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
  ],
  typescript: {
    typeCheck: true,
  },
  formkit: {
    autoImport: true,
  },
  routeRules: {
    "/leaderboards": { isr: 600 },
  },
  experimental: {
    typedPages: true,
  },
});
