
import { useState } from 'react'
import './App.css'
import { Routes,Route, Navigate } from 'react-router-dom' ;
import Login from './pages/Login';
import Register from './pages/Register'
import Landing from './pages/Landing';
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/landing" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login/>} />
       <Route path="/dash" element={<Dashboard/>} />
      </Routes>

    </>
  )
}

export default App
