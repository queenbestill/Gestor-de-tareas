import React, { useState } from "react";
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import AnadirTareaButtonCheckbox from './AnadirTareaButtonCheckbox';
import { actualizarTarea } from "../services/tareas.service"

export default function CheckboxList({ tareas, handleToggle, deleteTask }) {
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  const handleEditClick = (id, titulo) => {
    setEditingId(id);
    setEditedTitle(titulo);
  };

  const handleSaveClick = async (id) => {
    try {
      await actualizarTarea(id, { titulo: editedTitle });
      setEditingId(null); // Finaliza el modo de edición
      // Aquí podrías actualizar el estado de las tareas en el componente padre si es necesario
    } catch (error) {
      console.error("Error al actualizar la tarea:", error.message);
    }
  };

  const categoriasUnicas = [...new Set(tareas.map((tarea) => tarea.categoria))];

  return (
    <>
      {categoriasUnicas.map((categoria, index) => (
        <div
          key={index}
          style={{
            width: "30vw",
            height: "80vh",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "15px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              boxSizing: "border-box",
              overflowY: "auto",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ textAlign: 'center' }}> {categoria}</h3>
              <List sx={{ width: "100%", bgcolor: "background.paper", borderRadius: "10px" }}>
                {tareas
                  .filter((tarea) => tarea.categoria === categoria)
                  .map((tarea) => {
                    const labelId = `checkbox-list-label-${tarea.id}`;

                    return (
                      <ListItem
                        key={tarea.id}
                        secondaryAction={
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            {editingId === tarea.id ? (
                              <>
                               
                                  <span style={{cursor:"pointer"}} onClick={() => handleSaveClick(tarea.id)} role="img" aria-label="save">💾</span>
                                
                              </>
                            ) : (
                              <>
                                <IconButton edge="end" aria-label="edit" style={{ display: 'flex', padding: '10px', margin: '10px', width: '0px', borderRadius: '5px' }} onClick={() => handleEditClick(tarea.id, tarea.titulo)}>
                                  <EditIcon />
                                </IconButton>
                                <IconButton
                                  edge="end"
                                  aria-label="delete"
                                  style={{ display: 'flex', padding: '10px', margin: '10px', width: '0px', borderRadius: '5px' }}
                                  onClick={() => deleteTask(tarea.id)} // Llama a deleteTask con el ID de la tarea
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </>
                            )}
                          </div>
                        }
                        disablePadding
                        style={{
                          borderBottom: "1px solid #e0e0e0",
                        }}
                      >
                        <ListItemButton
                          role={undefined}
                          onClick={() => handleToggle(tarea.id)} // Llama a handleToggle con el ID de la tarea
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={tarea.completed}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                              style={{ display: 'flex', padding: '10px', margin: '10px', width: '0px', borderRadius: '5px' }}
                            />
                          </ListItemIcon>
                          {editingId === tarea.id ? (
                            <TextField
                              value={editedTitle}
                              onChange={(e) => setEditedTitle(e.target.value)}
                              fullWidth
                            />
                          ) : (
                            <ListItemText id={labelId} primary={tarea.titulo} />
                          )}
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
              </List>
              <AnadirTareaButtonCheckbox />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
