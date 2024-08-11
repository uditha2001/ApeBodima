import React, { useState } from 'react';
import {
    Container, TextField, Box, Divider, FormControl, FormLabel,
    Radio, RadioGroup, FormControlLabel, Select, MenuItem, Grid, Typography, Paper, Button
} from '@mui/material';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';

//Appartment details component
const AppartmentDetails = () => {
    const DropDown = () => {
        return (
            <>
                <FormLabel>Select boidm type</FormLabel>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <Select displayEmpty>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Type1</MenuItem>
                        <MenuItem value={20}>Type2</MenuItem>
                        <MenuItem value={30}>Type3</MenuItem>
                    </Select>
                </FormControl>
            </>
        )
    }

    const RadioButtonsGroup = () => {
        return (
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group">
                    <FormControlLabel value="female" control={<Radio />} label="Nearest City" />
                    <Box sx={{ mt: 1 }}>
                        <FormLabel>City name</FormLabel>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' fullWidth />
                    </Box>
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <Box sx={{ mt: 1 }}>
                        <FormLabel>Address</FormLabel>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                            fullWidth
                        />
                    </Box>
                </RadioGroup>
            </FormControl>
        );
    };

    return (
        <form>
            <Container sx={{ backgroundColor: '#FFFFFF', marginTop: '20px', padding: '16px' }}>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6}>
                        <Box>
                            <FormLabel>Enter appartment name</FormLabel>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' fullWidth />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <DropDown />
                    </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6}>
                        <Box>
                            <FormLabel>Price</FormLabel>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' fullWidth />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <FormLabel>Contact details</FormLabel>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' fullWidth />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <FormLabel>Distance to Uni</FormLabel>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' fullWidth />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <RadioButtonsGroup />
                    </Grid>
                </Grid>
            </Container>
        </form>
    )
}

//Available features component
const AvailabelFeatures = () => {
    const [allFeatures] = useState([
        { name: 'Beds', count: 0 },
        { name: 'Chairs', count: 0 },
        { name: 'Tables', count: 0 },
        { name: 'Nets', count: 0 },
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
        <Container sx={{ mt: 2 }}>
            <Grid container spacing={4} justifyContent="space-between">
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h5" gutterBottom>Available Features</Typography>
                        {availableFeatures.map((feature, index) => (
                            <Box key={index} display="flex" alignItems="center" mb={2}>
                                <Typography variant="body1">{feature.name}</Typography>
                                <TextField
                                    type="number"
                                    value={feature.count}
                                    onChange={(e) => updateFeatureCount(index, parseInt(e.target.value))}
                                    sx={{ ml: 1, mr: 1 }}
                                    size="small"
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
                        <Typography variant="h5" gutterBottom>All Features</Typography>
                        {allFeatures.map((feature, index) => (
                            <Box key={index} display="flex" alignItems="center" mb={2}>
                                <Typography variant="body1">{feature.name}</Typography>
                                <Button variant="contained" color="primary" onClick={() => addFeature(feature)} sx={{ ml: 1 }}>
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

//Add photos component
const AddPhotos = () => {
    const [images, setImages] = useState([]);

    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <Box sx={{ padding: '16px', mt: 2 }}>
            <Typography variant="h6" gutterBottom>
                Upload photos
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            border: '2px dashed #ccc',
                            borderRadius: '8px',
                            height: '200px',
                            width: '100%',
                            maxWidth: '300px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#f9f9f9',
                            position: 'relative',
                            mx: 'auto',
                        }}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        <input
                            id="fileInput"
                            type="file"
                            multiple
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleFileSelect}
                        />
                        <Button
                            variant="contained"
                            startIcon={<CloudUploadIcon />}
                            onClick={handleButtonClick}
                        >
                            Upload Image
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={2}>
                        {images.length > 0 ? (
                            images.map((image, index) => (
                                <Grid item key={index}>
                                    <Paper elevation={3}>
                                        <img
                                            src={image}
                                            alt={`Uploaded ${index}`}
                                            style={{
                                                width: '258px',
                                                height: '128px',
                                                objectFit: 'contain',
                                                borderRadius: '8px',
                                            }}
                                        />
                                    </Paper>
                                </Grid>
                            ))
                        ) : (
                            <Grid item xs={12}>
                                <Paper elevation={3} sx={{ padding: '16px', textAlign: 'center' }}>
                                    {/* Remove the icon and text */}
                                </Paper>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};


//Add reviews component
const AddReview = () => {
    return (
        <Container sx={{ backgroundColor: '#FFFFFF', mt: 2 }}>
            <p>I am rendered AddReview</p>
        </Container>
    )
}

//All the components combine here and export
const AddBodim = () => {
    return (
        <Box sx={{ backgroundColor: '#F0EFEB', padding: '16px' }}>
            <AppartmentDetails />
            <AvailabelFeatures />
            <AddPhotos />
            <AddReview />
        </Box>
    )
}

export default AddBodim;
