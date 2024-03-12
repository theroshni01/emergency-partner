const mongoose = require("mongoose") ;

const HelperSchema = new mongoose.Schema({
 
    username:{type:String,required:true},
    specialization:{type:String,required:true},
    phone_no:{type:String,required:true},
    twilio_no:{type:String,required:true},
    address:{type:String,required:true},
    gender:{type:String,required:true},
    qualification:{type:String,required:true},
    experience:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    password:{type:String,required:true},
    certificate:{type:String}
  });

  module.exports = mongoose.model("helpers", HelperSchema);
