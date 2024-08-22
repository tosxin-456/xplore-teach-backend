const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    tyep: String,
    required: true,
    unique: true,
  },
  DOB: {
    tyep: Date,
    required: true,
  },
  gender:{
    type:String, 
    enum:['Male', 'Female'],
    required:true
  },
  password:{
    type:String, 
    required: true
  },
  pic:{
    type:String
  }
});


const userModel = mongoose.model('users', userSchema)
module.exports = userModel