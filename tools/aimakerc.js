module.exports = {
  port: '',
  dllPlugin: {
    path: 'node_modules/aimake-react-boilerplate-dlls',
    exclude: [
      'sanitize.css'
    ],
    include: [
      //
    ],
    /**
     * there you can configure dependencies to dll
     * example
     * dlls: {
     *  vendor: ['react', 'react-dom']
     *  common: ['..'] 
     * }
     */
    dlls: null
  },
  webpack: {
    prod: require('./config/webpack/prod'),
    dev: require('./config/webpack/dev')
  },
  server: require('./config/server'),
};
