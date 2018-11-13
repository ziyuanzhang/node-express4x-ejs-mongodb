let controllerLogin = require("../controller/controllerLogin");
let controller = require("../controller/controller");

module.exports=(app)=>{
    app.use(function(req,res,next){
        console.log("*",req.url); 
       // console.log("*",req.body); 
        if(req.url=='/login' ||req.url=='/loginAPI'){
            next();
        }else{
            if(req.session.userinfo){
                app.locals['userinfo']=req.session.userinfo;
              next();
            }else{
                res.redirect('/login');
            }
    
        }

     
    });
    app.get("/",controller.index);
    app.get("/login",controllerLogin.login);
    app.get("/signout",controllerLogin.signout);
    app.post("/loginAPI",controllerLogin.loginAPI);

    app.get("/addproduct",controller.addproduct);
    app.post("/addproductAPI",controller.addproductAPI);

  
}
