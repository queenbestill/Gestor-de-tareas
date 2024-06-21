import React from 'react';
import CheckboxList from "../../components/TareaCheckBox";
import NuevaTareaButton from "../../components/NuevaTareaButton";
import TodasMisTareasButton from "../../components/VerTodasLasTareasButton";
import TareasFamiliaButton from "../../components/TareasFamiliaButton";
// import { useNavigate } from "react-router-dom";

function Tareas() {
  return (
    <div id="container" style={{ padding: '10px' }}>
    <div style={{ display: 'flex', marginBottom: '10px' }}>
      <NuevaTareaButton />
      <TodasMisTareasButton />
      <TareasFamiliaButton />
    </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <CheckboxList />
        <CheckboxList />
        <CheckboxList />
      </div>
    </div>
  );
}

export default Tareas;