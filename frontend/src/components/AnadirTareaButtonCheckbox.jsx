import * as React from 'react';
import Button from '@mui/material/Button';
import CrearTareaModal from './CrearTarea/CrearTarea'; 

export default function AnadirTareaButtonCheckbox() { 
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Button onClick={handleOpenModal} style={{color: '#00464d', textAlign: 'center', textTransform: 'none' }}>
    ✅ Añadir una tarea nueva
    </Button>
    <CrearTareaModal open={openModal} onClose={handleCloseModal} />
  </div>
);
}