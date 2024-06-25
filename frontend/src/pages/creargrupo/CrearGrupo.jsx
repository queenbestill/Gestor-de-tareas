import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CrearGrupo.css";

function CrearGrupo() {
  const [groupName, setGroupName] = useState("");
  const [stays, setStays] = useState([]);
  const areas = [
    "Salón",
    "Cocina",
    "Comedor",
    "Patio",
    "Habitación",
    "Dormitorio",
    "Estudio",
    "Garaje",
    "Baño",
    "Lavadero",
    "Baño de Servicio",
    "Baño en Suite",
    "Terraza",
    "Jardín",
    "Habitación 1",
    "Habitación 2",
    "Habitación 3",
    "Habitación 4",
    "Habitación 5",
    "Habitación 6",
    "Habitación 7",
    "Habitación 8",
    "Habitación 9",
  ];
  const [members, setMembers] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Group Name:", groupName);
    console.log("Stays:", stays);
    console.log("Members:", members);

    const response = await createGroup(groupName, stays, members);

    navigate("/listas");
  };

  return (
    <section className="container-crear-grupo">
      <div className="izquierda">
        <img src="../../../public/ilustracion3.jpg" alt="illustration" />
      </div>
      <div className="container-crear-grupo-titulo">
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
    </section>
  );
}

export default CrearGrupo;
