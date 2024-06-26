import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Link, useNavigate } from "react-router-dom";

const pages = ["Ver todas las tareas", "Ver mis tareas"];

function AppBarResponsive() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (page) => {
    switch (page) {
      case "Ver todas las tareas":
        navigate("/tareas");
        break;
      case "Ver mis tareas":
        navigate("/mistareas");
        break;
      default:
        break;
    }
    handleClose();
  };

  const handleLogout = () => {
    // Aquí iría la lógica para cerrar sesión
    navigate("/login");
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Link
          to="/"
          style={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src="/logo.png"
            alt="EasyTask Logo"
            style={{ height: 40, marginRight: 10 }}
          />
          <Typography variant="h6" noWrap>
            EasyTask
          </Typography>
        </Link>
        <div>
          <IconButton
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpen}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => handleMenuClick(page)}>
                {page}
              </MenuItem>
            ))}
            <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarResponsive;
