module.exports = {
  apps: [
    {
      name: "Ai-Assistant",
      port: "3000",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
      watch: true,
    },
  ],
};
