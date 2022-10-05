import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

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
