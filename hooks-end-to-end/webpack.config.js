const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", //NOTE:실서비스는 production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  //NOTE:중요-입력
  //최상위 부모 파일만 가져오면, 자식 경로의 파일은 따로 적어두지 않아도 된다.
  entry: {
    app: ["./client"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  //NOTE:중요-출력
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
