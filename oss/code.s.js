const crypto = require('crypto');
const PATH = require('path');
const md5 = crypto.createHash('md5');
const moment = require("moment");
const mime = require("mime");
const ALY = require('aliyun-sdk');
const axios = require('axios');
const oss = (md5, filename, oss) => {
  const ossStream = require('aliyun-oss-upload-stream')(new ALY.OSS(oss.key));
  let ext = PATH.extname(filename);
  let name = md5 + ext;
  let date = moment().format('YYYY-MM-DD');
  let upload = ossStream.upload({
    Bucket: oss.bucket,
    Key: `onefile/${date}/${name}`,
    ContentType: mime.getType(name)
  });
  upload.minPartSize(1024*1024*2);
  return {name,upload};
};
module.exports = async ({app}) => {
  let {doc} = await app.odoc.doc('DOCID');
  console.log(doc);
  app.get('/test', ctx => {
    return doc;
  });
  app.server.route({
    method: 'post',
    path: '/DOCID/upload',
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      },
      payload:{
        maxBytes: doc.maxBytes || (1024*1024*10),
        output:'stream',
        parse: true,
        multipart: true,
        allow: 'multipart/form-data'
      },
      handler: async function(req,h){
        let post = req.payload;
        let md5 = `F${Date.now()}${String(Math.floor(Math.random()*1000000)).substr(0,6)}`;
        let upload = oss(md5, post[doc.field].hapi.filename,{
            "key": {
              "accessKeyId": doc.accessKeyId,
              "secretAccessKey": doc.secretAccessKey,
              "endpoint": doc.endpoint || "http://oss-cn-beijing.aliyuncs.com",
              "apiVersion": doc.apiVersion || "2013-10-15"
            },
            "bucket": doc.bucket
        });
        let wresult = await post[doc.field].pipe(upload.upload);
        let date = moment().format('YYYY-MM-DD');
        return {
          "code": 0,
          "msg": "",
          "data": {
            "url": `${doc.cdn}/onefile/${date}/${upload.name}`,
            "name": post[doc.field].hapi.filename
          }
        };
      }
    }
  });
};