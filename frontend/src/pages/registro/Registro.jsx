import { useContext, useState } from "react";
import { signup } from '../../services/auth.service'
import "./Registro.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

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
          const response = await signup(email, fullname, password);
          setErrs("");
          console.log(response)
          localStorage.setItem('token', response.token)
          alert("¡Genial! Ya puedes empezar a ordenar tus tareas");
          navigate('/tareas')
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
    <div className="card">
      <h1 style={{ color: '#00464d', marginTop: '7%'}}>¡Estás a un clic ordenar tus tareas de la forma más óptima!</h1>
      <form className="form">
        {
          <input
            /* className="email" */
            placeholder="¿Cuál es tu email?"
            type="email"
            onChange={function (event) {
              setEmail(event.target.value);
            }}
          />
        }
        <input
          placeholder="¿Cómo te llamas?"
          onChange={function (event) {
            setFullname(event.target.value);
          }}
        />
        <input
          placeholder="Contraseña"
          type="password"
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

        <button className="registro" onClick={handleClick}>
          Registrarme
        </button>

        <p>
          Ya tengo una cuenta.{" "}
          <span
            style={{ cursor: "pointer", color: "blue" }}
            
            onClick={function () {
              navigate("/login");
            }}
          >
            Acceder
          </span>
        </p>
      </form>
    </div>
  );
}

export default Registro;
