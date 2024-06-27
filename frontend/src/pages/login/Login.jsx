import React, { useContext, useState } from "react";
import "../login/Login.css";
import { login } from "../../services/auth.service";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    const response = await login(email, password);

    localStorage.setItem('token', response.token)
    setUser(response.user)
    
    navigate("/tareas");
    console.log(user)

  };

  return (
    <div className="card">
      <h1 style={{ color: '#00464d' , marginTop: '7%'}}>¡Bienvenid@ de  nuevo!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="¿Cuál es tu email?"
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          placeholder="Contraseña"
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button className="registro" type="submit">
          Entrar
        </button>
        <p>
         ¿No tienes cuenta?{" "}
          <span
            style={{ cursor: "pointer", color: "blue" }}
            onClick={function () {
              navigate("/registro");
            }}
          >
            Regístrate
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
