import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import { UserContext } from "./context/userContext";
import { useEffect, useState } from "react";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"; 

function App() {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
    <Outlet/>
    </UserContext.Provider>
  );
}

export default App;
