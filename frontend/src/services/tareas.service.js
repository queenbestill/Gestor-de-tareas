import { api } from "./config";

export async function obtenerMisTareas() {
  try {
    const {data} = await api.get(`/tarea/mistareas`, {
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
