import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <Link to="/" className="logo">
              EasyTask
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
                <a href="#login" className="btn">
                  Log in
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="banner" id="top">
        <div className="container">
          <div className="content">
            <h6>Bienvenido a EasyTask</h6>
            <h2>
              Tareas del <em>Hogar</em> <span>más</span> simples
            </h2>
            <p>Aquí es donde tus tareas se hacen más fácil.</p>
            <form id="search" action="#" method="GET">
              <input
                type="text"
                name="address"
                placeholder="Escribe tu tarea"
                required
              />
              <button type="submit">Empieza</button>
            </form>
          </div>
          <img
            src="/images/hombre-limpiando.jpg"
            className="image"
            alt="Hombre limpiando"
          />
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <h3>Qué podrás lograr</h3>
          <div className="row">
            <img
              src="/images/about-left-image.png"
              alt="About Us"
              className="image-left"
            />
            <div className="services">
              <div className="service">
                <img src="/images/service-icon-01.png" alt="Service 1" />
                <h4>Resuelve tareas fácilmente</h4>
                
              </div>
              <div className="service">
                <img src="/images/service-icon-02.png" alt="Service 2" />
                <h4>Organiza el trabajo</h4>
           
              </div>
              <div className="service">
                <img src="/images/service-icon-03.png" alt="Service 3" />
                <h4>Comparte tus tareas</h4>
                
              </div>
              <div className="service">
                <img src="/images/service-icon-04.png" alt="Service 4" />
                <h4>Disfruta más tiempo libre</h4>
        
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
