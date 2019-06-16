const path = require('path');

const resolveApp = relativePath => path.join(process.cwd(), relativePath);

module.exports = {
  entry: resolveApp('src/app.js'),
  module: {
    rules: [
    ]
  },
  plugins: [
  ],
};
