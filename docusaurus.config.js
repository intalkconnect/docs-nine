// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs Ninechat',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://docs.ninechat.com.br',
  baseUrl: '/',

  organizationName: 'Nine Chat',
  projectName: 'ninedocs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: { customCss: './src/css/custom.css' },
      }),
    ],

    // Redocusaurus: OpenAPI na RAIZ (/)
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'api',
            spec: 'static/openapi.json', // garanta este arquivo no repo
            route: '/',                   // documentação em https://docs.ninechat.com.br/
          },
        ],
        // theme: { /* opções Redoc (opcional) */ },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Docs Ninechat',
        logo: { alt: 'Ninechat Logo', src: 'img/logo.svg' },
        items: [
          { to: '/', label: 'API', position: 'left' }, // raiz = Redoc
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
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
            title: 'Docs',
            items: [
              { label: 'Docs Intro', to: '/docs/intro' },
              { label: 'API (root)', to: '/' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
              { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
              { label: 'X', href: 'https://x.com/docusaurus' },
            ],
          },
          {
            title: 'More',
            items: [{ label: 'Blog', to: '/blog' }, { label: 'GitHub', href: 'https://github.com/facebook/docusaurus' }],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NineChat.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
