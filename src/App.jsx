
import { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate, BrowserRouter, Router, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import HomePage from "./pages/HomePage";
import AdminDashBoard from "./pages/AdminDashBoard";
import Layout from "./components/rout/Layout";
import BookMark from "./components/book/BookMark";
import FileNotFound from "./components/filenotfound/FileNotFound";
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <>

      Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/bookmark"
          element={
            <Layout>
              <BookMark />
            </Layout>
          }
        />
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1><FileNotFound/></h1>} />
      </Routes>
    </>
  );
}

export default App;
