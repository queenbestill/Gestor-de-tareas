import React, { useState, useEffect } from "react";
import { obtenerMisTareas } from "../../services/tareas.service";
import "./MisTareas.css"; 

const Tareas = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState({
    prioridad: "todas",
    estancia: "todas",
    vence: "todas",
  });

  useEffect(() => {
    async function getMyTasks() {
      try {
        const response = await obtenerMisTareas(localStorage.userId);
        setTasks(response);
      } catch (error) {
        console.error("Error al obtener las tareas:", error);
      }
    }

    getMyTasks();
  }, []);

  const toggleComplete = async (id) => {
    try {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, completada: !task.completada } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completada: !task.completada } : task
        )
      );
    }
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, titulo: newText } : task
      )
    );
  };

  const handleFilterChange = (type, value) => {
    setFilter({ ...filter, [type]: value });
  };

  const filteredTasks = tasks.filter((task) => {
    const meetsPrioridad =
      filter.prioridad === "todas" || filter.prioridad === task.prioridad;
    const meetsEstancia =
      filter.estancia === "todas" || filter.estancia === task.categoria;
    const meetsVence =
      filter.vence === "todas" ||
      (filter.vence === "hoy" &&
        new Date(task.fecha_vencimiento).toDateString() ===
          new Date().toDateString()) ||
      (filter.vence === "semana" &&
        new Date(task.fecha_vencimiento) <=
          new Date(new Date().setDate(new Date().getDate() + 7))) ||
      (filter.vence === "dosSemanas" &&
        new Date(task.fecha_vencimiento) <=
          new Date(new Date().setDate(new Date().getDate() + 14)));

    return meetsPrioridad && meetsEstancia && meetsVence;
  });

  return (
    <div className="task-container">
      <h1>Mis Tareas</h1>
      <button
        onClick={() => {
          /* aquí conectar al modal cuando lo tengamos */
        }}
      >
        Crear nueva tarea
      </button>
      <div className="filters"></div>
      <table className="task-table">
        <thead>
          <tr>
            <th></th>
            <th className="taskStyle"></th>
            <th>
              {" "}
              <select
                onChange={(e) =>
                  handleFilterChange("prioridad", e.target.value)
                }
              >
                <option value="todas">Todas las prioridades</option>
                <option value="alta">Alta</option>
                <option value="media">Media</option>
                <option value="baja">Baja</option>
              </select>
            </th>
            <th>
              <select
                onChange={(e) => handleFilterChange("estancia", e.target.value)}
              >
                <option value="todas">Todas las estancias</option>
                <option value="salón">Salón</option>
                <option value="cocina">Cocina</option>
                <option value="baño">Baño</option>
                <option value="dormitorio">Dormitorio</option>
                <option value="patio">Patio</option>
                <option value="garage">Garage</option>
              </select>
            </th>
            <th>
              <select
                onChange={(e) => handleFilterChange("vence", e.target.value)}
              >
                <option value="todas">Todas las fechas</option>
                <option value="hoy">Hoy</option>
                <option value="semana">En una semana</option>
                <option value="dosSemanas">En dos semanas</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr className={task.completada ? "completed" : ""} key={task.id}>
              <td>
                <input
                  type="checkbox"
                  checked={task.completada}
                  onChange={() => toggleComplete(task.id)}
                />
              </td>
              <td
                onClick={() =>
                  editTask(task.id, prompt("Edit Task", task.titulo))
                }
                style={{ cursor: "pointer" }}
              >
                {task.titulo}
              </td>
              <td>{task.prioridad}</td>
              <td>{task.categoria}</td>
              <td>{task.fecha_vencimiento}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="back"
        onClick={() => (window.location.href = "/listas")}
      >
        Volver
      </button>
    </div>
  );
};

export default Tareas;
