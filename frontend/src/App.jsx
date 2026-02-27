import React, { useContext, useState } from 'react'
import { StoreContext } from './Context/StoreContext'

import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify'
import Menu from './pages/Menu/Menu'
import MobileApp from './pages/MobileApp/MobileApp'
import ContactUs from './pages/ContactUs/ContactUs'

const App = () => {

  const { showLogin, setShowLogin } = useContext(StoreContext);

  return (
    <>
      <ToastContainer />
      {showLogin ? <LoginPopup /> : <></>}
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/menu/:category' element={<Menu />} />
          <Route path='/mobile-app' element={<MobileApp />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/verify' element={<Verify />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
