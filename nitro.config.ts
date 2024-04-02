import { definenitroConfig } from "nitropack";

export default definenitroConfig({
  vercel: {
    functions: {
      maxDuration: 300,
    },
  },
});
