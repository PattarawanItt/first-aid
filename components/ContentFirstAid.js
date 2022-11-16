import React from 'react';
import { Box ,Image, ScrollView, Flex,Pressable, Heading,AspectRatio ,Center, Stack,HStack,Text} from "native-base";
import category from "../data/Category";
import Colors from '../color';
import confirstaid from '../data/Confirstaid ';
import {useNavigation} from "@react-navigation/native";

{/* อันนี้มันจะสร้างหัวเรื่องตามที่เรามีข้อมูลใน confirstaid.js */}
function ContentFirstAid(){
    const navigation = useNavigation()
    return(
            
        <ScrollView flex={2}>
            <Heading size="xl"px={5} pt={5} mb="2">
                First Aid +
            </Heading>
            <Flex
            flexWrap = "wrap"
            direction="column"
            justifyContent="space-between"
            px={10}
            >

            {/* เอาขข้อมูลมาจาก data/ConFirstAid เอาชื่อเรื่อง รูป  มาใส่ในBox */}
            {confirstaid.map((confirstaid) => (
                <Pressable onPress={() => navigation.navigate("Information")}
                key={confirstaid._id} 
                              w="100%"
                              bg={Colors.white}
                              rounded="md"
                              shadow={2}
                              pt ={0.3}
                              my={3}
                              pd={2}
                              overflow="hidden"
                              >
                <Box alignItems="center">
                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" 
                    _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                    }} _web={{
                    shadow: 2,
                    borderWidth: 0
                    }} _light={{
                    backgroundColor: "gray.50"
                    }}>
                    <Box>
                    {/* รูป*/} 
                    <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{uri: confirstaid.image }} alt={confirstaid.name}   />
                    </AspectRatio>
                    <Center bg= {Colors.pink} _dark={{
                        bg: "violet.400"
                        }} _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            Approved
                        </Center>
                    </Box>
                    {/* ชื่อเรื่อง*/}  
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            {confirstaid.name}
                        </Heading>
                    </Stack>
                    
                </Stack>
                    
                    
                    
                  
                    
                    
                </Box>
                </Box>
                </Pressable>
            ))}
            </Flex>
        </ScrollView>
    );
        

}

export default ContentFirstAid;
