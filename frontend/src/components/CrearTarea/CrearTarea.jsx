import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
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

      // Llama a la función para crear la nueva tarea en el backend
      await crearNuevaTarea(nuevaTarea);

      // Cierra el modal después de crear la tarea
      onClose();
    } catch (error) {
      console.error("Error al crear la tarea:", error.message);
      // Aquí podrías manejar el error mostrando un mensaje al usuario, etc.
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <div style={{ padding: "20px" }}>
        <h2>Crear Nueva Tarea</h2>
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
            <MenuItem value="cocina">Cocina</MenuItem>
            <MenuItem value="dormitorio">Dormitorio</MenuItem>
            <MenuItem value="salon">Salón</MenuItem>
            <MenuItem value="bano">Baño</MenuItem>
            <MenuItem value="aseo">Aseo</MenuItem>
            <MenuItem value="patio">Patio</MenuItem>
            <MenuItem value="Comedor">Comedor</MenuItem>
            <MenuItem value="Garaje">Garaje</MenuItem>
            <MenuItem value="Lavadero">Lavadero</MenuItem>
            <MenuItem value="Baño de Servicio">Baño de Servicio</MenuItem>
            <MenuItem value="Baño en Suite">Baño en Suite</MenuItem>
            <MenuItem value="Terraza">Terraza</MenuItem>
            <MenuItem value="Jardín">Jardín</MenuItem>
            <MenuItem value="Habitación 1">Habitación 1</MenuItem>
            <MenuItem value="Habitación 2">Habitación 2</MenuItem>
            <MenuItem value="Habitación 3">Habitación 3</MenuItem>
            <MenuItem value="Habitación 4">Habitación 4</MenuItem>
            <MenuItem value="Habitación 5">Habitación 5</MenuItem>
            <MenuItem value="Habitación 6">Habitación 6</MenuItem>
            <MenuItem value="Habitación 7">Habitación 7</MenuItem>
            <MenuItem value="Habitación 8">Habitación 8</MenuItem>
            <MenuItem value="Habitación 9">Habitación 9</MenuItem>
            <MenuItem value="Habitación 10">Habitación 10</MenuItem>
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
        <Button
          variant="outlined"
          onClick={onClose}
          style={{ marginRight: "10px" }}
        >
          Cancelar
        </Button>
        <Button variant="contained" onClick={handleCrearTarea}>
          Crear
        </Button>
      </div>
    </Dialog>
  );
}
