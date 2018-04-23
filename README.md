ASAB WebUI Kit
===

ASAB WebUI Kit is a library of React components, Redux artifacts and utilities available for use across [asab](https://github.com/TeskaLabs/asab) based projects.

## Build Library

### Prerequisities

Install dependencies with 

```
npm install
```

### Build
Following command builds the library to `./build/asab-webui-kit`

```
npm run build
```

After build is done you can reference `./build/asab-webui-kit` in `NODE_PATH` to use this library in your other React projects.

## Build Demo App

Demo app and any application that uses the `asab-webui-kit` is meant to be deployed with [Philbert](https://github.com/TeskaLabs/asab) distribution installed in the `public` folder. The folder structure should look like this:

```
public/
├── media/
│   ├── philbert/
│   │   ├── css/
│   │   ├── fonts/
│   │   ├── img/
│   │   └── js/
│   └── vendors/
│       ├── bower_components/
│       ├── chart.js/
│       ├── jquery.sparkline/
│       ├── vectormap/
│       ├── css/
│       └── jquery-ui.min.js
└── index.html
```

### Build demo app

Following command builds the demo app

```
npm run demo
```

## Develop

To make use of the live reload while developing the library and/or demo app just run

```
npm start
```

This will start the Node development server and you will see changes instantly in the browser.

### Adding Requirements

Webpack, the module bundler, is configured to not include packages from `node_modules` in the build bundle. When installing dependencies use `npm install` with the `--save` flag so that library can be used in React projects.
