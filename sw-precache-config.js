module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/css/*',
    'dist/assets/fonts/*',
    'dist/assets/icons/*',
    'dist/assets/js/*',
    'dist/assets/sass/*',
    'dist/assets/videos/*',
    'dist/*.webapp',
    'https://magie.herokuapp.com/api/eventisoon',
    'https://magie.herokuapp.com/api/eventipast',
    'https://magie.herokuapp.com/api/eventi',
    'https://fonts.gstatic.com/s/roboto/v16/zN7GBFwfMP4uA6AR0HCoLQ.ttf'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /magie\.herokuapp\.com/,
    handler: 'offlineFirst'
  }]
};
