import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Registro from "../pages/registro/Registro";
import Creargrupo from "../pages/creargrupo/CrearGrupo";
import Listas from "../pages/listas/Listas";
import Mistareas from "../pages/tareas/Tareas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registro",
        element: <Registro />,
      },
      {
        path: "/creargrupo",
        element: <Creargrupo />,
      },
      {
        path: "/listas",
        element: <Listas />,
      },
      {
        path: "/mistareas",
        element: <Mistareas />,
      },
    ],
  },
]);

export default router;
