const path = require('path');
const OfflinePlugin = require('offline-plugin');

const resolveApp = relativePath => path.join(process.cwd(), relativePath);

module.exports = {
  entry: resolveApp('src/app.js'),
  module: {
    rules: [
    ],
  },
  plugins: [
    new OfflinePlugin({
      ServiceWorker: {
        minify: false,
      },
      relativePaths: false,
      publicPath: '/',
      excludes: ['.htaccess'],

      caches: {
        main: [':rest:'],
        additional: ['*.chunk.js'],
      },
      safeToUseOptionalCaches: true,
      AppCache: false,
    }),
  ],
};
