import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NosotrosInfo from "./pages/NosotrosInfo";
import CategoryPage from "../src/components/common/CategoryPage";
import ProductDetailPage from "../src/components/common/ProductDetailPage";
import Topbar from "./layout/Topbar";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
// import Footer from "./components/layouts/Footer";
import "overlayscrollbars/overlayscrollbars.css";
import Blog from "./pages/Blog";
import DocumentsItem from "./components/docs/DocumentsItem";
import BlogDetails from "./pages/BlogDetails";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import MyAccount from "./pages/MyAccount";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="hidden tablet:block">
        <Topbar />
      </div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<NosotrosInfo />} />
        <Route path="/documentos" element={<DocumentsItem />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/:categoryId" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogDetails />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/micuenta" element={<MyAccount />} />
        <Route path="/servicios/:serviceId" element={<ServiceDetails />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      {/* <Footer /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
