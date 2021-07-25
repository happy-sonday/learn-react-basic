const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "calc-date-setting",
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
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome version"],
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["react-refresh/babel"],
        },
      },
    ],
  },

  plugins: [new RefreshWebpackPlugin()],

  //NOTE:중요-출력
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  },

  //NOTE:소스코드의 변경점을 메모리에 저장해두었다가 변경점만 찾아서 제공 Hot Reloading
  devServer: {
    publicPath: "/dist/",
    hot: true,
  },
};
