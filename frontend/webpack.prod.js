const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",
    entry: "./dist/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve("./dist"),
        proxy: {
            "/api/**": {
                target: "https://kitchen--inventory.herokuapp.com/",
                pathRewrite: { "^/api": "" },
                secure: false,
                changeOrigin: true,
            },
        },
    },
});
