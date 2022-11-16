import React from 'react';
import { Box } from "native-base";
import HomeSearch from '../../components/HomeSearch';
import HomeCategory from '../../components/HomeCategory';
import Colors from '../../color';


function HomeScreen(){
    
    //components
    return(<Box flex={1} >
        {/* <HomeSearch/> */}
        <HomeCategory/>
        
        

        </Box>
    )    
        
    
}

export default HomeScreen;