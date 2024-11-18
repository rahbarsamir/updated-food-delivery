const mongoose=require('mongoose')
const schema=mongoose.Schema({
    foodName:String,
    foodImg:String,
    foodDesc:String,
    price:Number,
    classname:String
})
module.exports=mongoose.model('cakebake',schema)