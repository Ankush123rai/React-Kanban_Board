import React from "react";
import Home from "./home/Home";
import Description from "./components/description/Description";
import {  Routes, Route } from "react-router-dom";
import User from "./atoms/users/User";
import PrivateRoute from "./PrivateRoute";


const App = () => {

     



  return (
    <div style={{  backgroundImage: `url(${window.image})`}}>
      <Routes>
       
        <Route path="/user" element={<User/>} />
        <Route element={<PrivateRoute/>}>
          <Route  exact path="/" element={<Home />} />
          <Route exact path="/description/:id/" element={<Description/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
