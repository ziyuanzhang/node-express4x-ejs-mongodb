let controllerLogin = require("../controller/controllerLogin");
let controller = require("../controller/controller");

module.exports=(app)=>{
    app.get("/login",controllerLogin.login);
    app.get("/",controller.index);

    app.post("/API/login",controllerLogin.loginAPI)

  
}
