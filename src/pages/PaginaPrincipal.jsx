import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import GameCard from '../components/GameCard';
import NavigationToolbar from '../components/NavigationToolbar';
import PlatformFilter from '../components/PlatformFilter';
import { navItems, platforms } from '../constants/appConstants';

const PaginaPrincipal = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const games = [
    { id: 1, name: 'Cyberpunk 2077', genres: 'Action, Adventure, Role-Playing', image: 'https://via.placeholder.com/150', platform: 'pc' },
    { id: 2, name: 'Dying Light 2', genres: 'Action, Adventure, Horror, Role-Playing', image: 'https://via.placeholder.com/150', platform: 'playstation' },
    { id: 3, name: 'Elden Ring', genres: 'Action, Adventure, Role-Playing', image: 'https://via.placeholder.com/150', platform: 'xbox' },
    { id: 4, name: 'Halo Infinite', genres: 'First-Person Shooter', image: 'https://via.placeholder.com/150', platform: 'xbox' },
    { id: 5, name: 'Horizon Forbidden West', genres: 'Action, Adventure, Role-Playing', image: 'https://via.placeholder.com/150', platform: 'playstation' },
    { id: 6, name: 'The Legend of Zelda: Breath of the Wild 2', genres: 'Action, Adventure', image: 'https://via.placeholder.com/150', platform: 'nintendo' },
    { id: 7, name: 'Overwatch 2', genres: 'First-Person Shooter, Hero Shooter', image: 'https://via.placeholder.com/150', platform: 'pc' },
    { id: 8, name: 'Suicide Squad: Kill the Justice League', genres: 'Action, Adventure', image: 'https://via.placeholder.com/150', platform: 'all' },
    { id: 9, name: 'Test Game', genres: 'Test Genre', image: 'https://via.placeholder.com/150', platform: 'pc' }, // Juego adicional
  ];

  const filteredGames = selectedPlatform === 'all'
    ? games
    : games.filter(game => game.platform === selectedPlatform);

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
      <NavigationToolbar navItems={navItems} />
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Featured
        </Typography>
        <PlatformFilter
          platforms={platforms}
          selectedPlatform={selectedPlatform}
          onSelect={setSelectedPlatform}
        />
        <Grid
          container
          spacing={2}
          sx={{ width: '100%', mx: 'auto', mb: 0 }}
        >
          {filteredGames.map((game) => (
            <Grid item xs="auto" key={game.id}>
              <GameCard game={game} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PaginaPrincipal;