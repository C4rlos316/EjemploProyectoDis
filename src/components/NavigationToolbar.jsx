import { AppBar, Toolbar, Typography, Box, Button, Avatar } from '@mui/material';

const NavigationToolbar = ({ navItems }) => {
  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          sx={{
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '0.2rem',
          }}
        >
          NeonPlay
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              color="inherit"
              href={item.path}
              component="a"
              sx={{ mx: 1 }}
            >
              {item.label}
            </Button>
          ))}
          <Avatar sx={{ ml: 2, bgcolor: 'background.paper' }}>U</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationToolbar;