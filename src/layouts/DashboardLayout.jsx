import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function DashboardLayout() {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default DashboardLayout;
