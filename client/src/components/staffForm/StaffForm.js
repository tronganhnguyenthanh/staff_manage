import React from "react"
import {Link} from "react-router-dom"
const StaffForm = () => {
  return (
   <div className="container mx-auto py-64 responsive-iphone">
     <div>
      <Link 
        to="/staff/add" 
        className="group block max-w-xs mx-auto rounded-lg p-6 mt-2 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Add staff information</h3>
        </div>
        <p className="text-slate-500 group-hover:text-white text-sm">Create a new staff information from a variety of business.</p>
      </Link>
     </div>
     <div>
       <Link
         to="/salary/add"
         className="group block max-w-xs mx-auto rounded-lg p-6 mt-2 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
       >
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Add staff salary</h3>
        </div>
        <p className="text-slate-500 group-hover:text-white text-sm">Create a new staff salary from a variety of business.</p>
      </Link>
     </div>
   </div>
  )
}

export default StaffForm