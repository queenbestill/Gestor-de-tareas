import React from "react";
import { Outlet } from "react-router-dom";
import AppBarResponsive from "../components/AppBarResponsive";

function Root() {
  return (
    <div id="container">
        <AppBarResponsive/>

      <section>
        <Outlet />
      </section>
      <div>I am the Footer</div>
    </div>
  );
}

export default Root;
