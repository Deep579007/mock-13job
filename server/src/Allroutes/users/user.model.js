const {Schema,model} = require('mongoose')

const UserSchema = new Schema({
username : { type:String, required:true },
email:{type:String, unique:true},
password:{ type:String, required:true },
role: { 
    type: String ,
    enum:["Admin","User"]

  },
},{versionKey:false})

const UserModel = model("user",UserSchema)
module.exports=UserModel;