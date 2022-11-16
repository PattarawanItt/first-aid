import React from 'react';
import { Box } from "native-base";
import Colors from '../../color';
import ContentFirstAid from '../../components/ContentFirstAid';
import HomeSearch from '../../components/HomeSearch';


function FirstAidScreen(){
    
    //components
    return(<Box flex={1} >
        <HomeSearch/>
        <ContentFirstAid/>
        

        </Box>
    )    
        
    
}

export default FirstAidScreen;