import React from "react";
import {Outlet} from "react-router-dom";
import NavAlt from "../components/navalt";

const Layout = () => {
  return (
    <>
      <NavAlt />
      <Outlet />
    </>
  );
};

export default Layout;