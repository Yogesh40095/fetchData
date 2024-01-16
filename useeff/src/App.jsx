import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import Home from './component/home';
import About from './component/About';
import Contact from './component/Contact';
import './App.css';

import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Error from './component/Error';
import Email from './component/email';
import Insta from './component/insta';
import Userdetail from './component/Userdetail';


function App() {
  

  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route path='/'>
        <Route index element={<Home/>} />

          <Route path='/app' element={<Home/>} />
          
      
          </Route>

          <Route path='/app/:userId' element={<Userdetail/>} />




          <Route path='/About' element={<About/>} />

          <Route path='/Contact' element={<Contact/>} >


            /* nested route */
            <Route index path='mail' element={<Email/>} />
            <Route path='insta' element={<Insta/>} />
            <Route index element={<Insta/>} />

            </Route>

          <Route path='*' element={<Error/>} />

          
          </Routes>
      </div>
    </Router>
  );
}

export default App;
