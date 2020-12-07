const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        contentBase: path.resolve("./public"),
        proxy: {
            "/api/**": {
                target: "http://localhost:5000/",
                pathRewrite: { "^/api": "" },
                secure: false,
                changeOrigin: true,
            },
        },
    }
});
