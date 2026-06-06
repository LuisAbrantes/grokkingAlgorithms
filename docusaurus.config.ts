import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Grokking Algorithms — Guia de Estudos',
  tagline: 'Resumo de estudos em português do livro de Aditya Bhargava',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://grokking-algoritmos.vercel.app',
  baseUrl: '/',

  organizationName: 'LuisAbrantes',
  projectName: 'grokkingAlgorithms',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  markdown: {
    mermaid: true,
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['pt', 'en'],
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/LuisAbrantes/grokkingAlgorithms/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Grokking Algorithms',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'estudosSidebar',
          position: 'left',
          label: 'Conteúdo',
        },
        {
          href: 'https://github.com/LuisAbrantes/grokkingAlgorithms',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Estudos',
          items: [
            {label: 'Início', to: '/'},
            {label: 'Guia de estudos', to: '/guia-de-estudos'},
            {label: 'FAQ / Tirar dúvidas', to: '/faq-duvidas'},
          ],
        },
        {
          title: 'Referência',
          items: [
            {label: 'Big-O (cheatsheet)', to: '/referencia/big-o-cheatsheet'},
            {label: 'Glossário PT/EN', to: '/referencia/glossario'},
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/LuisAbrantes/grokkingAlgorithms',
            },
          ],
        },
      ],
      copyright: `Material de estudos sobre "Grokking Algorithms" de Aditya Bhargava.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
