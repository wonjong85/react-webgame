const path = require('path'); // 경로를 가져오는 것
const webpack = require('webpack');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval', // 빠르게 하겠다, hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'], // webpack이 js나 jsx를 찾아서
  },
  entry: { // 중요
    app: ['./client'],
  }, // 입력
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env', {
              targets: {
                browsers: ['> 5% in KR', 'last 2 chrome versions'], // browserslist
              },
              debug: true,
            }],
            '@babel/preset-react'],
          plugins: [],
        },
      }],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({debug: true}),
  ],
  output: { // 중요
    path: path.join(__dirname, 'dist'), // 경로를 합쳐줌, C:\..\react-webgame\lecture\dist를 자동으로 만들어줌
    filename: 'app.js',
  }, // 출력
};