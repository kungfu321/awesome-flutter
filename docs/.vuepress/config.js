const { description } = require('../../package')

module.exports = {
  title: 'Awesome Flutter',
  description: description,
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'icon', href: `.github/logo.png` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#fff' }]
  ],
  base: '/',
  themeConfig: {
    activeHeaderLinks: true,
    repo: 'kungfu321/awesome-flutter',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: 'Last Updated',
    nav: [],
    sidebar: [
      {
        title: 'Articles',
        collapsable: false,
        children: [
          '/articles/introduction',
          '/articles/websites-blogs',
          '/articles/tutorial',
          '/articles/beginner',
          '/articles/advanced',
          '/articles/howtos',
          '/articles/videos',
          '/components/demonstrations',
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/demonstrations',
          '/components/ui',
          '/components/image',
          '/components/map',
          '/components/charts',
          '/components/navigation',
          '/components/auth',
          '/components/text-rich-content',
          '/components/analytics',
          '/components/internationalization',
          '/components/build-automation',
          '/components/styling',
          '/components/media',
          '/components/storage',
          '/components/monetization',
        ]
      },
      {
        title: 'Templates',
        collapsable: false,
        children: [
          '/templates/templates',
          '/templates/web',
          '/templates/machine-learning',
          '/templates/vision',
        ]
      },
      {
        title: 'Plugins',
        collapsable: false,
        children: [
          '/plugins/plugins',
          '/plugins/device',
          '/plugins/storage',
          '/plugins/services',
          '/plugins/log-tracing',
          '/plugins/crash-monitoring',
        ]
      },
      {
        title: 'Frameworks',
        collapsable: false,
        children: [
          '/frameworks/state-management',
          '/frameworks/widgets',
          '/frameworks/data',
          '/frameworks/animation',
          '/frameworks/misc',
          '/frameworks/testing',
          '/frameworks/others',
        ]
      },
      {
        title: 'Experimental',
        collapsable: false,
        children: [
          '/experimental/experimental',
        ]
      },
      {
        title: 'Gaming',
        collapsable: false,
        children: [
          '/gaming/game-engines',
          '/gaming/open-source-games',
        ]
      },
      {
        title: 'Open Source Apps',
        collapsable: false,
        children: [
          '/open-source-apps/premium',
          '/open-source-apps/top',
        ]
      },
      {
        title: 'Utilities',
        collapsable: false,
        children: [
          '/utilities/utilities',
          '/utilities/vscode',
          '/utilities/intellij-android-studio',
          '/utilities/desktop',
        ]
      },
      {
        title: 'Books',
        collapsable: false,
        children: [
          '/books/learning-flutter-beginners',
          '/books/cookbooks',
        ]
      },
      {
        title: 'Bonus',
        collapsable: false,
        children: [
          '/bonus/bonus',
          '/bonus/jobs-interview-questions',
          '/bonus/community',
        ]
      },
    ],
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}
