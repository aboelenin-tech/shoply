// import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Card from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Products from './pages/Products'
import Layout from './layout'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductDetails from './pages/ProductDetails'

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
          <Route path="/products/:id" element={<ProductDetails />} />

        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>



    </>
  )
}

export default App