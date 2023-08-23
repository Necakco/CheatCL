// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CheatCl',
  tagline: 'bãi rác',
  favicon: 'img/icon.png',

  // Set the production url of your site here
  url: 'https://necakco.githun.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'necakco', // Usually your GitHub org/user name.
  projectName: 'cheatcl', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        // apps: {
        //   sidebarPath: require.resolve('./appsidebars.js'),
        //   routeBasePath: "/app",
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.

        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'game',
        path: 'minecraft',
        routeBasePath: 'minecraft',
        sidebarPath: require.resolve('./game.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'gameroblox',
        path: 'roblox',
        routeBasePath: 'roblox',
        sidebarPath: require.resolve('./game2.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'gameosu',
        path: 'osu',
        routeBasePath: 'osu',
        sidebarPath: require.resolve('./game3.js'),
        // ... other options
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CheatCL',
        logo: {
          alt: 'My Site Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'App',
          },
          {
            label: 'game',
            position: 'left',
            items: [
              {to: '/minecraft', label: 'Minecraft'},
              {to: '/roblox', label: 'Roblox'},
              {to: '/osu', label: 'osu'},
            ]
          },
          {to: '/blog', label: 'Config/Posts', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Link',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UC51P2yIrqRGdun9MtvXNXaA',
              },
              {
                label: 'Bio',
                href: 'https://ayo.so/frenda',
              },
            ],
          },
        
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CheatCL.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

  
    }),
    
};

module.exports = config;
