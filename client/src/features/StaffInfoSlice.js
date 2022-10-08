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
export const editStaffById = createAsyncThunk(
 "staff/editStaffById",
 async (_id) => {
  const res = await axios.get(`http://localhost:8080/api/staff/edit/${_id}`)
  return res?.data
 }
)
export const updateStaff = createAsyncThunk(
 "staff/updateStaff",
 async (_id, options) => {
  const res = await axios.put(`http://localhost:8080/api/staff/update/${_id}`, options)
  return res?.data
 }
)
const StaffInfoSlice = createSlice({
  name:"staff",
  initialState:{
    staff:[],
    modal:false,
    view:false
  },
  reducers:{
   toggleModal:(state) => {
    state.modal = !state.modal
   },
   toggleView:(state) => {
    state.view = !state.view
   },
   onSearchStaffFilter:(state,{payload}) => {
    state.staff = payload
   }
  },
  extraReducers:{
   [addStaff.fulfilled]:(state,{payload}) => {
     state.staff = payload
   },
   [addStaff.rejected]:(state, error) => {
     state.staff = error
   },
   [getListStaff.fulfilled]:(state,{payload}) => {
     state.staff = payload
   },
   [getListStaff.rejected]:(state, error) => {
     state.staff = error
   },
   [deleteStaffById.fulfilled]:(state,{payload}) => {
     state.staff = payload
   },
   [deleteStaffById.rejected]:(state, error) => {
     state.staff = error
   },
   [editStaffById.fulfilled]:(state, {payload}) => {
     state.staff = payload
   },
   [editStaffById.rejected]:(state, error) => {
     state.staff = error
   },
   [updateStaff.fulfilled]:(state, {payload}) => {
     state.staff = payload
   },
   [updateStaff.rejected]:(state, error) => {
     state.staff = error
   }
  }
})
export const {toggleModal, onSearchStaffFilter, toggleView} = StaffInfoSlice.actions
const StaffInfoReducer = StaffInfoSlice.reducer
export default StaffInfoReducer