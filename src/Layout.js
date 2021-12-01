import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Banner />
      <Footer />
    </>
  );
}
