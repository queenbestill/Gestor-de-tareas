import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import {toast} from 'react-hot-toast'
import { crearNuevaTarea } from '../../services/tareas.service'; // Importa la función para crear nueva tarea

export default function CrearTareaModal({ open, onClose }) {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [prioridad, setPrioridad] = useState('');
  const [estado, setEstado] = useState('');

  const handleCrearTarea = async () => {
    try {
      const nuevaTarea = {
        titulo,
        categoria,
        fecha_vencimiento: fechaVencimiento,
        prioridad,
        estado,
      };

      await crearNuevaTarea(nuevaTarea);

      onClose();
      toast("Tarea creada satisfactoriamente");
    } catch (error) {
      console.error("Error al crear la tarea:", error.message);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <div style={{ padding: '20px'}}>
        <h2 style={{ textAlign: 'center' }}> Añade una tarea a tu lista 📋</h2>
        <TextField
          label="Título"
          fullWidth
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Estancia</InputLabel>
          <Select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            fullWidth
          >
            <MenuItem value="Cocina 🍳">Cocina 🍳</MenuItem>
            <MenuItem value="Dormitorio 🛏️">Dormitorio 🛏️</MenuItem>
            <MenuItem value="Salón 🛋️">Salón 🛋️</MenuItem>
            <MenuItem value="Baño 🚽">Baño 🚽</MenuItem>
            <MenuItem value="Aseo 🚿">Aseo 🚿</MenuItem>
            <MenuItem value="Patio 🎾">Patio 🎾</MenuItem>
            <MenuItem value="Estudio 📚">Estudio 📚</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Fecha de Vencimiento"
          type="date"
          fullWidth
          value={fechaVencimiento}
          onChange={(e) => setFechaVencimiento(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Prioridad</InputLabel>
          <Select
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value)}
            fullWidth
          >
            <MenuItem value="alta">Alta</MenuItem>
            <MenuItem value="media">Media</MenuItem>
            <MenuItem value="baja">Baja</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Estado</InputLabel>
          <Select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            fullWidth
          >
            <MenuItem value="pendiente">Pendiente</MenuItem>
            <MenuItem value="en_proceso">En proceso</MenuItem>
            <MenuItem value="completada">Completada</MenuItem>
          </Select>
        </FormControl>
        <Button variant="outlined" onClick={onClose} style={{ marginRight: '10px', borderRadius: '8px',  borderColor: '#00464d', color: '#00464d', }}>
          Cancelar
        </Button>
        <Button variant="contained" onClick={handleCrearTarea} style={{ backgroundColor: '#00464d', color: 'white', borderRadius: '8px' }}>
          Crear
        </Button>
      </div>
    </Dialog>
  );
}
