// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  auth: {
    globalAppMiddleware: true,
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth"],
  nitro: {
    experimental: {
      websocket: true,
    },
  },
  runtimeConfig: {
    openAiApiKey: process.env.OPENAI_API_KEY,
  },
});
