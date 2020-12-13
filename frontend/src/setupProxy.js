const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api/**',
        createProxyMiddleware({
            target: "https://kitchen--inventory.herokuapp.com/",
            "secure": true,
            "changeOrigin": true,
            pathRewrite: { "^/api/": "" },
        })
    );
};