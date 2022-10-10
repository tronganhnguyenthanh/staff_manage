import React, {useEffect} from "react"
import {Label, TextInput} from "flowbite-react"
import {useDispatch} from "react-redux"
import {editStaffById} from "../../features/StaffInfoSlice"
const StaffFormView = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
   if(props?.data?.id){
    dispatch(editStaffById(props?.data?._id))
   }
  },[props?.data?._id])
  return(
   <>
    <form className="flex flex-col gap-4 p-2">
     <h1 className="text-3xl first-letter:capitalize text-center text-blue-600">staff information detail</h1>
     <div className="container mx-auto grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
       <div className="staff_info">
         <div className="mb-2 block">
           <Label value="Firstname"/>
         </div>
         <TextInput 
           placeholder="Enter your firstname"
           name="firstName"
           value={props?.data?.firstName}
           disabled
         />
       </div>
       <div>
         <div className="mb-2 block">
           <Label value="Lastname"/>
         </div>
         <TextInput 
           placeholder="Enter your lastname"
           name="lastName"
           value={props?.data?.lastName}
           disabled
         />
       </div>
       <div>
         <div className="mb-2 block">
           <Label value="Email"/>
         </div>
         <TextInput 
           placeholder="Enter your email"
           name="email"
           value={props?.data?.email}
           disabled
         />
       </div>
       <div>
         <div className="mb-2 block">
           <Label value="Phone number"/>
         </div>
         <TextInput 
           placeholder="Enter your phone number"
           name="phoneNumber"
           value={props?.data?.phoneNumber}
           disabled
         />
       </div>
       <div>
         <div className="mb-2 block">
           <Label value="Address"/>
         </div>
         <TextInput 
           placeholder="Enter your address"
           name="address"
           value={props?.data?.address}
           disabled
         />
       </div>
     </div>
    </form>
   </>
 )
}
export default StaffFormView
