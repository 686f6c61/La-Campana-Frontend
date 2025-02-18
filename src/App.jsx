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
import BottomBar from "./layout/BottomBar";
import Terms from "./pages/LegalTerms";
import PaymentMethods from "./pages/LegalMethods";
import Return from "./pages/LegalReturn";
import Shipping from "./pages/LegalShipping";
import Politics from "./pages/LegalPolitics";
import Orders from "./components/Account/Orders";
import DashboardPanel from "./components/Account/DashboardPanel";
import Addresses from "./components/Account/Addresses";
import PaymentMethod from "./components/Account/PaymentMethod";
import AccountDetails from "./components/Account/AccountDetails";
import WishList from "./components/Account/WishList";
import FloatingDrawer from "./components/common/FloatingDrawer";
import ScrollToTop from "./components/layouts/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route path="/micuenta" element={<MyAccount />}>
          <Route index element={<DashboardPanel />} />
          <Route path="pedidos" element={<Orders />} />
          <Route path="direcciones" element={<Addresses />} />
          <Route path="metodos" element={<PaymentMethod />} />
          <Route path="detalles" element={<AccountDetails />} />
          <Route path="deseos" element={<WishList />} />
        </Route>

        <Route path="/servicios/:serviceId" element={<ServiceDetails />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terminos" element={<Terms />} />
        <Route path="/metodosdepago" element={<PaymentMethods />} />
        <Route path="/devolucion" element={<Return />} />
        <Route path="/envio" element={<Shipping />} />
        <Route path="/politicadeprivacidad" element={<Politics />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      {/* <Footer /> */}
      <FloatingDrawer />
      <Footer />
      <BottomBar />
    </BrowserRouter>
  );
}

export default App;
