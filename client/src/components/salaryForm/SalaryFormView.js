import React, {useEffect} from "react"
import {Label, TextInput} from "flowbite-react"
import {useDispatch} from "react-redux"
import {getSalaryById} from "../../features/SalarySlice"
import moment from "moment"
const SalaryView = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
   if(props?.edit?.id){
    dispatch(getSalaryById(props?.edit?._id))
   }
  },[props?.edit?._id])
  return (
   <div>
     <form className="flex flex-col gap-4 p-2">
       <h1 className="text-3xl first-letter:capitalize text-center text-blue-600">salary detail form</h1>
       <div className="container mx-auto grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
         <div>
           <div className="mb-2 block">
             <Label value="Start working date"/>
           </div>
           <TextInput 
             placeholder="Enter your start working day"
             name="start_working_date"
             value={moment(props?.edit?.start_working_date).format("DD/MM/YYYY")}
             disabled
           />
         </div>
         <div>
           <div className="mb-2 block">
             <Label value="Salary"/>
           </div>
           <TextInput 
             placeholder="Enter your salary"
             name="salary"
             value={(props?.edit?.salary)?.toLocaleString()}
             disabled
           />
         </div>
       </div>
     </form>
   </div>
  )
}

export default SalaryView