const salaryModel = require("../../models/salary/salary.model")
const addSalary = async (req, res) => {
  try{
    let add_salary = new salaryModel(req.body)
    let save_salary = await add_salary.save()
    res.json(save_salary)
  }catch (error) {
    res.status(400).json({message:error})
  }
}
const getSalary = async (req, res) => {
  try{
    let show_salary = await salaryModel.find()
    res.json(show_salary)
  }catch(error){
    res.status(400).json({message:error})
  }
}
const updateSalary = async (req, res) => {
  try {
    let _id = req.params.id
    let updated_data = req.body
    let updated_status = {new:true}
    let updated_salary = await salaryModel.findByIdAndUpdate(_id, updated_data, updated_status)
    res.json(updated_salary)
  }catch (error) {
    res.status(400).json({message:error})
  }
}
const deleteSalary = async (req, res) => {
  try {
    let _id = req.params.id
    let deleted_salary = await salaryModel.findByIdAndDelete(_id)
    res.json(deleted_salary) 
  }catch (error) {
    res.status(400).json({message:error})
  }
}
module.exports = {
  addSalary,
  getSalary,
  updateSalary,
  deleteSalary
}