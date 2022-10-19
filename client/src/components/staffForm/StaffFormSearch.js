import React, {useEffect, useState} from "react"
import {TextInput} from "flowbite-react"
import {useDispatch, useSelector} from "react-redux"
import {onSearchStaffFilter} from "../../features/StaffInfoSlice"
const StaffFormSearch = () => {
  const [filter, setFilter] = useState([])
  const staff = useSelector(state => state.staff.staff)
  const dispatch = useDispatch()
  const handleSearchStaff = async (e) => {
    let result = await filter?.filter(s => s.firstName.includes(e))
    dispatch(onSearchStaffFilter(result))
  }
  useEffect(() => {
    if(filter?.length === 0 || staff?.length > filter?.length){
     setFilter(staff)
    }
   },[staff, filter?.length])
  return (
   <div className="container mx-auto">
     <TextInput
       placeholder="Search staff"
       style={{marginTop:"1%"}}
       onChange={(e) => handleSearchStaff(e.target.value)}
     />
   </div>
  )
}

export default StaffFormSearch