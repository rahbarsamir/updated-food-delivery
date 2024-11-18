const express=require('express')
const mongoose=require('mongoose')
const hbs=require('hbs')
const route=require('./routes/route')
const model=require('./model/model')
const sfood=require('./model/foods')
const app=express();
const popup = require('node-popup');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')



app.use('',express.static('public'))
app.set('view engine','hbs')
app.set('views','views')
 




mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://rahbarsamir:sam2025@cluster0.topaoux.mongodb.net/hungryhub',()=>{
   console.log('connected to database')
})


app.use('',route)
app.listen(1111,()=>{
   console.log('server start')
});

