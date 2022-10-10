import {Button, TextInput} from "flowbite-react"
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {filterBySalary, filterToggleSalary} from "../../features/SalarySlice"
const SalarySearch = () => {
  const [init, setInit] = useState([])
  const {isFilterBySalary, salary} = useSelector(state => state.salary)
  const dispatch = useDispatch()
  const handleFilterToggleSalary = () => {
   dispatch(filterToggleSalary(isFilterBySalary))
  }
  const handleFilterSalary = (e) => {
   if(e?.target?.value?.length){
    let filterSalary = salary?.filter(s => s.salary > 7000000)
    dispatch(filterBySalary(filterSalary))
   }else{
    dispatch(filterBySalary(init)) 
   }
  }
  useEffect(() => {
   if(init?.length === 0){
    setInit(salary)
   }
  },[salary])
  return (
   <>
    <div className="flex justify-end">
      <Button color="purple" onClick={handleFilterToggleSalary}>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
         <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
       </svg>
      </Button>
    </div>
    {isFilterBySalary ? 
      <TextInput 
        placeholder="Search by salary"
        style={{marginTop:"1%"}}
        onChange={handleFilterSalary}
      />
      : ""
    }
   </>
  )
}

export default SalarySearch