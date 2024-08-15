import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FavoriteList from './FavoriteList';
import { useMediaQuery, useTheme } from '@mui/material';

const ParentComponent = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button 
        id="view" 
        onClick={handleOpen} 
        variant="contained" 
        fullWidth={isMobile}
        sx={{ 
          maxWidth: isMobile ? '100%' : '200px',
          fontSize: { xs: '0.875rem', sm: '1rem' }
        }}
      >
        View Favorites
      </Button>
      <FavoriteList open={open} onClose={handleClose} />
    </div>
  );
};

export default ParentCompoOfViewFavorite;