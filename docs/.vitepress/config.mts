import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  srcDir: "md",
  title: "HGB-BIN-PROTEOMICS",
  description: "Bioinformatics/Proteomics Research Group FH OÖ Campus Hagenberg GitHub Webpage.",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://github.com/hgb-bin-proteomics/hgb-bin-proteomics.github.io/raw/master/logos/bin/cube_white.png",
      },
    ],
  ],
  markdown: {
   theme: {
     light: "catppuccin-latte",
     dark: "catppuccin-mocha",
    },
  },
  themeConfig: {
    logo: {
      src: "https://github.com/hgb-bin-proteomics/hgb-bin-proteomics.github.io/raw/master/logos/bin/cube_white.png",
      alt: "logo",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Software", link: "/software" },
      { text: "Contact", link: "/contact" },
    ],
    sidebar: [
      {
        items: [
          { text: "Software", link: "/software" },
          { text: "Contact", link: "/contact" },
        ],
      },
    ],
    footer: {
      copyright: "Copyright © Bioinformatics Research Group, FH Oberösterreich Campus Hagenberg"
    },
    socialLinks: [{ icon: "github", link: "https://github.com/hgb-bin-proteomics" }],
    search: {
        provider: 'local'
    },
  },
})
