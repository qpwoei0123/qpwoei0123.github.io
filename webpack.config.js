const path = require("path");

module.exports = {
  mode: "production", // 또는 'development'

  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.css$/, // .css 파일에 대한 규칙을 설정합니다.
        use: ["style-loader", "css-loader"], // CSS 파일을 처리할 로더를 지정합니다.
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
