import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../src/components/Auth/Auth"
import Home from "./components/Home";



const Alroutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Auth />} />
      <Route exact path="/home" element={<Home/>} />
    </Routes>
  );
};

export default Alroutes;
