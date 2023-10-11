import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import CarRentalIcon from "@mui/icons-material/CarRental";
import { NavLink } from 'react-router-dom';
import css from './Header.module.css'

export const Header = () => {

   
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="static"
          component="nav"
          sx={{ backgroundColor: "#3470FF", borderRadius: "12px" }}
        >         
          <Toolbar>
            <IconButton color="inherit">
              <CarRentalIcon />
            </IconButton>
            <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
              Rent-a-Ride
            </Typography>
            <Box>
              <NavLink to="/" className={css.Link}>
                Home
              </NavLink>
              <NavLink to="/catalog" className={css.Link}>
                Catalog
              </NavLink>
              <NavLink to="/favorites" className={css.Link}>
                Favorites
              </NavLink>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
