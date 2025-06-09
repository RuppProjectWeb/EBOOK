
import { useState } from 'react'
import './App.css'
import Register from './pages/Register'
import { Routes,Route, Navigate } from 'react-router-dom' ;


function App() {
  return (
    <>
     <Routes>
      <Route path="/register" element={<Register />} />
      </Routes>

    </>
  )
}

export default App
