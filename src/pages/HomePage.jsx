import React from 'react'
import CarAnimation from '../components/Main/Main';
import { Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import CheckIcon from "@mui/icons-material/Check";


 const HomePage = () => {
  return (
    <Container sx={{ p: "15px" }}>
      <Typography variant="h4" align="center" sx={{ mb: "15px" }}>
        Are you looking for convenient and reliable transportation in Ukraine?
      </Typography>
      <Grid container spacing={3} sx={{ mt: "15px" }}>
        <Grid item xs={12} md={6}>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Wide selection of high-quality vehicles." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Flexible rental options to suit your needs." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Competitive pricing and special offers." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="24/7 customer support for a hassle-free experience." />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Convenient pick-up and drop-off locations throughout Ukraine." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Easy online booking and reservation management." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Safe and well-maintained vehicles for your peace of mind." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Explore Ukraine at your own pace and on your own schedule." />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <CarAnimation />
    </Container>
  );
}

export default HomePage;
