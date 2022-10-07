const staffModel = require("../../models/staff/staff.model")
const addStaff = async (req, res) => {
  try {
    let add_staff = new staffModel(req.body)
    let save_staff = await add_staff.save()
    res.json(save_staff)
  }catch (error) {
    res.status(400).json({message:error}) 
 }
}
const getStaff = async (req, res) => {
  try {
    let show_data = await staffModel.find()
    res.json(show_data) 
  }catch (error) {
    res.status(400).json({message:error})
  }
}
const editStaff = async (req, res) => {
  try {
    let _id = req.params.id
    let editStaffById = await staffModel.findById(_id)
    res.json(editStaffById)
  }catch(error){
    res.status(400).json({message:error})
  }
}
const updateStaff = async (req, res) => {
  try {
    let _id = req.params.id
    let updated_data = req.body
    let options = {new:true}
    let updated_staff = await staffModel.findByIdAndUpdate(_id, updated_data, options)
    res.json(updated_staff)
  }catch (error) {
    res.status(400).json({message:error})
  }
}
const deleteStaff = async (req, res) => {
  try {
    let _id = req.params.id
    let deleted_staff = await staffModel.findByIdAndDelete(_id)
    res.json(deleted_staff) 
  }catch (error) {
    res.status(400).json({message:error})
  }
}
module.exports = {
  addStaff, 
  getStaff,
  editStaff, 
  updateStaff, 
  deleteStaff
}