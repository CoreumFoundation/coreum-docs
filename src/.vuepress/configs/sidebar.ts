import { SidebarConfig } from "vuepress";

export const sidebar: SidebarConfig = {
  "/guides": [
    {
      text: "Guides",
      children: ["/guides/index.md", "/guides/cored.md"],
    },
  ],
};
