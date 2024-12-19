//# for importing env variables  / 
const dotenv = require('dotenv')
dotenv.config()
const express = require("express");
const app = express();


// for defining the endpoint at which the server should listen
const cors=require('cors')
app.use(cors())

//# step 1 create  a basis route file 
app.get('/',(req,res)=>{
    res.send('Hello World')
})


module.exports=app