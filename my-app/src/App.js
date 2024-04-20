import React from "react";
import favicon from "./images/favicon.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Router>
      <div className=" h-screen bg-gradient-to-t from-indigo-500 xs:h-screen">
        <nav className="fixed top-0 right-0 bg-white w-full rounded-t-lg flex justify-between items-center px-4">
          <div>
            <img src={favicon} className="w-12 mt-2" alt="Logo" />
          </div>

          <div className="flex justify-center mx-auto">
            <Link to="/" className="font-jersey mx-4">
              Home
            </Link>
            <Link to="/about" className="font-jersey mx-4">
              About
            </Link>
            <Link to="/services" className="font-jersey mx-4">
              Services
            </Link>
            <Link to="/works" className="font-jersey mx-4">
              Works
            </Link>
            <Link to="/contact" className="font-jersey mx-4">
              Contact
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
