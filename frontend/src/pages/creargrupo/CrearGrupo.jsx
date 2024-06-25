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
    <div className="card">
      <h1>Crea tu grupo familiar</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Nombre del Grupo"
          type="text"
          id="groupName"
          value={groupName}
          onChange={(event) => setGroupName(event.target.value)}
          required
        />
        <input
          placeholder="Estancias"
          type="text"
          id="stays"
          value={stays}
          onChange={(event) => setStays(event.target.value)}
          required
        />
        <input
          placeholder="Miembros"
          type="text"
          id="members"
          value={members}
          onChange={(event) => setMembers(event.target.value)}
          required
        />
        <button className="registro" type="submit">
          Crear grupo
        </button>
      </form>
    </div>
  );
}

export default CrearGrupo;
