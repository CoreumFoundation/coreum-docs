import { defaultTheme, defineUserConfig } from "vuepress";
import { navbar } from "./configs/navbar";

export default defineUserConfig({
  lang: "en-us",
  title: "Coreum",
  description:
    "Documentation for Coreum, a Third-Generation Layer 1 Blockchain",
  theme: defaultTheme({
    navbar,
  }),
});
