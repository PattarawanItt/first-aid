import React from 'react';
import {  Input, Icon, HStack } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from '../color';
function HomeSearch(){
    
    return (
        <HStack space={3} 
        w="full"
        bg={Colors.top} 
        px={6} 
        py={4} 
        alignItems="center" 
        safeAreaTop
        >
            <Input  placeholder="Search Content" width="100%" 
            borderRadius="30" py="1" px="5" bg={Colors.white} 
            fontSize="15" 
                InputRightElement={
                <Icon m="2" ml="3" size="8" color= {Colors.gray} 
                as={<MaterialIcons name="search" />} />} 
            />
            
        </HStack>
    );
      
        
    
}

export default HomeSearch;