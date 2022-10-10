import React, {useState} from "react"
import {Button, Label, TextInput} from "flowbite-react"
import {ToastContainer, toast} from "react-toastify"
import {useDispatch} from "react-redux"
import {addSalary} from "../../features/SalarySlice"
import ListSalary from "../salaryList/ListSalary"
import SalarySearch from "./SalarySearch"
const SalaryFormAdd = () => {
  const init_salary = {
    start_working_date:"",
    salary:""
  }
  const [salary, setSalary] = useState(init_salary)
  const dispatch = useDispatch()
  const handleOnChange = (e) => {
   setSalary({...salary, [e.target.name]:e.target.value})
  }
  const handleAddSalary = () => {
   if(salary?.start_working_date === ""){
    toast.error("Please choose your start date", {position:"top-center"})
    return false
   }
   if(salary?.salary === ""){
    toast.error("Please enter your salary", {position:"top-center"})
    return false
   }else{
     dispatch(addSalary(salary))
     toast.success("Salary added successfully", {position:"top-center"})
     window.location.reload(false)
     return true
   }
  }
  return (
   <div>
     <ToastContainer/>
     <form className="flex flex-col gap-4 p-2">
       <h1 className="text-3xl first-letter:capitalize text-center text-blue-600">salary form</h1>
       <div className="container mx-auto grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
         <div>
           <div className="mb-2 block">
             <Label value="Start working date"/>
           </div>
           <TextInput 
             placeholder="Enter your start working day"
             name="start_working_date"
             value={salary?.start_working_date}
             type="date"
             onChange={handleOnChange}
           />
         </div>
         <div>
           <div className="mb-2 block">
             <Label value="Salary"/>
           </div>
           <TextInput 
             placeholder="Enter your salary"
             name="salary"
             value={salary?.salary}
             onChange={handleOnChange}
           />
         </div>
         <Button type="button" onClick={handleAddSalary}>Save</Button>
       </div>
     </form>
     <div className="container mx-auto">
       <SalarySearch/>
     </div>
     <ListSalary/>
   </div>
  )
}

export default SalaryFormAdd