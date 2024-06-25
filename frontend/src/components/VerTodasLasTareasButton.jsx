import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function TodasMisTareasButton() {
  const navigate = useNavigate();
  return (
    <div style={{ position: 'relative', top: 0, left: 0, margin: '10px' }}>
    <Button variant="outlined"
      onClick={() => {
        navigate('/mistareas');
      }}
      style={{
        width: '200px',
        height: '50px', 
        backgroundColor: 'green', 
        borderRadius: '10px', 
        color: 'white', 
        border: 'none' 
      }}
    >
      Todas mis tareas
    </Button>
    </div>
  );
}