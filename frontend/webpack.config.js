const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve("./public"),
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
    ],
  },
  output: { filename: "bundle.js" },
};
