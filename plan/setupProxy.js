const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    // ['/api','/api2'], // 다중이용시 배열로 사용하거나 app.use 나눠 사용
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true,
      // router: {
      //   '/api2': 'http://localhost:3070'  // 배열로 사용하여 작성시 router 적어서 사용
      // }
    })
  );
};
