import React from 'react';
import { Grid, TextField, Button, Typography, Box, Link as MuiLink, IconButton } from '@mui/material';
import { Facebook, LinkedIn, GitHub } from '@mui/icons-material';
import logo from './images/APEBODIMA.svg';

const FooterComponent = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#f5f5f5', p: 4 }}>
      <Grid container spacing={4}>

        {/* Logo and Newsletter Section */}
        <Grid item xs={12} sm={6} md={4} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Box sx={{ mb: 2 }}>
            <img src={logo} alt="logo" style={{ width: "6rem" }} />
          </Box>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Stay up to date on our latest features and releases by joining our newsletter.
          </Typography>
          <Box component="form" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1, justifyContent: { sm: 'center', md: 'flex-start' } }}>
            <TextField
              type="email"
              placeholder="Your Email Address"
              variant="outlined"
              size="small"
              sx={{ bgcolor: 'white', borderRadius: 1, width: { xs: '100%', sm: 'auto' } }}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ borderRadius: 1, mt: { xs: 1, sm: 0 } }}>
              Subscribe
            </Button>
          </Box>
        </Grid>

        {/* Newsletter Image Section */}
        <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
          <img src="newsletter-image.png" alt="Newsletter" style={{ width: "100%", maxWidth: '250px' }} />
        </Grid>

        {/* About Us Section */}
        <Grid item xs={12} sm={6} md={2} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            About Us
          </Typography>
          <Typography variant="body2">
            Learn more about our company, mission, and team.
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={6} md={2} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Quick Links
          </Typography>
          <Box>
            <MuiLink href="#contact" underline="hover" color="inherit">Contact us</MuiLink><br />
            <MuiLink href="#learn" underline="hover" color="inherit">Learn more</MuiLink><br />
            <MuiLink href="#faq" underline="hover" color="inherit">FAQ</MuiLink><br />
            <MuiLink href="#terms" underline="hover" color="inherit">Terms</MuiLink>
          </Box>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Follow Us
          </Typography>
          <Box>
            <IconButton component="a" href="https://facebook.com" aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton component="a" href="https://linkedin.com" aria-label="LinkedIn">
              <LinkedIn />
            </IconButton>
            <IconButton component="a" href="https://github.com" aria-label="GitHub">
              <GitHub />
            </IconButton>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
  );
}

export default FooterComponent;
