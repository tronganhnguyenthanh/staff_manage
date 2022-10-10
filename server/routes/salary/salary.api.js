const express = require("express")
const salaryController = require("../../controllers/salary/salary.controller")
const router_salary_api = express.Router()
router_salary_api.post("/salary/add", salaryController.addSalary)
router_salary_api.get("/salary/list", salaryController.getSalary)
router_salary_api.get("/salary/view/:id", salaryController.getSalaryById)
router_salary_api.put("/salary/update/:id", salaryController.updateSalary)
router_salary_api.delete("/salary/delete/:id", salaryController.deleteSalary)
module.exports = router_salary_api