import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Join from "./components/Join";
import Coordinates from "./components/Coordinates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PageTransition from "./components/PageTransition";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <PageTransition>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/join" element={<Join />} />
                <Route path="/coordinates" element={<Coordinates/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
                
            </Routes>
            </PageTransition>
        </BrowserRouter>
    );
}

export default App;
