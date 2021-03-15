module.exports = async ({app}) => {
  app.get("/add", async ctx => {
    let {doc} = await app.odoc.doc(ctx);
    return doc;
  });
}