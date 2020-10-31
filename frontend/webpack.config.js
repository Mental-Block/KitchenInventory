const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  resolve: {
    alias: {
      root: path.resolve(__dirname, "./src"),
    },
  },
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
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader",
      },
    ],
  },
  output: { filename: "bundle.js" },
};
