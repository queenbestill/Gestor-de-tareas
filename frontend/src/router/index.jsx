import { createBrowserRouter, redirect } from "react-router-dom";

import App from "../App";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Registro from "../pages/registro/Registro";
import Creargrupo from "../pages/creargrupo/CrearGrupo";
import Mistareas from "../pages/MisTareas/MisTareas";
import Root from '../layouts/Layout'

import Tareas from "../pages/tareas/Tareas";

const isAuth = () =>  {
  return localStorage.getItem('token') ? null : redirect('/login')
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
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
        loader: () => isAuth(),
      },
      {
        path: "/tareas",
        element: <Tareas />,
        loader: () => isAuth(),
      },
      {
        path: "/mistareas",
        element: <Mistareas />,
        loader: () => isAuth(),
      },
    ],
  },
]);

export default router;
