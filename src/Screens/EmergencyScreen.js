import React from 'react';
import { View, Text, Box ,Image,Heading} from "native-base";
import Colors from '../../color';
import HomeSearch from '../../components/HomeSearch';
import ContentEmerHealth from '../../components/ContentEmerHealth';


function EmergencyScreen(){
     //components
    return(<Box flex={1} >

        {/* <HomeSearch/> */}
        <ContentEmerHealth/>

        </Box>
      

    );
        
    
      
        
    
}

export default EmergencyScreen;