import React, { useContext, useState } from "react";
import '../login/Login.css'
import { login } from "../../services/auth.service";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const{ user, setUser} = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    const response = await login(email, password)

    localStorage.setItem('token', response.token)
    setUser(response.user)
    
    navigate('/home')
    console.log(user)

  };

  return (
    <header className="container">
      <div className="izquierda">
        <img src="/public/ilustracion3.jpg" alt="ilustration" />
      </div>
      <div>
        <div className="login-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Login;
