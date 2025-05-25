const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/kick',
    createProxyMiddleware({
      target: 'https://kick.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api/kick': '/api/v2/channels',
      },
    })
  );
};
