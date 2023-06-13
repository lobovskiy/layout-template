module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    watchFiles: ['src/*.html'],
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
};
