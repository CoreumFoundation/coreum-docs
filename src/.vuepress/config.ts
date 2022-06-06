import { defaultTheme, defineUserConfig } from "vuepress";
import { NavbarConfig } from "vuepress";

const navbar: NavbarConfig = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Guide",
    link: "/guide",
  },
  {
    text: "Components",
    children: [
      {
        text: "Coreznet",
        children: [
          { text: "intro", link: "/coreznet" },
          { text: "installation", link: "/coreznet/installation" },
        ],
      },
      {
        text: "Explorer",
        children: [
          { text: "intro", link: "/coreznet" },
          { text: "installation", link: "/coreznet/installation" },
        ],
      }
    ],
  },
  {
    text: "Links",
    children: [
      {
        text: "Github",
        link: "https://github.com/CoreumFoundation",
      },
    ],
  },
];

export default defineUserConfig({
  lang: "en-us",
  title: "Coreum",
  description:
    "Documentation for Coreum, a Third-Generation Layer 1 Blockchain",
  theme: defaultTheme({
    locales: {
      "/": {
        navbar,
      },
    },
  }),
});
