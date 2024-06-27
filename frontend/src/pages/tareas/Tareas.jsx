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
        setTareas(data);
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
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3, 
    slidesToScroll: 1,
    centerMode: false,
    
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


      <Slider {...sliderSettings}>
        {tareas.map((tarea, index) => (
          <div key={index} className="carousel-item">
            <div className="tarea-content">
              <div className="buttons"></div>
              <div className="tarea-list">
                <CheckboxList
                  tareas={[tarea]} 
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
