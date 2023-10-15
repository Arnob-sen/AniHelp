import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import React from "react";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    <>
    <Routes>
      
      <Route path="/" element={<HomePage/>}/>
       <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

      
      
      </Routes>
      {/* <Navbar/> */}
      {/* <HomePage/> */}
      <Footer/>
    </>
    </BrowserRouter>
  )
}