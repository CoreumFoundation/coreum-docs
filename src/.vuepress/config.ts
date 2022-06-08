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
    text: "Ecosystem",
    children: [
      {
        text: "Tokens",
        children: [
          {
            text: "Overview",
            link: "/tokens",
          },
          {
            text: "Issuance",
            link: "/tokens/issuance",
          },
        ],
      },
      {
        text: "Smart Contracts",
        children: [
          {
            text: "Overview",
            link: "/contracts"
          }
        ]
      }
    ],
  },
  {
    text: "Components",
    children: [
      {
        text: "Coreznet",
        link: "/coreznet",
      },
      {
        text: "Explorer",
        link: "/explorer",
      },
      {
        text: "Monitoring",
        link: "/monitoring",
      },
      {
        text: "Tools",
        link: "/tools",
      },
    ],
  },
  {
    text: "Links",
    children: [
      {
        text: "Main Page",
        link: "https://coreum.com",
      },
      {
        text: "Coreum Block Explorer",
        link: "https://coreum.com",
      },
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
