const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",
    devServer: {
        contentBase: path.resolve("./dist"),
        proxy: {
            "/api/**": {
                target: "https://kitchen--inventory.herokuapp.com/",
                pathRewrite: { "^/api": "" },
                secure: true,
                changeOrigin: true,
            },
        },
    }
});
