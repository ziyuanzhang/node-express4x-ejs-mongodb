//https://www.npmjs.com/package/multiparty 上传图片
var multiparty = require('multiparty');
let customizeUtil = require('./customizeUtil')
const targetFile = './src/public/upload';

module.exports = (req,callback)=>{
    var form = new multiparty.Form();
    form.uploadDir = customizeUtil.createFolder(targetFile);
    form.keepExtensions = true;
    form.encoding = 'utf-8';
    form.maxFieldsSize = 1 * 1024 * 1024;
    form.maxFileSize = 1 * 1024 * 1024
    form.parse(req,function(err,fields,files){
        if(err){
           throw new Error(err);
        }       
        callback(fields,files);
    });
}
