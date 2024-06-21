import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../listas/Listas.css";
import { UserContext } from "../../context/userContext";

function CrearGrupo() {
  const [groupName, setGroupName] = useState("");
  const [stays, setStays] = useState("");
  const [members, setMembers] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Group Name:", groupName);
    console.log("Stays:", stays);
    console.log("Members:", members);
    navigate("/home");
    console.log(user);
  };

  return (
    <div>
      <header className="container">
        <div className="izquierda">
          <img src="/frontend/public/ilustracion3.jpg" alt="illustration" />
        </div>
        <div>
          <div className="login-container">
            <h1>Crea tu grupo familiar</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="groupName">Nombre del Grupo</label>
                <input
                  type="text"
                  id="groupName"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="stays">Estancias</label>
                <input
                  type="text"
                  id="stays"
                  value={stays}
                  onChange={(e) => setStays(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="members">Miembros</label>
                <input
                  type="text"
                  id="members"
                  value={members}
                  onChange={(e) => setMembers(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Crear grupo</button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default CrearGrupo;
