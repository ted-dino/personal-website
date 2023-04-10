import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ted-portfolio.vercel.app/",
  integrations: [sitemap()],
});
