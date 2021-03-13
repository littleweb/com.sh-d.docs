module.exports = async ({app}) => {
  app.get("/test", async ctx => {
    return 'okv';
  });
}