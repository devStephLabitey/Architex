import React from 'react';
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';
import Home from './components/Pages/Home';
import Navbar from './components/fixeComponents/Navbar';
import SearchPage from './components/Pages/Searchpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SearchPage' element={<SearchPage/>}/>
      </Routes>
    </BrowserRouter>
    
  )
  ;
}

export default App;