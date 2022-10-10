import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
export const addSalary = createAsyncThunk(
 "salary/addSalary",
 async (options) => {
  let res = await axios.post("https://staff-manage-api.herokuapp.com/api/v1/salary/add", options)
  return res?.data
 }
)
export const getListSalary = createAsyncThunk(
 "salary/getListSalary",
 async() => {
  let res = await axios.get("https://staff-manage-api.herokuapp.com/api/v1/salary/list")
  return res?.data
 }
)
export const getSalaryById = createAsyncThunk(
 "salary/getSalaryById",
 async (_id) => {
  let res = await axios.get(`https://staff-manage-api.herokuapp.com/api/v1/salary/view/${_id}`)
  return res?.data
 }
)
export const deleteSalaryById = createAsyncThunk(
  "salary/deleteSalaryById",
  async (_id) => {
   let res = await axios.delete(`https://staff-manage-api.herokuapp.com/api/v1/salary/delete/${_id}`)
   return res?.data
  }
)
const SalarySlice = createSlice({
 name:"salary",
 initialState:{
  salary:[],
  loading:false,
  modal_salary_view:false,
  isFilterBySalary:false
 },
 reducers:{
  toggleSalaryView:(state) => {
    state.modal_salary_view = !state.modal_salary_view
  },
  filterToggleSalary:(state) => {
    state.isFilterBySalary = !state.isFilterBySalary
  },
  filterBySalary:(state, {payload}) => {
    state.salary = payload
  }
 },
 extraReducers:{
  [addSalary.fulfilled]:(state, {payload}) => {
    let temp = state.salary.push(payload)
    state.salary = temp
  },
  [addSalary.rejected]:(state, error) => {
    state.salary = error
  },
  [getListSalary.pending]:(state) => {
    state.loading = false
  },
  [getListSalary.fulfilled]:(state,{payload}) => {
    state.loading = true
    state.salary = payload
  },
  [getListSalary.rejected]:(state, error) => {
    state.salary = error
  },
  [getSalaryById.fulfilled]:(state, {payload}) => {
    state.salary = state.salary.push(payload)
  },
  [getSalaryById.rejected]:(state, error) => {
    state.error = error
  },
  [deleteSalaryById.fulfilled]:(state, {payload}) => {
    state.salary = state.salary.filter(e => e._id !== payload._id)
  },
  [deleteSalaryById.rejected]:(state, error) => {
    state.error = error
  }
 }
})
export const {toggleSalaryView, filterToggleSalary, filterBySalary} = SalarySlice.actions
const SalaryReducer = SalarySlice.reducer
export default SalaryReducer