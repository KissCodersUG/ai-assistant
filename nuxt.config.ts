// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  auth: {
    globalAppMiddleware: true,
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-mongoose", "@sidebase/nuxt-auth"],
  mongoose: {
    uri: process.env.MONGODB_URI,
  },
  nitro: {
    vercel: { functions: { maxDuration: 300 } },
    experimental: {
      websocket: true,
    },
  },
  runtimeConfig: {
    openAiApiKey: process.env.OPENAI_API_KEY,
  },
});
