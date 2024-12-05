import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Gallery from "./Components/Gallery";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header isMobile={isMobile} />
        <div style={{ display: "flex", alignItems: "flex-start", width: isMobile ? "auto" : "90%", maxWidth: "1100px", margin: "25px", marginBottom: 0 }}>
          { !isMobile && <Navigation isMobile={isMobile} />}
          <section style={{ width: isMobile ? "100%" : "80%", boxShadow: "#864338 0px 0px 1px 6px", borderRadius: "2px", padding: isMobile ? "20px" : "1.8vw", backgroundColor: "#121212" }}>
            <Routes>
                <Route exact path="/" element={<Home isMobile={isMobile} />} />
                <Route path="/about" element={<About isMobile={isMobile} />} />
                <Route path="/gallery" element={<Gallery isMobile={isMobile} />} />
            </Routes>
          </section>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
