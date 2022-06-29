import { NavbarConfig } from "vuepress";

export const navbar: NavbarConfig = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Guide",
    link: "/guides/",
  },
  {
    text: "Ecosystem",
    children: [
      {
        text: "Tokens",
        children: [
          {
            text: "Overview",
            link: "/tokens/",
          },
          {
            text: "Token Issuance",
            link: "/tokens/issuance",
          },
        ],
      },
      {
        text: "Smart Contracts",
        children: [
          {
            text: "Overview",
            link: "/contracts",
          },
        ],
      },
    ],
  },
  {
    text: "Components",
    children: [
      {
        text: "Crust",
        link: "/crust",
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
        text: "Coreum Front Page",
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
