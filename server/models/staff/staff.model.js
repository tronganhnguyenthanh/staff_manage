const mongoose = require("mongoose")
const StaffSchema = new mongoose.Schema({
  firstName:{
   type:String
  },
  lastName:{
   type:String
  },
  email:{
   type:String,
  },
  phoneNumber:{
   type:String
  },
  address:{
   type:String
  }
},{
 collection:"staffs"
})
module.exports = mongoose.model("StaffSchema", StaffSchema)