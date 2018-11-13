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
    
}