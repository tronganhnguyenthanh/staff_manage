import React, {useEffect} from "react"
import {Button, Card, Modal} from "flowbite-react"
import {useDispatch, useSelector} from "react-redux"
import {deleteStaffById, getListStaff, toggleModal} from "../../features/StaffInfoSlice"
import {toast, ToastContainer} from "react-toastify"
import {useNavigate} from "react-router-dom"
import StaffFormSearch from "../staffForm/StaffFormSearch"
const StaffList = () => {
  const staff = useSelector(state => state.staff.staff)
  const toggle = useSelector(state => state.staff.modal)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleConfirmStaffDelete = () => {
   dispatch(toggleModal())
  }
  const handleStaffDelete = (_id) => {
   dispatch(deleteStaffById(_id))
   toast.success("Staff deleted successfully", {position:"top-center"})
   dispatch(getListStaff())
  }
  useEffect(() => {
   dispatch(getListStaff())
  },[dispatch])
  return (
    <>
     <StaffFormSearch/>
     <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 container mx-auto p-2">
       {staff?.length > 0 && staff?.map((i, index) => {
        return(
         <div key={index}>
          <Card>
           <h1 className="text-center first-letter:capitalize">firstname: <span className="font-bold text-blue-600">{i?.firstName}</span></h1>
           <p className="text-center first-letter:capitalize">lastname: <span className="font-bold text-blue-600">{i?.lastName}</span></p>
           <p className="text-center first-letter:capitalize">email: <span className="font-bold text-blue-600">{i?.email}</span></p>
           <p className="text-center first-letter:capitalize">phone number: <span className="font-bold text-blue-600">{i?.phoneNumber}</span></p>
           <p className="text-center first-letter:capitalize">address: <span className="font-bold text-blue-600">{i?.address}</span></p>
           <div className="flex gap-2 justify-center">
            <Button>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                 <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                 <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
               </svg>
            </Button>
            <Button color="failure" onClick={handleConfirmStaffDelete}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
              </svg>
            </Button>
           </div>
           <Button color="gray" onClick={() => navigate("/staff/add")}>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
               <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
             </svg>
           </Button>
          </Card>
          <Modal show={toggle} popup={true} onClose={handleConfirmStaffDelete}>
            <Modal.Header/>
            <Modal.Body>
              <h1 className="text-2xl text-center">Are you sure you want to delete this staff ?</h1>
              <div className="flex justify-center gap-2 pt-2">
                <Button color="failure" onClick={() => handleStaffDelete(i?._id)}>Yes, I'm sure</Button>
                <Button color="gray" onClick={handleConfirmStaffDelete}>No, cancel</Button>
              </div>
            </Modal.Body>
          </Modal>
         </div>
        )
       })
      }  
     </div>
     <ToastContainer/>
    </>
  )
}
export default StaffList