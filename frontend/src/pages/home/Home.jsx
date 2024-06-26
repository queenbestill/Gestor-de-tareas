import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* <div className="header-area">
        <div className="container-home">
          <nav className="main-nav">
            <Link to="/" className="logo">
              <h4>EasyTask</h4>
            </Link>
            <ul className="nav">
              <li>
                <a href="#top" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#verhogar">Ver hogar</a>
              </li>
              <li>
                <a href="#vertareas">Ver tareas</a>
              </li>
              <li>
                <Link to="/login" className="login-button">
                  Log in
                </Link>
              </li>
              
            </ul>
            <div className="menu-trigger">
              <span>Menu</span>
            </div>
          </nav>
        </div>
      </div>
 */}
      <section className="main-banner" id="top">
        <div className="container">
          <div className="content">
            <div className="text">
              <h6>Bienvenido a EasyTask</h6>
              <h2>
                Tareas del <em>Hogar</em> <span>más</span> simples
              </h2>
              <p>Aquí es donde tus tareas se hacen más fácil.</p>
              {/* <form id="search" action="#" method="GET">
                <input
                  type="text"
                  name="address"
                  className="email"
                  placeholder="Escribe tu tarea"
                  autoComplete="on"
                  required
                />
                <button type="submit" className="main-button">
                  Empieza
                </button>
              </form> */}
            </div>
            <div className="image">
              <img
                src="ilustracion3.jpeg"
                alt="Hombre reunion"

              />
            </div>
          </div>
        </div>
      </section> 
      HOME
    </div>
  );
}

export default Home;