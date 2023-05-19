import React from "react";
import Home from "./home/Home";
import Description from "./components/description/Description";
import {  Routes, Route } from "react-router-dom";

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description/:id/" element={<Description/>} />
      </Routes>
   
  );
};

export default App;
