import React from "react";
import Footer from "../components/Footer/Footer";
import ProductLinks from "../components/Links/ProductLinks";
import BottomNav from "../components/Navbar/BottomNav";
import Navbar from "../components/Navbar/Navbar";

function AppContainer({ children }) {
  return (
    <>
      <Navbar />
      <ProductLinks />
      <BottomNav />
      {children}
      <Footer />
    </>
  );
}

export default AppContainer;
