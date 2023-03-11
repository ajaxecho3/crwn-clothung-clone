import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.scss'
import Header from './components/common/Header';
import Home from './pages/home';
import SignIn from './components/sign-in';
import UserAuthentication from './pages/users';




function App() {

  
  return (
    <Routes>
      <Route path='/' element={<Header  />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<p>I mage</p>} />
        <Route path='auth' element={<UserAuthentication />} />
      </Route>
    </Routes>
  );
}

export default App;
