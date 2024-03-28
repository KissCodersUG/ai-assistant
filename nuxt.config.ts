// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    experimental: {
      websocket: true,
    },
  },
  runtimeConfig: {
    openAiApiKey: process.env.OPENAI_API_KEY,
  },
});
