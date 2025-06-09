import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/Register'
import { Routes,Route, Navigate } from 'react-router-dom' ;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
