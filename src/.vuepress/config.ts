import { defaultTheme, defineUserConfig } from "vuepress";
import { navbar } from "./configs/navbar";
import { sidebar } from "./configs/sidebar";

export default defineUserConfig({
  lang: "en-us",
  title: "Coreum",
  description:
    "Documentation for Coreum, a Third-Generation Layer 1 Blockchain",
  theme: defaultTheme({
    logo: "/logo.png",
    navbar,
    sidebar,
  }),
});
