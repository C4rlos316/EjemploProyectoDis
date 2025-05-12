import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  Box, 
  Typography, 
  CardMedia, 
  Rating 
} from '@mui/material';

const GameModal = ({ open, handleClose, game }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>{game.name}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* Imagen del juego */}
          <CardMedia
            component="img"
            image={game.image}
            alt={game.name}
            sx={{ width: 300, height: 200, objectFit: 'cover' }}
          />
          {/* Información del juego */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body2" color="text.secondary">
              {`Year: 2020 - 2021`} {/*  datos del juego si los tienes */}
            </Typography>
            <Typography variant="body1" >
              {`Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.`} {/* Ejemplo de descripción */}
            </Typography>
            {/* Calificación */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Rating value={4.5} precision={0.5} readOnly />
              <Typography variant="body2">
                {`4.5 ★ (${1000} reviews)`} {/* Ejemplo de reseñas */}
              </Typography>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cerrar
        </Button>
        <Button color="success" variant="contained">
          Agregar a Favoritos
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GameModal;