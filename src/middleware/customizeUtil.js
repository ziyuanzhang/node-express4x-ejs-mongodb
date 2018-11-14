var fs = require('fs');
exports.createFolder = function (folder) {
    try {
        fs.accessSync(folder);      
    } catch (e) {
        fs.mkdirSync(folder);
    }
    finally {
        return folder
    }
    
},
exports.deleteFile= function(fileName){
    try {
        fs.unlink(fileName)
    } catch (e) {
       console.log("删除图片失败！")
    }
 
}