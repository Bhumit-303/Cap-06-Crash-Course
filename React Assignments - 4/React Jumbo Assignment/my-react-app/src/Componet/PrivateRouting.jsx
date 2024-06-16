import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function PrivateRoutes({children}) {
    const {authState} = useContext(AuthContext)
  if(!authState.isLogned){
    return <Navigate to={"/login"}/>
  }

  return children
}