const mongodb = require('mongodb');
const dbUrl = 'mongodb://zi:pw123456@ds157383.mlab.com:57383/expresscommoditymanagement';
const dbName = 'expresscommoditymanagement';
module.exports = (req, res) => {
  mongodb.MongoClient.connect(dbUrl,function(err, client) {
      if (err) throw err;
      let db = client.db('expresscommoditymanagement');
      let user = db.collection('user');

      user
        .find({ weeksAtOne: { $gte: 10 } })
        .sort({ decade: 1 })
        .toArray(function(err, docs) {
          if (err) throw err;

          docs.forEach(function(doc) {
           console.log("mongodb:",doc)
          });
          res.redirect('/');

          client.close(function(err) {
            if (err) throw err;
          });
        });
    },
  );
};
