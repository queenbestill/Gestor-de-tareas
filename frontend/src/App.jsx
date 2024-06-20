import { Outlet } from "react-router-dom";
import "./App.css";
import { UserContext } from "./context/userContext";
import { useEffect, useState } from "react";
import { useNavigate } from "./context/userContext";

function App() {
  const [user, setuser] = useState('')

  return (
    <UserContext.Provider value={"user, setuser"}>
      <Outlet />
    </UserContext.Provider>
  );
}

export default App;
