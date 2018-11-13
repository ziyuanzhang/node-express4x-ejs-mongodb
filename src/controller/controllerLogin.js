
const dbServe = require('../service/db')

module.exports = {
    login: (req, res) => {
        res.render('login', {}, function (err, data) {
            res.send(data);
        });
    },
    loginAPI:(req, res)=>{
        dbServe.find("user",req.body,function(data){
            if (data.length > 0) {
                console.log('mongoda-user:', data);
                req.session.userinfo = data[0];
                res.redirect('/');
              } else {
                res.send('<script>alert("登录失败");window.location.href="/login"</script>');
              }
        })
    },
    
    signout:(req, res)=>{
        req.session.destroy(function(err){
            if(err){
                 console.log("退出销毁session失败：",err)
            }else{
                res.redirect("/login");
            }
        })
    }
}