import { createTheme } from '@mui/material';

// Definición del tema global para la aplicación
export const theme = createTheme({
  palette: {
    // Colores principales de la paleta
    primary: {
      main: '#00B8D4', // Azul neón: usado para botones principales, enlaces, AppBar, y elementos destacados
    },
    secondary: {
      main: '#AB47BC', // Púrpura neón: para acentos como Badge, Chip, o botones secundarios
    },
    background: {
      default: '#212121', // Gris oscuro: fondo principal de las pantallas
      paper: '#424242', // Gris medio: fondo para Card, Modal, Dialog
    },
    text: {
      primary: '#E0E0E0', // Blanco suave: para títulos (Typography) y texto principal
      secondary: '#B0B0B0', // Gris claro: para subtítulos o texto secundario (ej. géneros en GameCard)
      disabled: '#757575', // Gris apagado: para texto o botones deshabilitados
    },
    error: {
      main: '#FF5252', // Rojo neón: para mensajes de error (Snackbar, FormHelperText)
    },
    success: {
      main: '#00C853', // Verde neón: para mensajes de éxito (Snackbar, Badge de "Activo")
    },
    warning: {
      main: '#FFAB00', // Naranja neón: para alertas intermedias (ej. advertencias en Snackbar)
    },
    action: {
      disabled: '#757575', // Gris apagado: color de fondo o texto para elementos deshabilitados (ej. botones)
    },
  },
  components: {
    // Personalización de estilos por componente de Material UI
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#00B8D4', // Asegura que el AppBar (toolbar) use el color primario (azul neón)
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#424242', // Fondo gris medio para las tarjetas (GameCard, modales, etc.)
          border: '1px solid #616161', // Borde gris oscuro para las tarjetas
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          // Estilo para botones "contained" (rellenos)
          '&.MuiButton-contained': {
            backgroundColor: '#00B8D4', // Fondo azul neón para botones principales
            color: '#E0E0E0', // Texto blanco suave para contraste
          },
          // Estilo para botones "outlined" (con borde)
          '&.MuiButton-outlined': {
            borderColor: '#AB47BC', // Borde púrpura neón para botones secundarios
            color: '#E0E0E0', // Texto blanco suave
          },
          // Estilo para botones "text" (sin fondo ni borde)
          '&.MuiButton-text': {
            color: '#E0E0E0', // Texto blanco suave para botones de texto (ej. filtros de plataforma)
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#E0E0E0', // Color blanco suave por defecto para todo el texto (títulos, párrafos, etc.)
        },
      },
    },
  },
});