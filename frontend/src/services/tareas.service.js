import { api } from "./config";

export async function obtenerMisTareas() {
  try {
    const {data} = await api.get(`/tarea`, {
        headers: {
            authorization: localStorage.getItem('token')
        }
    });
    return data;
  } catch (error) {
    console.error("Error al obtener las tareas:", error.message);
    throw error.message;
  }
}


export async function crearNuevaTarea(tareaData) {
  try {
    const response = await api.post('/tarea', tareaData, {
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    });
    console.log("se envia la tarea")
    return response.data; // Suponiendo que el backend devuelve los datos de la tarea creada
  } catch (error) {
    console.error("Error al crear la tarea:", error.message);
    throw error.message;
  }
}
