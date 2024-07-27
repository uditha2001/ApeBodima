import React, { useState } from 'react';
import { Container, Grid, Box, Typography, Button, TextField } from '@mui/material';

const App = () => {
  const [allFeatures, setAllFeatures] = useState([
    { name: 'Beds', count: 0},
    { name: 'Chairs', count: 0 },
    { name: 'Tables', count: 0 },
    { name: 'Nets', count: 0},
  ]);

  const [availableFeatures, setAvailableFeatures] = useState([]);

  const addFeature = (feature) => {
    setAvailableFeatures([...availableFeatures, feature]);
  };

  const removeFeature = (index) => {
    const newFeatures = [...availableFeatures];
    newFeatures.splice(index, 1);
    setAvailableFeatures(newFeatures);
  };

  const updateFeatureCount = (index, count) => {
    const newFeatures = [...availableFeatures];
    newFeatures[index].count = count;
    setAvailableFeatures(newFeatures);
  };

  return (
    <Container>
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom>Available Features</Typography>
            {availableFeatures.map((feature, index) => (
              <Box key={index} display="flex" alignItems="center" mb={2}>
                <Typography variant="body1">{feature.name}</Typography>
                <TextField
                  type="number"
                  value={feature.count}
                  onChange={(e) => updateFeatureCount(index, parseInt(e.target.value))}
                  style={{ marginLeft: 10, marginRight: 10 }}
                />
                <Button variant="contained" color="secondary" onClick={() => removeFeature(index)}>
                  Remove
                </Button>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom>All Features</Typography>
            {allFeatures.map((feature, index) => (
              <Box key={index} display="flex" alignItems="center" mb={2}>
                <Typography variant="body1">{feature.name}</Typography>
                <Button variant="contained" color="primary" onClick={() => addFeature(feature)} style={{ marginLeft: 10 }}>
                  Add
                </Button>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
