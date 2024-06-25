import React, { useEffect, useState } from 'react';
import CheckboxList from "../../components/TareaCheckBox";
import NuevaTareaButton from "../../components/NuevaTareaButton";
import TodasMisTareasButton from "../../components/VerTodasLasTareasButton";
import TareasFamiliaButton from "../../components/TareasFamiliaButton";
import { obtenerMisTareas } from '../../services/tareas.service'; // Asegúrate de importar la función correcta

function Tareas() {
  const [tareas, setTareas] = useState([]);

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

  const handleToggle = (index) => {
    const newTareas = [...tareas];
    newTareas[index].completed = !newTareas[index].completed;
    setTareas(newTareas);
  };

  return (
    <div style={{ padding: '10px' }}>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <NuevaTareaButton />
        <TodasMisTareasButton />
        <TareasFamiliaButton />
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <CheckboxList tareas={tareas} handleToggle={handleToggle} />
      </div>
    </div>
  );
}

export default Tareas;
