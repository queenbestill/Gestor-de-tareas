import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import { Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];

function AppBarResponsive() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const navigate = useNavigate()
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
   
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const isLoggedIn = Boolean(localStorage.getItem('token'));
  
 
  
    return (
      <AppBar position="static" sx={{background:'black'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters> 
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Easy Task
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              
            </Typography>

            {isLoggedIn ? (
            <>
            
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems:'center', justifyContent: 'center', gap:'20px'} }}>

                  <AddCircleIcon sx={{height: '50px', width: '40px'}}/>
               
                  <Typography> Usuario</Typography>

              
              </Box>
    
              <PowerSettingsNewIcon sx={{color: 'red', width: '50px', ":hover": {bgcolor:'red-500'}}}/>
            
            </>
            )
            : (
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1 }}>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button
                      key={'login'}
                      onClick={function(){ navigate('/login')}}
                      sx={{ my: 2, alignSelf: 'end', width: '200px', bgcolor: 'white', color: 'black', border: 'black', ":hover": { bgcolor: 'yellow' } }}
                  >
                      Iniciar sesión
                  </Button>
              </Box>
          )
          
          }

           
          </Toolbar>
        </Container>
      </AppBar>
    );

}

export default AppBarResponsive