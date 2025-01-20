import React from "react";
import TopBar from "../layouts/TopBar";
import Header from "../common/Header";
import Navbar from "../common/NavBar";
import FloatingDrawer from "../common/FloatingDrawer/FloatingDrawer.jsx";
import Footer from "../layouts/Footer"

const Layout = ({ children }) => {
  return (
    <div>
     
      <TopBar />
      <Header />
      <Navbar />
      <FloatingDrawer />

      <main className="container mx-auto px-4 py-6">{children}</main>
      <Footer />

     
    </div>
  );
};

export default Layout;
