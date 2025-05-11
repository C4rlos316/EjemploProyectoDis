import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme'; // Importa el tema
import Routes from './routes/Routes'; // Tus rutas

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes /> {/* Aquí se gestionan todas las rutas */}
      </Router>
    </ThemeProvider>
  );
}

export default App; // Corrige el export (debe ser App, no Routes)