import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
export const addStaff = createAsyncThunk(
  "staff/addStaff",
  async (options) => {
   const res = await axios.post("http://localhost:8080/api/staff/add", options)
   return res?.data
  }
)
export const getListStaff = createAsyncThunk(
 "staff/getListStaff",
  async () => {
   const res = await axios.get("http://localhost:8080/api/staff/list")
   return res?.data
  }
)
export const deleteStaffById = createAsyncThunk(
 "staff/deleteStaffById",
 async (_id) => {
  const res = await axios.delete(`http://localhost:8080/api/staff/delete/${_id}`)
  return res?.data
 }
)
const StaffInfoSlice = createSlice({
  name:"staff",
  initialState:{
   staff:[],
   loading:false,
   modal:false
  },
  reducers:{
   toggleModal:(state) => {
    state.modal = !state.modal
   },
   onSearchStaffFilter:(state, action) => {
    state.staff = state.staff.filter(s => s.firstName.includes(action.payload))
   }
  },
  extraReducers:{
   [addStaff.fulfilled]:(state, action) => {
     state.staff = action.payload
   },
   [addStaff.rejected]:(state, action) => {
     state.staff = action.error
   },
   [getListStaff.pending]:(state) => {
     state.loading = false
   },
   [getListStaff.fulfilled]:(state, action) => {
     state.loading = true
     state.staff = action.payload
   },
   [getListStaff.rejected]:(state, action) => {
     state.staff = action.error
     state.loading = false
   },
   [deleteStaffById.fulfilled]:(state, action) => {
     state.staff = action.payload
   },
   [deleteStaffById.rejected]:(state, action) => {
     state.staff = action.error
   }
  }
})
export const {toggleModal, onSearchStaffFilter} = StaffInfoSlice.actions
const StaffInfoReducer = StaffInfoSlice.reducer
export default StaffInfoReducer