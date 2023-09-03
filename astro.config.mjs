import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypePrettyCode from "rehype-pretty-code";
import tailwind from "@astrojs/tailwind";

const prettyCodeOptions = {
  theme: "dark-plus",
  
};

// https://astro.build/config
export default defineConfig({
  site: "https://sambriels.github.io",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
  }
});