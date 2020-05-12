var path = require('path');
module.exports = {
  entry: {
    index: './src/index.js',
    FontAwesome: './src/FontAwesome.js',
    Ionicons: './src/Ionicons.js',
    'lib/create-icon-set-from-fontawesome5': './src/lib/create-icon-set-from-fontawesome5.js',
    'lib/create-icon-set': './src/lib/create-icon-set.js',
    'lib/create-multi-style-icon-set': './src/lib/create-multi-style-icon-set.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2' // ----------------------
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react' // ----------------------
  }
};