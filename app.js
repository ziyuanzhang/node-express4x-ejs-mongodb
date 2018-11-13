let express = require('express');
let app = express();
let ejs = require('ejs');
let path = require('path');
let bodyParser = require('body-parser');
let session = require('express-session');
let router = require('./src/router/router')



app.use('/public',express.static('src/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge:1000*60*10 },
    rolling:true
  }))

app.set('view engine','ejs');
app.set("views", path.join(__dirname, "src/views"));

router(app);


app.listen(3000,function(){
    console.log('例子app : http://localhost:3000/')
})