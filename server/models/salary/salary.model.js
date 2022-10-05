const mongoose = require("mongoose")
let SalarySchema = new mongoose.Schema({
  start_working_date:{
   type:String
  },
  salary:{
   type:Number
  }
},{
 collection:"salary"
})
module.exports = mongoose.model("SalarySchema", SalarySchema)