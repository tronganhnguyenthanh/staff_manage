import React from "react"
import {Route, Routes} from "react-router-dom"
import SalaryFormAdd from "../components/salaryForm/SalaryFormAdd"
import StaffForm from "../components/staffForm/StaffForm"
import StaffFormAdd from "../components/staffForm/StaffFormAdd"
import "../css/style.css"
import "react-toastify/dist/ReactToastify.css"
import StaffList from "../components/staffList/StaffList"
const App = () => {
 return (
  <div className="App">
    <Routes>
      <Route path="/" element={<StaffForm/>}/>
      <Route path="/staff/add"  element={<StaffFormAdd/>}/>
      <Route path="/staff/list" element={<StaffList/>}/>
      <Route path="/salary/add" element={<SalaryFormAdd/>}/>
    </Routes>
  </div>
 )
}

export default App;
