module.exports = {
  publicPath: "/",
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "https://api.github.com",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
