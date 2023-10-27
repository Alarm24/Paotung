const http = require('http');
const express = require('express')
const cors = require('cors')
const session = require('express-session');
const {createClient} = require('redis');
const RedisStore = require("connect-redis").default
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {db} = require('./db.js')
//Configure redis client


const redisClient = createClient({
    url: 'redis://redis:6379'


})

var app = express();

const corsOptions = {
    origin: ["http://localhost:3000"],
    methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
    credentials: true, // this is the key part, it allows cookies to be sent with requests
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
app.use(cors(corsOptions));
const oneDay = 1000 * 60 * 60 * 24;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// enable this if you run behind a proxy (e.g. nginx)
app.set('trust proxy', 1);



redisClient.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' + err);
});
redisClient.on('connect', function (err) {
    console.log('Connected to redis successfully');
});

let redstore = new RedisStore({ client: redisClient })
//Configure session middleware
app.use(session({
    secret: 'secret$%^134',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // if true only transmit cookie over https
        httpOnly: false, // if true prevent client side JS from reading the cookie 
        maxAge: 60000 // session max age in miliseconds
    }
}))

app.get('/',(req,res)=>{
    if(req.session.login == true){
        res.send({'status':true})
    }else{
        res.send({'status':false})
    }

    
});

app.post('/login',(req,res)=>{

    console.log(req.body.user)
    req.session.user = req.body.user 
    req.session.pass = req.body.pass
    req.session.login = true;
    res.send(200) 

})



app.listen(5050,()=>{console.log('starting server ')})

