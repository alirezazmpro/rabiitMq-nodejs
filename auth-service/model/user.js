
const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    
},{timestamps:true});


module.exports={
    UserModel:mongoose.model('user',userSchema)
}