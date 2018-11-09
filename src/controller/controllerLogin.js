let MongoClient = require('mongodb').MongoClient;
let dbUrl = 'mongodb://ziyuan:pw1express@ds157383.mlab.com:57383/expresscommoditymanagement';

module.exports = {
    login: (req, res) => {
        res.render('login', {}, function (err, data) {
            res.send(data);
        });
    },
    loginAPI:(req, res)=>{
         //console.log("loginAPI:",req.body);
         MongoClient.connect(dbUrl, function(err, db) {
            if(err){
                console.log("mongodb:",err);
                return;
            }
           let result =  db.collection("user").find();
            console.log("loginAPI:",result);
            console.log("loginAPI:",req.body);
            db.close();        
          });
    
    }
}