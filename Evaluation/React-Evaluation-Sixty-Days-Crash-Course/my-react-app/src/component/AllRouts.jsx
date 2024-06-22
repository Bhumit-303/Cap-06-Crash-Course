import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import ProductDetail from '../Pages/ProductDetail'
import PrivateRoute from './PrivateRoute'

export default function AllRouts() {
  return (
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/productview/:product_id' element={
    <PrivateRoute>
      <ProductDetail/>
    </PrivateRoute>
   }/>

   <Route path='/login' element={<Login/>}/>
   </Routes>
  )
}
 // all route done 