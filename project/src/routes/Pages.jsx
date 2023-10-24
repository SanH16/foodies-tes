import React from "react";
import Home from "../pages/Home";
import Cuisine from "../pages/Cuisine";
import { Routes, Route, useLocation } from "react-router-dom";
import Searched from "../pages/Searched";
import Recipe from "../pages/Recipe";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:category" element={<Cuisine />} />
        <Route path="/searched/:searched" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
