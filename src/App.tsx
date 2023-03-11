import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.scss'
import Header from './components/common/Header';
import Home from './pages/home';
import UserAuthentication from './pages/users';
import Shop from './pages/shop';




function App() {

  
  return (
    <Routes>
      <Route path='/' element={<Header  />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<UserAuthentication />} />
      </Route>
    </Routes>
  );
}

export default App;
