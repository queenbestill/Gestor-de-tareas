import { useState } from "react";
import { signup } from '../../services/auth.service'
import "./Registro.css";
import { useNavigate } from "react-router-dom";

function Registro() {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [doublePass, setDoublePass] = useState("");
  const [email, setEmail] = useState("");
  const [errs, setErrs] = useState(""); //Para mostrar si hay algún error

  const navigate = useNavigate();

  async function handleClick(event) {
    event.preventDefault();
    if (password === doublePass) {
      try {
        if (
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
        ) {
          await signup(email, fullname, password);
          setErrs("");
          alert("¡Genial! Ya puedes empezar a ordenar tus tareas");
        } else {
          setErrs(
            "La contraseña debe tener al menos 8 caracteres: 1 caracter especial, 1 minúscula, 1 mayúscula"
          );
        }
      } catch (error) {
        setErrs(error.message);
      }
    } else {
      setErrs("Las contraseñas no coinciden");
    }
  }

  return (
    <div className="registercontainer">
     
      <img src="public/ilustracion3.jpeg" className="image" />
      <div className="card">
        <h1>Regístrate</h1>
        <h2>¡Estás a un clic ordenar tus tareas de la forma más óptima!</h2>
        <form className="form">
          {<input
            /* className="email" */
            placeholder="¿Cuál es tu e-mail?"
            type="email"
            onChange={function (event) {
              setEmail(event.target.value);
            }}
          />}
          <input
            placeholder="¿Cómo te llamas?"
            onChange={function (event) {
              setFullname(event.target.value);
            }}
          />
          <input
            placeholder="Contraseña"
            type="password"
            onChange={function (event) {
              setPassword(event.target.value);
            }}
          />

          {password}
          <input
            placeholder="Repite tu contraseña"
            type="password"
            onChange={function (event) {
              setDoublePass(event.target.value);
            }}
          />

          {errs && <p className="error">{errs}</p>}

          <button className="registro"
          onClick={handleClick}>Registrarme</button>

          <p>Ya tengo una cuenta </p>
          <a
            onClick={function () {
              navigate("/login");
            }}
          >
          </a>
        </form>
      </div>
    </div>
  );
}

export default Registro;
