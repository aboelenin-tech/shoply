// import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Card from './pages/Card'
import Wishlist from './pages/Wishlist'
import Products from './pages/Products'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/card' element={<Card/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/products' element={<Products/>}/>
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App