import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import PublicationCard from "./components/PublicationCard.vue";
import "@catppuccin/vitepress/theme/mocha/mauve.css";
// https://catppuccin.com/palette/

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // makes <PublicationCard /> available in every markdown page
    app.component("PublicationCard", PublicationCard);
  },
} satisfies Theme;
