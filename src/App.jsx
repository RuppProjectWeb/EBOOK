
import { useState } from 'react'
import './App.css'
import { Routes,Route, Navigate } from 'react-router-dom' ;
import Login from './pages/Login';
import Register from './pages/Register'
import Landing from './pages/Landing';
import HomePage from './pages/HomePage'


function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/landing" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login/>} />
       <Route path="/dash" element={<Login/>} />
      </Routes>

    </>
  )
}

export default App
