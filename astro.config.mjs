import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/utils/remark-reading-time.ts";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-theme-cody.netlify.app",
  integrations: [mdx(), sitemap(), tailwind(), svelte()],
  // markdown: {
  //   remarkPlugins: [remarkReadingTime],
  //   syntaxHighlight: "shiki",
  // shikiConfig: {
  // // Choose from Shiki's built-in themes (or add your own)
  // // https://github.com/shikijs/shiki/blob/main/docs/themes.md
  // theme: "andromeeda",
  // theme: "dark-plus",
  // theme: "slack-dark",
  // theme: "material-theme-darker",
  // themes: {
  //   light: "github-light",
  //   dark: "github-dark",
  // },
  // },
  // },
  output: "hybrid",
  adapter: vercel()
});