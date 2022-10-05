const express = require("express")
const staffController = require("../../controllers/staff/staff.controller")
const router_staff_api = express.Router()
router_staff_api.post("/staff/add", staffController.addStaff)
router_staff_api.get("/staff/list", staffController.getStaff)
router_staff_api.put("/staff/update/:id", staffController.updateStaff)
router_staff_api.delete("/staff/delete/:id", staffController.deleteStaff)
module.exports = router_staff_api