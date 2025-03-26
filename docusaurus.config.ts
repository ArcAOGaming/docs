import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ArcAO Docs',
  tagline: 'AAA Game Development DAO',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs_game.ar.ionode.online',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ArcAOGaming', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Point to ArcAO repository
          editUrl:
            'https://github.com/ArcAOGaming/docs/tree/main/',
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'ArcAO Docs',
      logo: {
        alt: 'ArcAO Logo',
        src: 'img/logo_light_mode.png',
        srcDark: 'img/logo_transparent_cleaned.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Documentation',
        // },
        // {to: '/blog', label: 'Updates', position: 'left'},
        {
          href: 'https://github.com/ArcAOGaming',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/arc-ao',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/ArcAOGames',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/Arc_AO',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: 'https://arcao_game.ar.ionode.online',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ArcAOGaming',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ArcAO. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [require.resolve('docusaurus-lunr-search')],
};

export default config;
