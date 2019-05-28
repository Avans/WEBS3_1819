module.exports = {
  entry: "./src/app.js",
  module: {
    rules: [
      //HTML
      {
        test: /\.html$/,
        use: "html-loader"
      }
      // {
      //     test: /\.m?js$/,
      //     exclude: /(node_modules|bower_components)/,
      //     use: {
      //         loader: 'babel-loader',
      //         options: {
      //         presets: ['@babel/preset-env']
      //         }
      //     }
      // }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
