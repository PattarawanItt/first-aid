import React from 'react';
import { Text, Box, Heading, View } from "native-base";
import Colors from '../../color';
import { useNavigation } from '@react-navigation/native';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Callout, MarkerAnimated, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from '@env';
import * as Location from 'expo-location';



function LocationScreen() {
    const [origin, setOrigin] = React.useState({
        latitude: 14.066130, 
        longitude: 100.612417,
    });
    const [destination,setDestination] = React.useState({
        latitude: 14.072300,
        longitude: 100.615756,
    });

    // React.useEffect(() => {
    //     (async () => {
    //         let { status } = await Location.requestForegroundPermissionsAsync();
    //         if (status !== 'granted') {
    //             console.log('Permission denied');
    //             return;
    //         }
    //         let location = await Location.getCurrentPositionAsync({});
    //         console.log(location);

    //         setOrigin({
    //             latitude: location.coords.latitude,
    //             longitude: location.coords.longitude,
    //         });
    //     })();
    // }, []);

    
    return ( 
        <View style = { styles.container } >
            {/* <Text style = { styles.locationText } > Hospital Location </Text> 
            <TouchableOpacity>
                <Text style = { styles.backText } > BACK </Text> 
            </TouchableOpacity>  */}
            
            <MapView
                style = { styles.map}
                initialRegion={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04
                }}
            >
                <MarkerAnimated 
                    draggable
                    coordinate = {origin}
                    onDragEnd = {(direction) => setOrigin(direction.nativeEvent.coordinate)}
                >
                    <Callout>
                        <Text>You're here!</Text>
                    </Callout>
                </MarkerAnimated>

                <MarkerAnimated
                    draggable
                    coordinate={destination}
                    onDragEnd = {(direction) => setDestination(direction.nativeEvent.coordinate)}
                />
                <MapViewDirections
                    origin = {origin}
                    destination = {destination}
                    apikey = {GOOGLE_MAPS_KEY}
                    strokeColor="red"
                    strokeWidth={4}
                />
                {/* <Polyline
                    coordinates={[origin,destination]}
                    strokeColor="pink"
                    strokeWidth={8}
                /> */}
            </MapView>






        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: 350,
        height: 670,
    }
})

export default LocationScreen;