// components/TareaCheckBox.jsx

import React from "react";
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import AnadirTareaButtonCheckbox from './AnadirTareaButtonCheckbox';

export default function CheckboxList({ tareas, handleToggle, deleteTask }) {
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
                             <IconButton edge="end" aria-label="edit" style={{display: 'flex', padding: '10px', margin: '10px', width: '0px', borderRadius: '5px'}}>
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
                          <ListItemText id={labelId} primary={tarea.titulo} />
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
