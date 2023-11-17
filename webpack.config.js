const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    // index: {
    //   import: "./src/index.js",
    //   dependOn: "shared", // 防止lodash模块重复打包
    // },
    // another: {
    //   import: "./src/another-module.js",
    //   dependOn: "shared", // 防止lodash模块重复打包
    // },
    // shared: "lodash",
    index: "./src/index.js",
    another: "./src/another.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "管理输出",
    }),
  ],
  devServer: {
    hot: true,
    static: "./dist", // 告诉webpack-dev-server从哪个文件开始查找
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  devtool: "inline-source-map",
  optimization: {
    runtimeChunk: "single",

    moduleIds: "deterministic", //无论是否添加新依赖，两次构建的vendor哈希值都应该一样
    splitChunks: {
      cacheGroups: {
        // 将第三方库提取到单独的 vendor chunk 中。这一步将减少客户端对服务器的请求，同时保证自身代码与服务器一致
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
