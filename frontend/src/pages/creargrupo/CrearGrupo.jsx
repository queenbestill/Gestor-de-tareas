import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CrearGrupo.css";
import { crearGrupo } from "../../services/unidadFamiliar.service";

function CrearGrupo() {
  const [groupName, setGroupName] = useState("");
  const [stays, setStays] = useState([]);
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState("");

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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Group Name:", groupName);
    console.log("Stays:", stays);
    console.log("Members:", members);

    const response = await crearGrupo({
      nombre: groupName,
      estancias: stays,
      miembros: members,
    });
    console.log("Response:", response);

    navigate("/listas");
  };

  const handleStaysChange = (e) => {
    const options = e.target.options;
    const selectedStays = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedStays.push(options[i].value);
      }
    }
    setStays(selectedStays);
  };

  const handleNewMemberChange = (e) => {
    setNewMember(e.target.value);
  };

  const handleAddMember = () => {
    if (newMember.trim() !== "") {
      setMembers([...members, newMember.trim()]);
      setNewMember("");
    }
  };

  const handleRemoveMember = (index) => {
    const updatedMembers = members.filter((_, i) => i !== index);
    setMembers(updatedMembers);
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
            <label htmlFor="stays">Estancias <span className="span-de-agregar-estancia">Presiona CTRL para agregar más de una</span></label>
            <select
              id="stays"
              multiple
              value={stays}
              onChange={handleStaysChange}
              required
            >
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="members">Miembros</label>
            <input
              type="text"
              id="newMember"
              value={newMember}
              onChange={handleNewMemberChange}
            />
            <button type="button" onClick={handleAddMember}>
              Agregar Miembro
            </button>
            <ul>
              {members.map((member, index) => (
                <li key={index}>
                  {member}{" "}
                  <button
                    type="button"
                    onClick={() => handleRemoveMember(index)}
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button type="submit">Crear grupo</button>
        </form>
      </div>
    </section>
  );
}

export default CrearGrupo;
