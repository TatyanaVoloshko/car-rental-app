import { Navigate, Route, Routes } from "react-router-dom";
import './App.module.css';
import { Layout } from './components/Layout/Layout';
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; 
import React, { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCatalogs } from "./redux/operations";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Catalog = lazy(() => import('./pages/CatalogPage'));
const Favorites = lazy(() => import('./pages/FavoritesPage'));


function App() {
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(fetchCatalogs());
   }, [dispatch]);
  
  return (
    <ThemeProvider theme={theme}>
      <Container style={{ maxWidth: "100%" }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
