const mongodb = require('mongodb');
const dbUrl =
    'mongodb://zi:pw123456@ds157383.mlab.com:57383/expresscommoditymanagement';
const dbName = 'expresscommoditymanagement';
const session = require('express-session');
module.exports = {
    add:{},
    delete:{},
    modify:{},
    find: ( collectionName,json, callback) => {
        mongodb.MongoClient.connect(
            dbUrl,
            function (err, client) {
                if (err) throw err;
                let db = client.db('expresscommoditymanagement');
                let user = db.collection(collectionName);
                user.find(json).toArray(function (err, data) {
                    if (err) throw err;
                    callback(data);
                    client.close(function (err) {
                        if (err) throw err;
                    });
                });
            },
        );
    }
} 