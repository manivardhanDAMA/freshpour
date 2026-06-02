import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["assets/logo-new.png", "assets/logo.svg"],
      manifest: {
        name: "Fresh Pour",
        short_name: "Fresh Pour",
        description: "Fresh batter, podi and pickles preorder app.",
        theme_color: "#2D5A27",
        background_color: "#FDF8EE",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        icons: [
          {
            src: "/assets/logo-new.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,svg,ico}"]
      }
    })
  ],
  server: {
    port: 5173
  }
});
