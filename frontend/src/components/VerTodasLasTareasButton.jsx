import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import MisTareas from "../pages/MisTareas/MisTareas";
export default function TodasMisTareasButton() {
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div style={{ position: "relative", top: 0, left: 0, margin: "10px" }}>
      <Button
        variant="outlined"
        onClick={handleOpenModal}
        style={{
          width: "200px",
          height: "50px",
          backgroundColor: "#00464d",
          borderRadius: "10px",
          color: "white",
          border: "none",
        }}
      >
        Todas mis tareas
      </Button>
      <MisTareas open={openModal} onClose={handleCloseModal} />
    </div>
  );
}
