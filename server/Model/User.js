const mongoose = require("mongoose") ;

const UserSchema = new mongoose.Schema({
 
    username:{type:String,required:true},
    age:{type:Number,requires:true},
    phone_no:{type:String,required:true},
    twilio_no:{type:String,required:true},
    twilio_sid:{type:String,required:true},
    twilio_auth_token:{type:String,required:true},
    address:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
  })

module.exports = mongoose.model("users", UserSchema);
