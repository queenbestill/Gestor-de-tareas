import * as React from 'react';
import Button from '@mui/material/Button';

export default function TodasMisTareasButton() { //OJO, NO SE PONERLO  QUE QUEDE PEQUEÑO A LA IZQUIERDA
  return (
    <div style={{ position: 'relative', top: 0, left: 0, margin: '10px' }}>
    <Button variant="outlined"
      onClick={() => { //OJO, CONECTAR CON EL MODAL DE CREAR TAREA
        alert('clicked');
      }}
    >
      Ver todas mis tareas
    </Button>
    </div>
  );
}