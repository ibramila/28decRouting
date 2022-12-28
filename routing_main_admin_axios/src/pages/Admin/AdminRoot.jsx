import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Admin/Footer";
import NavbarSide from "../../components/Admin/NavbarSide";

function AdminRoot() {
  return (
    <>
      <NavbarSide />
      <Outlet />
      <Footer />
    </>
  );
}

export default AdminRoot;