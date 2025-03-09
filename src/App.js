import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomePage from "./HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Facilities from "./pages/Facilities";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/facilities" element={<Facilities />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;