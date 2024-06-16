import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import PrivateRoutes from './PrivateRouting'
import About from '../Pages/About'
import Tasks from '../Pages/Ticket Pages/Tickets'
import Login from '../Pages/Login'
import Contect from '../Pages/Contect'
import ViewTicket from '../Pages/Ticket Pages/ViewTicket'
import CreateTicket from '../Pages/Ticket Pages/ShowTickets'
import EditTicket from '../Pages/Ticket Pages/EditTicket'

export default function AllRoute() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contect' element={<Contect/>}/>
    <Route path='/about' element={<PrivateRoutes>
            <About/>
        </PrivateRoutes>
    }/>
    <Route path='/ticket' element={ <PrivateRoutes>
            <Tasks/>
        </PrivateRoutes>}/>

    <Route path='/ticket/view/:id' element={ <PrivateRoutes>
            <ViewTicket/>
        </PrivateRoutes>}/>
    <Route path='/ticket/create' element={ <PrivateRoutes>
            <CreateTicket/>
        </PrivateRoutes>}/>
    <Route path='/ticket/edit/:id' element={ <PrivateRoutes>
            <EditTicket/>
        </PrivateRoutes>}/>
   
    <Route path='/login' element={<Login/>}/>
   </Routes>
  )
}