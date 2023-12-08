import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ScrollToTop from './components/common/srollTop/ScrollToTop';
import Home from './components/pages/home/Home';
import Contact from './components/pages/contact/Contact';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>  </Route>
        <Route path="/contact" element={<Contact/>}>  </Route>
      </Routes>
    </BrowserRouter>

    <ScrollToTop/>
    </>
  )
}

export default App
