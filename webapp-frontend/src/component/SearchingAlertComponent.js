import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import {Typography} from '@mui/material';
import SearchingImg from './images/Searching.svg';
import Button from '@mui/material/Button';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const SearchingALertComponent=()=>{
    return(
            <Container maxWidth="xl" sx={{bgcolor: '#F4F4F4'}}>
                <Box sx={{flexGrow: 1}}>
                    <Grid container>
                        <Grid xs={12} sm={6} md lg>
                        <Typography variant="h4" sx={{fontFamily:'Playfair Display',fontSize:'64px'}}>
                            Find Your Perfect Apartment In here
                        </Typography>
                        </Grid>
                        <Grid xs={12} sm={6} md lg>
                                <Box sx={{bgcolor: '#cfe8fc',height: '20vh' }}>
                                    <div>
                                    <Typography variant="caption" sx={{}}>
                                        Discover affordable apartments  for university students
                                    </Typography>
                                    </div>
                                    <div>
                                        <Grid container>
                                                <Grid xs={6} md={6} lg={6}>
                                                <Button variant="outlined" startIcon={<SearchOutlinedIcon />} >
                                                    Search
                                                </Button>
                                                <Button variant="contained" >
                                                    Laern more
                                                </Button>
                                                </Grid>
                                        </Grid>
                                    </div>
                                    
                                </Box>
                        </Grid>
                        <Grid xs={12} sm={12} md lg>
                            <img src={SearchingImg} alt='searching'/>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
    )
}

export default SearchingALertComponent;