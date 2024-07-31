import {
    Container,TextField,Box, Grid,Divider,FormControl,FormLabel,
    Radio,RadioGroup,FormControlLabel,Select,MenuItem,Typography,Button
} from '@mui/material'
import React,{ useState } from 'react'
import ReviewCardComponent from '../component/ReviewCardComponent';

const sectionColorStyle={
  backgroundColor:'#FFFFFF',
  marginTop:'20px',
  paddingTop:'5px', 
}
const sectionTopicStyle={
  fontSize:'1.8em',
  color:'#4A90E2',
  margin:'1px',
  padding:'2px'
}

//Appartment details component
const AppartmentDetails=()=>{
  const DropDown=(props)=>{
      // const [age, setAge] = React.useState('');

    // const handleChange = (event: SelectChangeEvent) => {
    //     setAge(event.target.value);
    // };
    return(
            <Box sx={props.boxStyle}>
            <FormLabel sx={props.labelWidthStyle}>Select boidm type</FormLabel>
            <FormControl sx={{minWidth: "50%" }} size="small" minwidth="48rem">
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
            </Box>
    )
  };

  const boxStyle={
    display: "flex",
    alignItems:"center",
    margin:"10px"
  }
  const labelWidthStyle={
      width:"40%",
  }
  const feildWidthStyle={
      width:"50%",
  }

  const RadioButtonsGroup =(props)=> {
          return (
            <Box sx={props.boxStyle}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Location Details:</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="cityName"
                  name="radio-buttons-group">
                  <FormControlLabel value="female" control={<Radio />} label="Nearest City" />
                      <Box sx={props.boxStyle}>
                          <FormLabel sx={props.labelWidthStyle}>City name</FormLabel>
                          <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small'/>
                      </Box>
                  <FormControlLabel value="male" control={<Radio />} label="address" />
                      <Box>
                          <FormLabel sx={props.labelWidthStyle}>Address</FormLabel>
                          <TextField
                              id="outlined-multiline-static"
                              multiline
                              rows={4}   
                              defaultValue="Default Value"
                          />
                      </Box>
                </RadioGroup>
              </FormControl>
            </Box>
            );
  };

  return (
      <Container sx={sectionColorStyle}>
          <Grid container spacing={2} >
              <Grid item md={6}>
                  <Box sx={boxStyle}>
                      <FormLabel sx={labelWidthStyle}>Enter appartment name</FormLabel>
                      <TextField sx={feildWidthStyle} id="outlined-basic" label="Outlined" variant="outlined" size='small'/>
                  </Box>
              </Grid>
              <Grid item md>
                  <Box>
                      <DropDown labelWidthStyle={labelWidthStyle} boxStyle={boxStyle}/>
                  </Box>
              </Grid>
          </Grid>
          <Divider />
          <Grid container spacing={2} >
              <Grid item md>
                  <Box sx={boxStyle}>
                      <FormLabel sx={labelWidthStyle}>Price</FormLabel>
                      <TextField sx={feildWidthStyle} id="outlined-basic" label="Outlined" variant="outlined" size='small' />
                  </Box>
              </Grid>
              <Grid item md>
                  <Box sx={boxStyle}>
                      <FormLabel sx={labelWidthStyle}>Contact details</FormLabel>
                      <TextField sx={feildWidthStyle} id="outlined-basic" label="Outlined" variant="outlined" size='small'/>
                  </Box>
              </Grid>
          </Grid>
          <Grid container spacing={2} >
              <Grid item md>
                  <Box sx={boxStyle}>
                      <FormLabel sx={labelWidthStyle}>Distance to Uni</FormLabel>
                      <TextField sx={feildWidthStyle} id="outlined-basic" label="Outlined" variant="outlined" size='small' />
                  </Box>
              </Grid>
              <Grid item md>
                  <Box>
                      <RadioButtonsGroup labelWidthStyle={labelWidthStyle} boxStyle={boxStyle}/>
                  </Box>
              </Grid>
          </Grid>
      </Container>
  )
};
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
      <Container sx={sectionColorStyle}>
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <Box>
              <Typography className='roboto-regular' sx={sectionTopicStyle} gutterBottom>Available Features</Typography>
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
              <Typography className='roboto-regular' sx={sectionTopicStyle} gutterBottom>All Features</Typography>
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
        <Container sx={sectionColorStyle}>
           <Typography className='roboto-regular' sx={sectionTopicStyle}>Upload photos</Typography>
        </Container>
    )
};
//Add reviews component
const AddReview=()=>{
    return(
        <Container sx={sectionColorStyle}>
          <Typography className='roboto-regular' sx={sectionTopicStyle}>Give first feedback to this place</Typography>
          
          <ReviewCardComponent/>
        </Container>
    )
};  

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

