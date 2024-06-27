import * as React from 'react';
import Button from '@mui/material/Button';

export default function AnadirTareaButton() { 
  return (
    <div style={{ position: 'relative', top: 0, left: 0, margin: '10px' }}>
      <Button
        variant="outlined"
        onClick={() => { //OJO, CONECTAR CON EL MODAL DE CREAR TAREA CON EL CAMPO ESTANCIA PRECUMPLIMENTADO
          alert('clicked');
        }}
        style={{
          width: '200px',
          height: '50px', 
          backgroundColor: '#00464d', 
          borderRadius: '10px', 
          color: 'white', 
          border: 'none', 
        }}
      >
        Añadir tarea
      </Button>
    </div>
  );
}