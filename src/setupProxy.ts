const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

module.exports = function(app: any) {
  app.use(
    createProxyMiddleware('/api', {
      target: process.env.REACT_APP_API_BASE_URL,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
