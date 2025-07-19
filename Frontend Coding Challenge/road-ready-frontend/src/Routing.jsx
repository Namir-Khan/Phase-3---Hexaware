import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import VehicleList from './pages/VehicleList'
import Reservation from './pages/Reservation'
import Payment from './pages/Payment'
import Review from './pages/Review'
import ReviewList from './pages/ReviewList'
import Dashboard from './pages/Dashboard'

const Routing = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/vehicles' element={<VehicleList />} />
          <Route path='/reservation/:vehicleId' element={<Reservation />} />
          <Route path='/payment/:reservationId' element={<Payment />} />
          <Route path='/review/:paymentId' element={<Review />} />
          <Route path='/reviews' element={<ReviewList />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </>
  )
}

export default Routing