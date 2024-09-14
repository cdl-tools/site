// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        {
          property: "og:description",
          content:
            "Community Day League is a project set up by several Community Ambassadors as a way to try and generate engagement, friendly competition and awareness of Community Days. In short, it's a global catching competition.",
        },
        {
          property: "og:title",
          content: "Community Day League",
        },
        {
          property: "og:image",
          content: "~/assets/cdl-play-logo.png",
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
