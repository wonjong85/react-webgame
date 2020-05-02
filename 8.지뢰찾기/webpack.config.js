const path = require('path'); // 경로를 가져오는 것
const webpack = require('webpack');

module.exports = {
  name: 'minesearch-dev',
  mode: 'development', // 실서비스: production
  devtool: 'eval', // 빠르게 하겠다, 실서비스: hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'], // webpack이 js나 jsx를 찾아서 app.js로 만들어줌
  },
  entry: {
    // 중요
    app: ['./client'],
  }, // 입력
  module: {
    rules: [
      // 여러개의 규칙을 정할 수 있기 때문에 배열
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          // babel 옵션
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 5% in KR', 'last 2 chrome versions'], // browserslist 검색!
                },
                debug: true, // 개발용
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            'react-hot-loader/babel',
          ],
        },
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    // 중요
    path: path.join(__dirname, 'dist'), // 실제 경로, 경로를 합쳐줌, C:\..\react-webgame\lecture\dist를 자동으로 만들어줌, __dirname은 현재폴더
    filename: 'app.js',
    publicPath: '/dist/', // 가상 경로
  }, // 출력
};
