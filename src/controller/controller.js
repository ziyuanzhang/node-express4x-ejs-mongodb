let dbServe = require("../service/db")
module.exports={
   index:(req,res)=>{
    dbServe.find("products",{},function(productData){
        res.render('index',{list:productData},(err,data)=>{
            console.log("list:",productData.length)
            res.send(data);
        })
    })


   } 
}