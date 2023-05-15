import React from "react";
import Home from "./home/Home";
import Description from "./components/description/Description";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:id/" element={<Description />} />
      </Routes>
    </Router>
  );
};

export default App;
