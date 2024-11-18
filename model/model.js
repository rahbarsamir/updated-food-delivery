const mongoose=require('mongoose')
const schema=mongoose.Schema({
    name:String,
    rest:[{
        restName:String,
        restImg:String,
        restUrl:String,
        restDesc:String
    }]
})
module.exports=mongoose.model('details',schema)
