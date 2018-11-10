
const loginServe = require('../service/login')

module.exports = {
    login: (req, res) => {
        res.render('login', {}, function (err, data) {
            res.send(data);
        });
    },
    loginAPI:loginServe
}