import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";
import "./layout.css";

const Layout = () => {
  return (
    <div id="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
