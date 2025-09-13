// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs Ninechat',
  tagline: 'API Documentation for Nine Chat',
  favicon: 'img/favicon.ico',
  future: { v4: true },
  url: 'https://docs.ninechat.com.br',
  baseUrl: '/',
  organizationName: 'Nine Chat',
  projectName: 'ninedocs',
  onBrokenLinks: 'warn',
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
          docItemComponent: '@theme/ApiItem', // Usar componente API
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: { customCss: './src/css/custom.css' },
        pages: false, // Remove página inicial padrão
      }),
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api', // plugin id
        docsPluginId: 'classic', // configured for preset-classic
        config: {
          ninechat: {
            specPath: 'static/openapi.json',
            outputDir: 'docs/api',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
      },
    ],
  ],
  themes: ['docusaurus-theme-openapi-docs'], // Tema específico para OpenAPI
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Docs Ninechat',
        logo: { alt: 'Ninechat Logo', src: 'img/logo.svg' },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'API',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://ninechat.com.br',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              { label: 'API Reference', to: '/docs/api' },
              { label: 'Guias', to: '/docs/intro' },
            ],
          },
          {
            title: 'Recursos',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'Changelog', to: '/blog/tags/changelog' },
            ],
          },
          {
            title: 'Suporte',
            items: [
              { label: 'Contato', href: 'https://ninechat.com.br/contato' },
              { label: 'Website', href: 'https://ninechat.com.br' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NineChat. Todos os direitos reservados.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
