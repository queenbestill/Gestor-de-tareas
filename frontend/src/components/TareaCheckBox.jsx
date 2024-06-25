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
import AnadirTareaButtonCheckbox from './AnadirTareaButtonCheckbox';

export default function CheckboxList({ tareas, handleToggle }) {
  // Función para agrupar tareas por categoría
  const categoriasUnicas = [...new Set(tareas.map((tarea) => tarea.categoria))];

    return (
      <>
        {categoriasUnicas.map((categoria, index) => (
          <div
            key={index} // Añadimos key aquí para categoría
            style={{
              width: "100vw",
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
                <h3 style={{ textAlign:'center'}}> {categoria}</h3>
                <List sx={{ width: "100%", bgcolor: "background.paper", borderRadius: "10px" }}>
                  {tareas
                    .filter((tarea) => tarea.categoria === categoria)
                    .map((tarea) => {
                      const labelId = `checkbox-list-label-${tarea.id}`;
  
                      return (
                        <ListItem
                          key={tarea.id} // Añadimos key aquí para cada tarea
                          secondaryAction={
                            <IconButton edge="end" aria-label="comments">
                              <DeleteIcon />
                            </IconButton>
                          }
                          disablePadding
                          style={{
                            borderBottom: "1px solid #e0e0e0",
                          }}
                        >
                          <ListItemButton
                            role={undefined}
                            onClick={() => handleToggle(tarea.id)} // Suponiendo que handleToggle necesita el ID de la tarea
                            dense
                          >
                            <ListItemIcon>
                              <Checkbox
                                edge="start"
                                checked={tarea.completed}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ "aria-labelledby": labelId }}
                              />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={tarea.titulo} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                </List>
                <AnadirTareaButtonCheckbox /> {/* Corrige el cierre de la etiqueta */}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }