

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { Box, Typography, TextField, Button,LinearProgress } from '@mui/material';
import { Alert } from '@mui/material';


function Registro() {
  const navigate = useNavigate(); // Crea el hook para navegación

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };
  const handleChangeCorreo = (event) => {
    setCorreo(event.target.value);
  };
  const handleChangeContraseña = (event) => {
    setContrasena(event.target.value);
  };
  const handleSubmit = () => {
    setError(""); // Reinicia el mensaje de error
    setLoading(true);
    if (nombre === "" || correo === "") {
      setError("Por favor, completa todos los campos");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      setError("Por favor, ingresa un correo electrónico válido");
      setLoading(false);
      return;
    }

    if (contrasena.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      navigate('/registro');
    }, 2000);
  };

  // Redirigir a la página de Inicio
  const irAInicio = () => {
    navigate('/inicio'); // Aquí usas el navigate para redirigir
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
        <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
          Registrate
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2, width: '100%', maxWidth: 300 }}>
            {error}
          </Alert>
        )}



        <TextField
          label="Nombre"
          value={nombre}
          onChange={handleChangeNombre}
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{
            maxWidth: 300,
            '& label.Mui-focused': {
              color: 'red', // color del label enfocado
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'red', // borde normal
              },
              '&.Mui-focused fieldset': {
                borderColor: 'red', // borde cuando enfocado
              },
            },
          }}
        />

        <TextField
          label="Correo"
          value={correo}
          onChange={handleChangeCorreo}
          margin="normal"
          fullWidth
          sx={{
            maxWidth: 300,
            '& label.Mui-focused': {
              color: 'red', // color del label enfocado
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'red', // borde normal
              },
              '&.Mui-focused fieldset': {
                borderColor: 'red', // borde cuando enfocado
              },
            },
          }}
        />

        <TextField
          label="Contraseña"
          type="password"
          value={contrasena}
          onChange={handleChangeContraseña}
          margin="normal"
          fullWidth
          sx={{
            maxWidth: 300,
            '& label.Mui-focused': {
              color: 'red', // color del label enfocado
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'red', // borde normal
              },
              '&.Mui-focused fieldset': {
                borderColor: 'red', // borde cuando enfocado
              },
            },
          }}
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
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
          }}
        >
          Registrate
        </Button>

        <Typography variant="body2" sx={{ mt: 2, color: "gray" }}>
          ¿Ya tienes cuenta?{" "}
          <Button
            variant="text"
            size="small"
            sx={{ textTransform: "none", padding: 0, minWidth: 0 }}
            onClick={irAInicio} // Cambié la lógica aquí para usar navigate
          >
            Iniciar Sesion
          </Button>
          {/* Barra de progreso debajo del botón */}
        {loading && (
          <LinearProgress
            sx={{ mt: 2, width: '100%', maxWidth: 300 }}
            color="primary"
          />
        )}
        </Typography>
      </Box>
    </Box>
  );
}

export default Registro;

