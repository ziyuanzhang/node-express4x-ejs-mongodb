let MongoClient = require('mongodb').MongoClient;
let dbUrl = 'mongodb://localhost:27017/myproject';
module.exports =(req, callback)=>{
    MongoClient.connect(dbUrl, function(err, db) {
        if(err){
            console.log("mongodb:",err);
            return;
        }       
        callback();
        db.close();        
      });

   
}