import {configureStore} from "@reduxjs/toolkit"
import StaffInfoReducer from "./features/StaffInfoSlice"
const store = configureStore({
 reducer:{
  staff:StaffInfoReducer
 }
})
export default store