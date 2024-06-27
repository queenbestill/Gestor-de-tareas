import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CheckboxList from "../../components/TareaCheckBox";
import NuevaTareaButton from "../../components/NuevaTareaButton";
import TodasMisTareasButton from "../../components/VerTodasLasTareasButton";
import { obtenerMisTareas, borrarTarea } from "../../services/tareas.service";
import "./Tareas.css";

function Tareas() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    async function fetchTareas() {
      try {
        const data = await obtenerMisTareas();
        setTareas(data); // Asigna los datos obtenidos de la API a 'tareas'
      } catch (error) {
        console.error("Error fetching tareas:", error);
      }
    }
    fetchTareas();
  }, []);

  const handleToggle = (id) => {
    const newTareas = tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completed: !tarea.completed };
      }
      return tarea;
    });
    setTareas(newTareas);
  };

  const handleDelete = async (id) => {
    try {
      await borrarTarea(id);
      setTareas(tareas.filter((tarea) => tarea.id !== id));
      console.log("Tarea eliminada con éxito");
    } catch (error) {
      console.error("Error al intentar eliminar la tarea:", error);
      // Manejar el error de eliminación de la tarea según sea necesario
    }
  };

  // Configuración del slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostrar 3 slides al mismo tiempo
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{
        padding: "10px",
        backgroundImage: 'url("/FONDO.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <NuevaTareaButton />
        <TodasMisTareasButton />
      </div>

      {/* Slider de tareas */}
      <Slider {...sliderSettings}>
        {tareas.map((tarea, index) => (
          <div key={index} className="carousel-item">
            <div className="tarea-content">
              <div className="buttons"></div>
              <div className="tarea-list">
                <CheckboxList
                  tareas={[tarea]} // Asegúrate de pasar solo una tarea a CheckboxList
                  handleToggle={handleToggle}
                  deleteTask={handleDelete}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Tareas;
