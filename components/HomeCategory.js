import React from 'react';
import { Box, Image, ScrollView, Flex, Pressable, Heading, AspectRatio, Center, Stack, useNativeBase } from "native-base";
import category from "../data/Category";
import Colors from '../color';
import { useNavigation } from "@react-navigation/native";


const HomeCategory = ()  => {
    const navigation = useNavigation()

    return (

        <ScrollView flex={2}>
            <Heading size="xl" px={5} pt={5} mb="2">
                Category
            </Heading>
            <Flex
                flexWrap="wrap"
                direction="column"
                justifyContent="space-between"
                px={10}
            >

                {/* //Pressable ทำให้กดได้ของreact ส่วนของFirstAid */}
                <Pressable
                    onPress={() => navigation.navigate("ContentFirstAid")}
                    w="100%"
                    bg={Colors.white}
                    rounded="md"
                    shadow={2}
                    pt={0.3}
                    my={3}
                    pd={2}
                    overflow="hidden">
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
                                <AspectRatio w="100%" ratio={16 / 9}>
                                    <Image source={{ uri: "https://imgz.io/images/2022/11/01/firstaid1.webp" }} alt={"image"} />
                                </AspectRatio>
                            </Box>
                            <Heading size="lg" ml="1" pt={3} mb="2">
                                First Aid
                            </Heading>
                        </Box>
                    </Box>
                </Pressable>

                {/* //Pressable ทำให้กดได้ของreact ส่วนของEmergency Health Care */}
                <Pressable
                    onPress={() => navigation.navigate("EmergencyScreen")}
                    w="100%"
                    bg={Colors.white}
                    rounded="md"
                    shadow={2}
                    pt={0.3}
                    my={3}
                    pd={2}
                    overflow="hidden">
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
                                <AspectRatio w="100%" ratio={16 / 9}>
                                    <Image source={{ uri: "https://sv1.img.in.th/ly3F5.webp" }} alt={"image"} />
                                </AspectRatio>
                            </Box>
                            <Heading size="lg" ml="1" pt={3} mb="2">
                                Emergency Health Care
                            </Heading>
                        </Box>
                    </Box>
                </Pressable>

                {/* //Pressable ทำให้กดได้ของreact ส่วนของ รวมเบอร์โทรฉุกเฉิน */}
                <Pressable
                    onPress={() => navigation.navigate("EmergencyNumberScreen")}
                    w="100%"
                    bg={Colors.white}
                    rounded="md"
                    shadow={2}
                    pt={0.3}
                    my={3}
                    pd={2}
                    overflow="hidden">
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
                                <AspectRatio w="100%" ratio={16 / 9}>
                                    <Image source={{ uri: "https://sv1.picz.in.th/images/2022/11/01/vq8fM1.webp" }} alt={"image"} />
                                </AspectRatio>
                            </Box>
                            <Heading size="lg" ml="1" pt={3} mb="2">
                                Call Emergency Services
                            </Heading>
                        </Box>
                    </Box>
                </Pressable>

                {/* Pressable ทำให้กดได้ของreact ส่วนของ locationโรงพยาบาล */}
                <Pressable
                    onPress={() => navigation.navigate("HospitalLocation")}
                    w="100%"
                    bg={Colors.white}
                    rounded="md"
                    shadow={2}
                    pt={0.3}
                    my={3}
                    pd={2}
                    overflow="hidden">
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
                                <AspectRatio w="100%" ratio={16 / 9}>
                                    <Image source={{ uri: "https://sv1.picz.in.th/images/2022/11/01/vq8AWk.webp" }} alt={"image"} />
                                </AspectRatio>
                            </Box>
                            <Heading size="lg" ml="1" pt={3} mb="2">
                                Hospital Location
                            </Heading>
                        </Box>
                    </Box>
                </Pressable>

            </Flex>
        </ScrollView>
    );


}

export default HomeCategory;
