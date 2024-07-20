import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import {Typography} from '@mui/material';
import SearchingImg from './images/Searching.svg';
import Button from '@mui/material/Button';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchingAlertComponent=()=>{
    return(
            <Container maxWidth="xl" sx={{bgcolor: '#F4F4F4', margin:0, padding:'3vh 4vw 0 4vw'}} disableGutters>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={6} md>
                        <Typography variant="h4" sx={{fontFamily:'Playfair Display',fontSize:'4em'}}>
                            Find Your Perfect Apartment In here
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={6} md sx={{paddingTop:'5vh'}}>
                        <Typography sx={{fontSize:'1.1em'}}>
                            Discover affordable apartments  for university students
                        </Typography>
                        <Grid container spacing={4} sx={{}}>
                                <Grid xs={6}>
                                    <Button variant="contained" color='primary' startIcon={<SearchOutlinedIcon />} >
                                        Search
                                    </Button>
                                </Grid>
                                <Grid xs={6}>
                                    <Button variant="outlined">
                                        Learn more
                                    </Button>
                                </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={12} md sx={{textAlign:'center'}}>
                        <img src={SearchingImg} alt='searching'/>
                    </Grid>
                </Grid>
            </Container>
    )
}

export default SearchingAlertComponent;