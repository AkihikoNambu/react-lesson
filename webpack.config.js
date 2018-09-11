const publicDir = __dirname + "/public"

module.exports = {
  entry: './src/index.js',
  output: {
    path: publicDir,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
}
