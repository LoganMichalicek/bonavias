const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  }
};
