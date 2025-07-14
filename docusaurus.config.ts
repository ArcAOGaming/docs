import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
import { AO, ARCAO, RANDAO, RUNEREALM } from '@arcaogaming/project-links';

const config: Config = {
  title: 'ArcAO',
  tagline: 'AAA Game Development DAO',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: ARCAO.docs,
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
        blog: {
          path: 'news',
          routeBasePath: 'news',
          showReadingTime: true,
          blogTitle: 'News',
          blogDescription: 'ArcAO News and Updates',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // editUrl:
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
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
      title: 'ArcAO',
      logo: {
        alt: 'ArcAO Logo',
        src: 'img/logo_light_mode.png',
        srcDark: 'img/logo_transparent_cleaned.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Info',
        },
        { to: '/news', label: 'Latest News', position: 'left' },
        { to: '/media-kit', label: 'Media Kit', position: 'left' },
        {
          href: ARCAO.github,
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
              href: ARCAO.discord,
            },
            {
              label: 'Telegram',
              href: ARCAO.telegram,
            },
            {
              label: 'Twitter',
              href: ARCAO.twitter,
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: ARCAO.website,
            },
            {
              label: 'GitHub',
              href: ARCAO.github,
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
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-DF9DJHF3Y6',
        anonymizeIP: true, // Non-Optional: anonymize IP addresses
      },
    ],
  ],
};

export default config;
