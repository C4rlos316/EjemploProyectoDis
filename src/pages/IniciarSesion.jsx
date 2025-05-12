import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { Box, Typography, TextField, Button,CircularProgress } from '@mui/material';

import { Alert } from '@mui/material';

function IniciarSesion() {
  const navigate = useNavigate(); // Crea el hook para navegación

  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(""); // Estado para el mensaje de error
  const [loading, setLoading] = useState(false); // Estado para el botón de carga

 
  const handleChangeCorreo = (event) => {
    setCorreo(event.target.value);
  };

  const handleChangeContraseña = (event) => {
    setContrasena(event.target.value);
  };

  // Manejo del envío del formulario
  const handleSubmit = () => {
    setError(""); // Reinicia el mensaje de error
    setLoading(true); // Activar el estado de carga
    if (contrasena === "" || correo === "") {
      setError("Por favor, completa todos los campos");
      setLoading(false); // Desactivar carga si hay error
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      setError("Por favor, ingresa un correo electrónico válido");
      setLoading(false); // Desactivar carga si hay error
      return;
    }

    if (contrasena.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      setLoading(false); // Desactivar carga si hay error
      return;
    }

    // Simular retraso de 2 segundos
    setTimeout(() => {
      setLoading(false); // Desactivar carga después de 2 segundos
      navigate('/pagina-principal'); // Redirigir a la página de Registro
    }, 2000); // 2000 ms = 2 segundos
  };

  // Redirigir a la página de Registro
  const irARegistro = () => {
    navigate('/registro'); // Aquí usas el navigate para redirigir
  };

  return (
    <Box
      display="flex"
      bgcolor="#000"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Box
        borderRadius={4}
        bgcolor="#fff"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={6}
        boxShadow={4}
         sx={{
          width:300,
        }}
      >
        <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: "#000" }}>
          Iniciar Sesión
        </Typography>


        {/* Mostrar el Alert si hay un error */}
        {error && (
          <Alert severity="error" sx={{ mb: 2, width: '100%', maxWidth: 300 }}>
            {error}
          </Alert>
        )}

        <TextField
          label="Correo"
          value={correo}
          onChange={handleChangeCorreo}
          margin="normal"
          fullWidth
          sx={{ maxWidth: 300 }}
        />

        <TextField
          label="Contraseña"
          type="password"
          value={contrasena}
          onChange={handleChangeContraseña}
          margin="normal"
          fullWidth
          sx={{ maxWidth: 300 }}
        />

        <Button
          variant="contained"
          disabled={loading} // Deshabilitar el botón mientras está cargando
          onClick={handleSubmit}
          sx={{
            mt: 3,
            width: "100%",
            maxWidth: 300,
            borderRadius: 2,
            backgroundColor: "#1AE5E5",
            color: "#000",
            fontWeight: "bold",
            boxShadow: 6,
            textTransform: "none",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {loading ?(
  <CircularProgress size={24} sx={{ color: '#FFF' }} />
) : (
  'Iniciar sesión'
)}
        </Button>

        <Typography variant="body2" sx={{ mt: 2, color: "black" }}>
          ¿Aún no tienes cuenta?{" "}
          <Button
            variant="text"
            size="small"
            sx={{ textTransform: "none", padding: 0, minWidth: 0,color: "blue" }}
            onClick={irARegistro} 
          >
            Regístrate
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}

export default IniciarSesion;
