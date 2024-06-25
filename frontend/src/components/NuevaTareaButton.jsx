import * as React from 'react';
import Button from '@mui/material/Button';
import CrearTareaModal from './CrearTarea/CrearTarea'; 

export default function NuevaTareaButton() { 
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div style={{ position: 'relative', top: 0, left: 0, margin: '10px' }}>
      <Button
        variant="outlined"
        onClick={handleOpenModal}
        style={{
          width: '200px',
          height: '50px', 
          backgroundColor: 'green', 
          borderRadius: '10px', 
          color: 'white', 
          border: 'none', 
        }}
      >
        Crea una nueva tarea
      </Button>

      {/* Renderiza el modal */}
      <CrearTareaModal open={openModal} onClose={handleCloseModal} />
    </div>
  );
}
