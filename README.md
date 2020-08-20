<!-- markdownlint-disable MD033 MD041 MD002 -->
<h1 align="center">

<br>

<img src="https://user-images.githubusercontent.com/1295961/45949308-cbb2f680-bffb-11e8-8054-28c35ed6d132.png" alt="Awesome Flutter" width="640">

<br>
<br>

Awesome Flutter

</h1>

<h3 align="center">An awesome list that curates the best Flutter libraries, tools, tutorials, articles and more.</h3>

<p align="center">
  <a href="https://github.com/kungfu321/awesome-flutter/actions?query=workflow%3A%22GitHub%20Pages%22">
    <img src="https://github.com/rmjordas/awesome-vue/workflows/GitHub%20Pages/badge.svg?branch=master&event=push" alt="Deploy to GitHub Pages build status badge">
  </a>

  <a href="https://awesome-flutter.kien.pro">
    <img src="https://img.shields.io/badge/website-https://awesome--flutter.kien.pro-blue.svg" alt="Awesome Flutter website">
  </a>
</p>

<hr />
<!-- markdownlint-enable MD033 -->

This project does not aim to replace the **[Awesome Flutter][Solido/awesome-flutter]** but rather to provide a nicer experience when browsing the content.

[Solido/awesome-flutter]: https://github.com/Solido/awesome-flutter

## Instructions

To run this application on your machine, first clone the repository and install the required dependencies:

```bash
git clone https://github.com/kungfu321/awesome-flutter.git
cd awesome-flutter
npm run
```

Run the `dev` script to compile the content and spawn a local server to serve the compiled code. While this script is running, any changes made to the markdown files will automatically be updated on the locally served pages.

```bash
npm run dev
```

To prepare the application for deployment, first run `npm run build` to compile the application in production mode. This will generate a directory in `docs/.vuepress` called **`dist`**.

## Scripts

| Script  | Description                                             |
|---------|---------------------------------------------------------|
| `dev`   | Compiles content and serves bundled code                |
| `build` | Compiles content and other static assets for deployment |

## Contributing

Please refer to the [Contributing Guide](CONTRIBUTING.md).

## License

This is free and unencumbered software released into the public domain.

For more information, please refer to <https://unlicense.org>
