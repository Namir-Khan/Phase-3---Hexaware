import React from 'react'
import './App.css'
import Navbar from './components/NavBar'
import Routing from './Routing'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className='flex-grow'>
          <Routing />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App