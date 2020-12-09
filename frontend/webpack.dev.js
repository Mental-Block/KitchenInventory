const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    entry: "./src/index.js",
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve("./public"),
        proxy: {
            "/api/**": {
                target: "http://localhost:5000/",
                pathRewrite: { "^/api": "" },
                secure: false,
                changeOrigin: true,
            },
        },
    },
});
