// import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Card from './pages/Card'
import Wishlist from './pages/Wishlist'
import Products from './pages/Products'
import Layout from './layout'
import { Route, Routes } from 'react-router-dom'
import './App.css'
function App() {

  return (
    <>

      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/card' element={<Card />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/products' element={<Products />} />

        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>



    </>
  )
}

export default App