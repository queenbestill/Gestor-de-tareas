// components/Tareas.jsx

import React, { useContext, useEffect, useState } from 'react';
import CheckboxList from "../../components/TareaCheckBox";
import NuevaTareaButton from "../../components/NuevaTareaButton";
import TodasMisTareasButton from "../../components/VerTodasLasTareasButton";
// import TareasFamiliaButton from "../../components/TareasFamiliaButton"; // Puedes descomentar si es necesario

import { obtenerMisTareas, borrarTarea } from '../../services/tareas.service';
import { UserContext } from '../../context/userContext';

function Tareas() {
  const [tareas, setTareas] = useState([]);
  const [openModal, setOpenModal] = React.useState(false);



const handleOpenModal = () => {
  setOpenModal(true);
};

const handleCloseModal = () => {
  setOpenModal(false);
};

  useEffect(() => {
    async function fetchTareas() {
      try {
        const data = await obtenerMisTareas();
        setTareas(data); // Asigna los datos obtenidos de la API a 'tareas'
      } catch (error) {
        console.error('Error fetching tareas:', error);
      }
    }
    fetchTareas();
  }, []);

  const handleToggle = (id) => {
    const newTareas = tareas.map(tarea => {
      if (tarea.id === id) {
        return { ...tarea, completed: !tarea.completed };
      }
      return tarea;
    });
    setTareas(newTareas);
  };

  const handleDelete = async (id) => {
    try {
      await borrarTarea(id);
      setTareas(tareas.filter(tarea => tarea.id !== id));
      console.log("Tarea eliminada con éxito");
    } catch (error) {
      console.error("Error al intentar eliminar la tarea:", error);
      // Manejar el error de eliminación de la tarea según sea necesario
    }
  };

  return (
    <div style={{ padding: '10px', backgroundImage: 'url("/FONDO.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <NuevaTareaButton />
        <TodasMisTareasButton />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px', marginLeft: ' 40px' }}>
        <CheckboxList tareas={tareas} handleToggle={handleToggle} deleteTask={handleDelete}/>
      </div>
    </div>
  );
}

export default Tareas;
