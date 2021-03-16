module.exports = async ({app}) => {
  let {doc} = await app.odoc.doc('DOCID');
  app.get('/test', ctx => {
    return doc;
  });
};