import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import NosotrosInfo from "./components/pages/NosotrosInfo";
import Topbar from "./layout/Topbar";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="hidden tablet:block">
        <Topbar />
      </div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home greeting={"Bienvenidos"} />} />
        <Route path="/nosotros" element={<NosotrosInfo />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
