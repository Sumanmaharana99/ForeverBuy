import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Product from './pages/Product'
import About from './pages/About'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
const App = () => {
   
  return ( 
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
        <Navbar/>
        <SearchBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/verify' element={<Verify/>} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
