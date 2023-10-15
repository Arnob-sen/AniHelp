import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import React from "react";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
// import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Output from "./components/Output";
import MedicinePage from "./components/MedicinePage";
import FoodPage from "./components/FoodPage";


export default function App() {
  // function onCreateUser(user){
  //   fetch('https://fir-anihelp-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',{
  //     method: 'POST',
  //     body: JSON.stringify()
  //   })
  //   .then((resp)=>{
  //     console.log(resp);
  //   })
  // }
  return (
    <BrowserRouter>
      <Navbar/>
    <>
    <Routes>
      
      <Route path="/" element={<HomePage/>}/>
       <Route path="/login" element={<Login/>}/>
        {/* <Route path="/signup" element={<Signup/>}/> */}
        <Route path="/signup" element={<Input/>}/>
        <Route path="/bird" element={<Output tar={1}/>}/>
        <Route path="/cattle" element={<Output tar={2}/>}/>
        <Route path="/fish" element={<Output tar={3}/>}/>
        <Route path="/other" element={<Output tar={4}/>}/>
        <Route path="/medicine" element={<MedicinePage/>}/>
        <Route path="/food" element={<FoodPage/>}/>
      
      
      </Routes>
      {/* <Navbar/> */}
      {/* <HomePage/> */}
      <Footer/>
    </>
    </BrowserRouter>
  )
}