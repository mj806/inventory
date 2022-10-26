import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import Contact from "./Contact";
import ComicsPage from "./ComicsPage";
import { AnimatePresence } from "framer-motion";

const RoutingPages = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/comicbooks" element={<ComicsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutingPages;
