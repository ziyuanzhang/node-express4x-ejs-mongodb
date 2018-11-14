let dbServe = require("../service/db");
let UploadData = require('../middleware/formUpload');
const uuidv5 = require('uuid/v5');
const customizeUtil = require('../middleware/customizeUtil')

module.exports = {
    index: (req, res) => {
        dbServe.find("products", {}, function (productData) {
            res.render('index', { list: productData }, (err, data) => {
                console.log("list:", productData)
                res.send(data);
            })
        })
    },
    addproduct: (req, res) => {
        res.render('addproduct', {}, function (err, data) {
            res.send(data);
        });
    },
    addproductAPI: (req, res) => {
        UploadData(req, function (fields, files) {
            console.log("files:", files)
            let uuid = uuidv5('http://ziyuanzhang.com/', uuidv5.URL);
            let setData = {
                id: uuid,
                name: fields.name,
                pic: files.img[0].path,
                price: fields.price,
                fee: fields.fee,
                description: fields.description
            }
            dbServe.add("products", setData, function (data) {
                res.redirect('/');
            })
        })
    },
    deleteproductApi: (req, res) => {
        dbServe.delete("products", { "id": req.body.id }, function (data) {
            // console.log("deleteproductApi:",data)
            customizeUtil.deleteFile("./src"+req.body.imgsrc)
            res.send(req.body);
        })
    },
    modifyproduct: (req, res) => {
        //console.log("modifyproduct:",req.query);
        dbServe.find("products", req.query, function (productData) {
            res.render('modifyproduct', { productdetails: productData[0] }, (err, data) => {
                console.log("productdetails:", productData[0])
                res.send(data);
            })
        })
    },
    modifyproductApi: (req, res) => {

        UploadData(req, function (fields, files) {
            console.log("fields:", fields)
            console.log("files:", files)
            let id = fields.id[0];
            let setData;
            if (files.img[0].originalFilename) {
                setData = {
                    id:id,
                    name: fields.name[0],
                    price: fields.price[0],
                    fee: fields.fee[0],
                    description: fields.description[0],
                    pic: files.img[0].path
                }
            } else {                
                setData = {
                    id:id,
                    name: fields.name[0],
                    price: fields.price[0],
                    fee: fields.fee[0],
                    description: fields.description[0]
                }
                customizeUtil.deleteFile(files.img[0].path)
            }
            dbServe.modify("products", { "id": id },{$set: setData}, function (productData) {
               
                res.redirect('/');
            })
        })
    },
    searchproductAPI:(req,res)=>{
        console.log("searchproductAPI:",req.body)
        dbServe.find("products", req.body, function (productData) {
            res.send(productData);
        })
    }
}