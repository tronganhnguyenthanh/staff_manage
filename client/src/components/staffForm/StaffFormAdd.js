import React, {useState} from "react"
import {Label, TextInput, Button} from "flowbite-react"
import {ToastContainer, toast} from "react-toastify"
import {useDispatch} from "react-redux"
import {addStaff} from "../../features/StaffInfoSlice"
import {useNavigate} from "react-router-dom"
const StaffFormAdd = () => {
  const init_data = {
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    address:""
  }
  const [data, setData] = useState(init_data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleOnChange = (e) => {
    let new_data = {...data}
    new_data[e.target.name] = e.target.value
    setData(new_data)
  }
  const handleStaffAdd = () => {
    if(data?.firstName === ""){
     toast.error("Please enter your firstname", {position:"top-center"})
     return false
    }
    if(data?.lastName === ""){
     toast.error("Please enter your lastname", {position:"top-center"})
     return false
    }
    if(data?.email === ""){
     toast.error("Please enter your email", {position:"top-center"})
     return false
    }
    if(data?.phoneNumber === ""){
     toast.error("Please enter your phone number", {position:"top-center"})
     return false
    }
    if(data?.address === ""){
     toast.error("Please enter your address", {position:"top-center"})
     return false
    }else{
      dispatch(addStaff(data))
      navigate("/staff/list")
      return true
    }
  }
  return(
   <>
    <ToastContainer/>
    <form className="flex flex-col gap-4 p-2 py-64">
     <h1 className="text-3xl first-letter:capitalize text-center text-blue-600">staff information form</h1>
     <div className="container mx-auto grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
       <div>
         <div className="mb-2 block">
           <Label value="Firstname"/>
         </div>
         <TextInput 
           placeholder="Enter your firstname"
           name="firstName"
           value={data?.firstName}
           onChange={handleOnChange}
         />
       </div>
       <div>
         <div className="mb-2 block">
           <Label value="Lastname"/>
         </div>
         <TextInput 
           placeholder="Enter your lastname"
           name="lastName"
           value={data?.lastName}
           onChange={handleOnChange}  
         />
       </div>
       <div>
         <div className="mb-2 block">
           <Label value="Email"/>
         </div>
         <TextInput 
           placeholder="Enter your email"
           name="email"
           value={data?.email}
           onChange={handleOnChange}
         />
       </div>
       <div>
         <div className="mb-2 block">
           <Label value="Phone number"/>
         </div>
         <TextInput 
           placeholder="Enter your phone number"
           name="phoneNumber"
           value={data?.phoneNumber}
           onChange={handleOnChange}
         />
       </div>
       <div>
         <div className="mb-2 block">
           <Label value="Address"/>
         </div>
         <TextInput 
           placeholder="Enter your address"
           name="address"
           value={data?.address}
           onChange={handleOnChange}
         />
       </div>
     </div>
     <div className="container mx-auto">
       <Button type="button" onClick={handleStaffAdd}>Save</Button> 
     </div>
    </form>
   </>
 )
}
export default StaffFormAdd
