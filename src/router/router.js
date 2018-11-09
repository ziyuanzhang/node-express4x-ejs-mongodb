let controllerLogin = require("../controller/controllerLogin")
module.exports=(app)=>{
    app.get("/login",controllerLogin.login);

    app.post("/API/login",controllerLogin.loginAPI)

  
}
