import { api } from "./config";

export async function crearGrupo(unidadFamiliarData) {
  try {
    const response = await api.post("/unidadfamiliar", unidadFamiliarData, {
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    console.log("se envia el grupo familiar");
    return response.data; // Suponiendo que el backend devuelve los datos de la tarea creada
  } catch (error) {
    console.error("Error al crear la tarea:", error.message);
    throw error.message;
  }
}
