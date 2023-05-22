import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const userData=JSON.parse(localStorage.getItem('user'))
  return (
    <>
    {userData? <Outlet/>: <Navigate to='/user'/>}
    </>
  )
}

export default PrivateRoute