// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Unit Network",
  tagline:
    "Unit Network redefines a new financial system, powered by AI, blockchain, and the tokenisation of assets in the real world",
  favicon: "img/unit-logo.png",

  // Set the production url of your site here
  url: "https://tolstoy.unitcode.org/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Unit Network", // Usually your GitHub org/user name.
  projectName: "unit-website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id", "fr", "es"],
    localeConfigs: {
      en: {
        label: "English",
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      id: {
        label: "Bahasa Indonesia",
      },
      fr: {
        label: "Français",
      },
      es: {
        label: "Español",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/unit-logo.png",
      navbar: {
        title: "Unit Network",
        logo: {
          alt: "My Site Logo",
          src: "img/unit-logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },

      footer: {
        style: "light",
        logo: {
          alt: "Unit Network Logo",
          src: "img/unit-logo.png",
          href: "https://tolstoy.unitcode.org/",
          width: 50,
          height: 50,
        },

        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation Hub",
                to: "/docs/intro",
              },
              {
                label: "Official Links",
                to: "/docs/official-links",
              },
              {
                label: "What is Unit Network",
                to: "/docs/what-is-unit-network/",
              },
              {
                label: "Ecosystem DAO",
                to: "/docs/Ecosystem-DAO/",
              },
              {
                label: "Architecture",
                to: "/docs/Architecture/",
              },
              {
                label: "Community",
                to: "/docs/Community/",
              },
              {
                label: "User Guide",
                to: "/docs/user-guide/",
              },
              {
                label: "Learning Hub",
                to: "/docs/learning-hub/",
              },
              {
                label: "Case Studies",
                to: "/docs/case-studies/",
              },
              {
                label: "Key Trends",
                to: "/docs/key-trends/",
              },
              {
                label: "Frequently Asked Questions",
                to: "/docs/frequently-asked-questions/",
              },
              {
                label: "Glossary",
                to: "/docs/glossary/",
              },
              {
                label: "Media / Brand Resources",
                to: "/docs/media/",
              },
              {
                label: "Terms of Services",
                to: "/docs/terms-of-services/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                to: "https://t.me/unitfoundation",
              },
              {
                label: "X",
                to: "https://twitter.com/theunitnetwork",
              },
              {
                label: "LinkedIn",
                to: "https://www.linkedin.com/company/theunitnetwork",
              },
              {
                label: "Instagram",
                to: "https://www.instagram.com/unit.network",
              },
              {
                label: "Discord",
                to: "https://discord.com/invite/unitnetwork",
              },
              {
                label: "Youtube",
                to: "https://www.youtube.com/c/UnitGlobal",
              },
            ],
          },
          {
            title: "Official Links",
            items: [
              {
                label: "Application",
                to: "https://app.unit.network/",
              },
              {
                label: "Documentation Hub",
                to: "https://docs.unit.network/",
              },
              {
                label: "Articles",
                to: "https://unitnetwork.medium.com/",
              },
            ],
          },
          {
            title: "Policies",
            items: [
              {
                label: "Terms of Services",
                to: "/docs/terms-of-services/",
              },
              {
                label: "Privacy Policy",
                href: "/docs/terms-of-services/",
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} Powered by Unit Network.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      //Search Function
      // algolia: {
      //   // New Algolia configuration...
      //   appId: "3AFM8K1VB1",
      //   apiKey: "efca234af25c6fd0be1550cc69363746",
      //   indexName: "docsearch",
      //   placeholder: "Search",
      //   contextualSearch: true,

      //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      //   replaceSearchResultPathname: {
      //     from: "/docs/", // or as RegExp: /\/docs\//
      //     to: "/",
      //   },
      //   //other search parameters
      // },
    }),
};

export default config;
