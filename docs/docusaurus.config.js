// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VS Code Extension for Splunk SOAR',
  tagline: 'Dinosaurs are cool',
  url: 'https://splunk.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,
  favicon: 'img/soarcloud.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'splunk', // Usually your GitHub org/user name.
  projectName: "vscode-extension-splunk-soar",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false
          },  
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      /*announcementBar: {
        "id": "open_source",
        content: "The VS Code Extension for Splunk SOAR has been <a href=\"https://github.com/splunk/vscode-extension-splunk-soar\">released on Github</a> 🎉",
        "backgroundColor": "#3993FF",
        "textColor": "#000000",
        isCloseable: false
      },*/
      colorMode: {
        disableSwitch: true,
        defaultMode: "dark"
      },
      navbar: {
        title: 'VS Code Extension for Splunk SOAR',
        logo: {
          alt: 'My Site Logo',
          src: 'img/soarcloud.png',
        },
        items: [
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Help and Feedback',
            items: [
              {
                label: 'Report an Issue',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Splunk Community Slack',
                href: 'https://discordapp.com/invite/docusaurus',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Azure Marketplace',
                to: '/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/splunk/vscode-extension-splunk-soar',
              },
            ],
          },
          {
            title: 'SOAR App Development',
            items: [
              {
                label: 'App Authoring API',
                to: 'https://docs.splunk.com/Documentation/SOAR/current/DevelopApps/AppDevAPIRef',
              },
              {
                label: 'Tutorial',
                href: 'https://docs.splunk.com/Documentation/SOAR/current/DevelopApps/Tutorial',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Splunk Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
