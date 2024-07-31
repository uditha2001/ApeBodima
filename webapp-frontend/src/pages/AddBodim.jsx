import React, { useState } from 'react';
import {
    Container,TextField,Box, Grid,Divider,FormControl,FormLabel,
    Radio,RadioGroup,FormControlLabel,Select,MenuItem,
} from '@mui/material'

//Appartment details component
const AppartmentDetails=()=>{
    const DropDown=()=>{
        // const [age, setAge] = React.useState('');

    // const handleChange = (event: SelectChangeEvent) => {
    //     setAge(event.target.value);
    // };
    return(
            <>
            <FormLabel>Select boidm type</FormLabel>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" minWidth="48rem">
                <Select
                // value={age}
                // onChange={handleChange}
                displayEmpty
                >
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
    

    const RadioButtonsGroup =()=> {
        return (
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group">
                <FormControlLabel value="female" control={<Radio />} label="Nearest City" />
                    <Box sx={{alignItems:"center"}}>
                        <FormLabel>City name</FormLabel>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small'/>
                    </Box>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <Box sx={{alignItems:"center"}}>
                        <FormLabel>Address</FormLabel>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={4}   
                            defaultValue="Default Value"
                        />
                    </Box>
              </RadioGroup>
            </FormControl>
          );
    };

    return (
     <form>
        <Container sx={{backgroundColor:'#FFFFFF',marginTop:'20px'}}>
            <Grid container spacing={2} >
                <Grid item md={6}>
                    <Box sx={{alignItems:"center"}}>
                        <FormLabel>Enter appartment name</FormLabel>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small'/>
                    </Box>
                </Grid>
                <Grid item md>
                    <Box>
                        <DropDown/>
                    </Box>
                </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2} >
                <Grid item md>
                    <Box>
                        <FormLabel>Price</FormLabel>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' />
                    </Box>
                </Grid>
                <Grid item md>
                    <Box>
                        <FormLabel>Contact details</FormLabel>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small'/>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} >
                <Grid item md>
                    <Box>
                        <FormLabel>Distance to Uni</FormLabel>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' />
                    </Box>
                </Grid>
                <Grid item md>
                    <Box>
                        <RadioButtonsGroup/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        </form>
    )

}
//Availabel features component
const AvailabelFeatures=()=>{
  
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
  


//Add photos component
const AddPhotos=()=>{
    return(
        <Container sx={{backgroundColor:'#FFFFFF'}}>
           <p>I am rendered AddPhotos</p>
        </Container>
    )
}    
//Add reviews component
const AddReview=()=>{
    return(
        <Container sx={{backgroundColor:'#FFFFFF'}}>
           <p>I am rendered AddReview</p>
        </Container>
    )
}    

//All the components combine here and export
const AddBodim=()=>{
    return (
        <Box sx={{backgroundColor:'#F0EFEB'}}>
            <AppartmentDetails/>
            <AvailabelFeatures/>
            <AddPhotos/>
            <AddReview/>
        </Box>

    )
    
}

export default AddBodim;

