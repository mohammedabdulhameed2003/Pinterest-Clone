const mongoose = require('mongoose')
const userSchema=new mongoose.Schema({
 user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
 },
 title:String,
 descreption:String,
 image:String

});
module.exports = mongoose.model("post",userSchema);