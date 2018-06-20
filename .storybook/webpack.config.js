const path = require("path");

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, '.')
    },
    {
      test: /\.css$/,
      loader: 'style-loader'
    },
    {
      test: /\.css$/,
      loader: 'css-loader',
      query: {
        modules: true,
        localIdentName: '[name]__[local]___[hash:base64:5]'
      }
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
            } 
        }]
    }
    ]
  }
};