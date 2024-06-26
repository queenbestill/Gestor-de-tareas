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
    console.error("No estas logueado", error.message);
    throw error.message;
  }
}

export async function borrarTarea(id) {
  try {
    const response = await api.delete(`/tarea/${id}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    });
    console.log("Tarea eliminada correctamente");
    return response.data; // Suponiendo que el backend devuelve algún tipo de confirmación de eliminación
  } catch (error) {
    console.error("Error al eliminar la tarea:", error.message);
    throw error.message;
  }
}
