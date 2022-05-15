import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './components/pages/HomePage/Home'
import Services from './components/pages/Services/Services'
import Products from './components/pages/Products/Products'
import SignUp from './components/pages/SignUp/SignUp'
import Footer from './components/pages/Footer/Footer'

function App() {
  return (

   <BrowserRouter>
         <Navbar />
         <Routes>
           <Route exact  path='/'  element={ <Home />} />
           <Route exact  path='/services'  element={ <Services />} />
           <Route exact  path='/products'  element={ <Products />} />
           <Route exact  path='/sign-up'  element={ <SignUp />} />
         </Routes>
         <Footer />
    </BrowserRouter>
  );
}

export default App;
