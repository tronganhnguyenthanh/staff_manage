import {configureStore} from "@reduxjs/toolkit"
import SalaryReducer from "./features/SalarySlice"
import StaffInfoReducer from "./features/StaffInfoSlice"
const store = configureStore({
 reducer:{
  staff:StaffInfoReducer,
  salary:SalaryReducer
 }
})
export default store