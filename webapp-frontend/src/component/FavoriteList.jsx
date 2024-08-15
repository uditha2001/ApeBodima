import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  List, 
  ListItem, 
  ListItemAvatar, 
  Avatar, 
  ListItemText, 
  IconButton, 
  Typography,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CloseIcon from '@mui/icons-material/Close';

const FavoriteList = ({ open, onClose }) => {
  const [favorites, setFavorites] = useState([]);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (open) {
      fetchFavorites();
    }
  }, [open]);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get('/api/favorites');
      setFavorites(response.data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const handleRemove = async (bodimId) => {
    try {
      await axios.delete(`/api/favorites/${bodimId}`);
      setFavorites(favorites.filter(fav => fav.bodimId !== bodimId));
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth 
      fullScreen={fullScreen}
    >
      <DialogTitle sx={{ pr: 6 }}>
        Your Favorite Apartment List
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1" gutterBottom>
          You can remove an apartment from this list
        </Typography>
        <List>
          {favorites.map((favorite) => (
            <ListItem 
              key={favorite.bodimId} 
              alignItems="flex-start"
              sx={{ 
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'center' },
                '& .MuiListItemText-root': { 
                  mt: { xs: 1, sm: 0 },
                  mr: { xs: 0, sm: 2 }
                }
              }}
            >
              <ListItemAvatar>
                <Avatar 
                  alt={favorite.bodimPlaceName} 
                  src={favorite.mainPhotoUrl} 
                  variant="rounded"
                  sx={{ width: 80, height: 80 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={favorite.bodimPlaceName}
                secondary={
                  <React.Fragment>
                    <Box display="flex" alignItems="center" mt={1}>
                      <LocationOnIcon fontSize="small" />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        {favorite.locationAddress}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mt={1}>
                      <AttachMoneyIcon fontSize="small" />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        {favorite.price}
                      </Typography>
                    </Box>
                  </React.Fragment>
                }
              />
              <IconButton 
                edge="end" 
                aria-label="remove" 
                onClick={() => handleRemove(favorite.bodimId)}
                sx={{ mt: { xs: 1, sm: 0 } }}
              >
                <Typography color="error">Remove</Typography>
              </IconButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default FavoriteList;

