import React from 'react';
import HeaderComponent from "../component/HeaderComponent";
import SearchingALertComponent from '../component/SearchingAlertComponent';
import FooterComponent from '../component/FooterComponent';

const Home=()=>{
    return(
        <div>
            <HeaderComponent/>
            <SearchingALertComponent/>
            <FooterComponent/>
        </div>
    )
}

export default Home;