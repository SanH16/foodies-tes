import React from "react";
import Home from "../pages/Home";
import Cuisine from "../pages/Cuisine";
import { Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:category" element={<Cuisine />} />
    </Routes>
  );
}

export default Pages;
