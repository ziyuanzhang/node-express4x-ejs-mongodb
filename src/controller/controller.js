let dbServe = require("../service/db");
let UploadData = require('../middleware/formUpload');
const uuidv5 = require('uuid/v5');

module.exports={
   index:(req,res)=>{
    dbServe.find("products",{},function(productData){
        res.render('index',{list:productData},(err,data)=>{
            console.log("list:",productData.length)
            res.send(data);
        })
    })
   },
   addproduct:(req,res)=>{
    res.render('addproduct', {}, function (err, data) {
        res.send(data);
    });
   },
   addproductAPI:(req,res)=>{
    UploadData(req,function(fields,files){
        console.log("files:",files)
        let uuid = uuidv5('http://ziyuanzhang.com/', uuidv5.URL);
        let setData = {
            id:uuid,
            name:fields.name,
            pic:files.img[0].path,
            price:fields.price,
            fee:fields.fee,
            description:fields.description
        }
        dbServe.add("products",setData,function(data){
            res.redirect('/');
        })
    })
   }
}