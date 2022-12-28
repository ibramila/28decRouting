import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Main/Footer";
import NavbarSide from "../../components/Main/NavbarSide";

function MainRoot() {
    return (
        <>
            <NavbarSide />
            <Outlet />
            <Footer />
        </>
    );
}

export default MainRoot;