
import { Navigate, Route, Routes } from "react-router-dom";
import './App.module.css';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { Catalog } from './pages/CatalogPage';
import { Favorites } from './pages/FavoritesPage';
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; 

function App() {
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
