const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const app = express();


//enable cors for all users
app.use(cors());

// parse application/json , basically parse incoming request object as a json Object
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));


// to check weather application is running or not
app.get('/info',( req,res) =>{
    res.send("Application is up and Running");
})


const publicPath = path.join(__dirname,'../client/build');
app.use(express.static(publicPath));
app.use('*',express.static(publicPath));

//render the static files build by react
app.use('/' , express.static(path.join(__dirname,'../client/build')));

const PORT = process.env.PORT || 8000
app.listen(PORT);
console.log('Application running in ' + PORT);