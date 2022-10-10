import React, {useEffect, useState} from "react"
import {Button, Modal, Table} from "flowbite-react"
import {useDispatch, useSelector} from "react-redux"
import {deleteSalaryById, getListSalary, toggleSalaryView} from "../../features/SalarySlice"
import moment from "moment"
import SalaryView from "../salaryForm/SalaryFormView"
import {ToastContainer, toast} from "react-toastify"
const ListSalary = () => {
  const {salary, modal_salary_view} = useSelector(state => state.salary)
  const [edit_salary, setEditSalary] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getListSalary())
  },[])
  const handleViewSalary = (_id) => {
   dispatch(toggleSalaryView())
   setEditSalary(_id)
  }
  const handleDeleteSalary = (_id) => {
    dispatch(deleteSalaryById(_id))
    toast.success("Salary deleted successfully", {position:"top-center"})
  }
  return (
   <div className="container mx-auto">
     <ToastContainer/>
     <Table className="mt-2">
       <Table.Head>
         <Table.HeadCell className="text-center whitespace-nowrap">Start working date</Table.HeadCell>
         <Table.HeadCell className="text-center">Salary</Table.HeadCell>
         <Table.HeadCell className="text-center">Action</Table.HeadCell>
       </Table.Head>
       <Table.Body className="divide-y">
        {salary?.length > 0 && salary?.map((i, index) => {
          return(
           <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
             <Table.Cell className="text-center">{moment(i?.start_working_date).format("DD/MM/YYYY")}</Table.Cell>
             <Table.Cell className="text-center">{(i?.salary).toLocaleString()}</Table.Cell>
             <Table.Cell className="flex justify-center">
               <Button onClick={() => handleViewSalary(i)}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                   <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                   <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                 </svg> 
                  View
               </Button>
               <Button color="failure" style={{marginLeft:"2%"}} onClick={() => handleDeleteSalary(i?._id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg> 
                  Delete
               </Button>
             </Table.Cell>
             <Modal show={modal_salary_view} popup={true} onClose={handleViewSalary}>
               <Modal.Header/>
               <Modal.Body>
                 {edit_salary && <SalaryView edit={edit_salary}/>}
               </Modal.Body>
             </Modal>
           </Table.Row>
          )
         })
        }
      </Table.Body>  
    </Table>
   </div>
  )
}

export default ListSalary