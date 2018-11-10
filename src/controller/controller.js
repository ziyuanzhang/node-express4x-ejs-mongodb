module.exports={
   index:(req,res)=>{
    res.render('index',{},(err,data)=>{
        res.send(data);
    })
   } 
}