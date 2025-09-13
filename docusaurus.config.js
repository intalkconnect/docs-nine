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

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          docItemComponent: '@theme/ApiItem',
          routeBasePath: '/',              // 🔧 monta a seção "Docs" na RAIZ
          // editUrl: null,                // (opcional) remova se não usa "edit this page"
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: { customCss: './src/css/custom.css' },
        pages: false,                      // ok manter desativado para não conflitar com a raiz
      }),
    ],
  ],

  // Geração de páginas a partir do OpenAPI (MDX em docs/api/*)
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          ninechat: {
            specPath: 'static/openapi.json', // mantém seu arquivo aqui
            outputDir: 'docs/api',           // páginas serão geradas em /api/*
            sidebarOptions: { groupPathsBy: 'tag' },
          },
        },
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Docs Ninechat',
        logo: { alt: 'Ninechat Logo', src: 'img/logo.svg' },
        items: [
          // 🔧 use o sidebar GERADO para a API; o id padrão que vamos expor
          // no sidebars.js será "apiSidebar"
          { type: 'docSidebar', sidebarId: 'apiSidebar', position: 'left', label: 'API' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { href: 'https://ninechat.com.br', label: 'Website', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              { label: 'API Reference', to: '/api' }, // 🔧 era /docs/api
              // { label: 'Guias', to: '/docs/intro' }, // 🔧 remova se não existe "intro"
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
      prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    }),
};

export default config;
