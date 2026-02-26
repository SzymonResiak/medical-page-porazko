module.exports = {
  apps: [
    {
      name: "medical-page",
      script: "npm",
      args: "start",

      exec_mode: "fork",

      // 🔑 critical settings
      autorestart: true,
      restart_delay: 5000,   // wait for socket release
      max_restarts: 3,

      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "0.0.0.0", // force IPv4, avoids :::3000 issues
      },
    },
  ],
};
