const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve("./dist"),
        proxy: {
            "/api/**": {
                target: "http://localhost:5000/",
                pathRewrite: { "^/api": "/api/" },
                secure: false,
                changeOrigin: true,
            },
        },
    },
});
