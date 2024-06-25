import React from "react";
import { Outlet } from "react-router-dom";
import AppBarResponsive from "../components/AppBarResponsive";
import Footer from "../components/Footer/Footer";

function Root() {
  return (
    <div id="container">
        <AppBarResponsive/>

      <section>
        <Outlet />
      </section>
      <Footer/>
    </div>
  );
}

export default Root;
