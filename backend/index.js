const http = require('http');
const express = require('express')
const cors = require('cors')
const session = require('express-session')
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
var app = express();

const corsOptions = {
    origin: ["http://localhost:3000"],
    methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
    credentials: true, // this is the key part, it allows cookies to be sent with requests
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use(cookieParser());
app.use(session({
  secret: 'mysession',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false,  maxAge: 7 * 24 * 60 * 60 * 1000 }
  
}))


app.get('/',(req,res)=>{
    res.send('hello world hela');
    console.log(req.sessionID);
    console.log(req.session);
    
})
app.post('/getdata',(req,res)=>{
    const user = req.body.user;
    const pass = req.body.pass;
    res.send(user);
    req.session.username = user ;
    req.session.password = pass;
    req.session.login = true;
    req.session.cookie.maxAge = 30000;
    
    console.log(req.sessionID);
    console.log(req.session);
    
})
app.get('/store',(req,res)=>{
    console.log(req.sessionID)
    console.log(req.session)
})


app.listen(5050,()=>{console.log('starting server ')})