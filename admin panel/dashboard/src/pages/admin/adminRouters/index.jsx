import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../home";
import Navbar from "../../../layout/navbar/navbar";
import TemporaryDrawer from "../../../components/menu";
import Section1 from "../../../layout/section1";
import Menu2 from "../../../components/menu2";

function AdminRout() {
  return (
    <>
      <Navbar />
      <TemporaryDrawer />

      <Outlet />
    </>
  );
}

export default AdminRout;
