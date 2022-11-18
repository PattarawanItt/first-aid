import React, { useRef, useState } from 'react';
import { Text, View } from "native-base";
import Colors from '../../color';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Callout, MarkerAnimated, Polyline, PROVIDER_GOOGLE, LatLng } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from '@env';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete, GooglePlaceDetail } from 'react-native-google-places-autocomplete';

type InputAutocompleteProps = {
    label: String,
    placeholder: String,
    onPlaceSelected: (details: GooglePlaceDetail | null) => undefined,
};

function InputAutocomplete({
    label,
    placeholder,
    onPlaceSelected,   
}: InputAutocompleteProps) {
    return(
        <>
        <GooglePlacesAutocomplete
            styles={{ textInput: styles.input }}
            placeholder={placeholder || ""}
            fetchDetails
            onPress={(data, details = null) =>{
            onPlaceSelected(details);
            }}
            query={{
                key: GOOGLE_MAPS_KEY,
            }}
            />
        </>
    );
}


function LocationScreen() {
    const [origin, setOrigin] = React.useState({
        latitude: 14.066130,
        longitude: 100.612417,
    });
    const [destination, setDestination] = React.useState({
        latitude: 14.072300,
        longitude: 100.615756,
    });
    return ( 
        <View style = { styles.container } >
            <MapView
                style = { styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={
                    {
                        latitude: 14.066130,
                        longitude: 100.612417,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04
                    }
                }
            >
                <MarkerAnimated 
                draggable 
                coordinate = { origin }
                onDragEnd = {(direction) => setOrigin(direction.nativeEvent.coordinate)}
            >
                <Callout >
                    <Text> You 're here!</Text> 
                </Callout > 
            </MarkerAnimated>

            <MarkerAnimated 
            draggable 
            coordinate = { destination }
            onDragEnd = {(direction) => setDestination(direction.nativeEvent.coordinate)
            }
            /> 
            <MapViewDirections 
            origin = { origin }
            destination = { destination }
            apikey = { GOOGLE_MAPS_KEY }
            strokeColor = "salmon"
            strokeWidth = { 4 }
            /> 
            
            </MapView>
            <View style={styles.searchContainer}>
                <InputAutocomplete placeholder="Search" onPlaceSelected={() => {}} />
            </View>
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
        top:100,
    },
    searchContainer: {
        position: 'absolute',
        width: 350,
        backgroundColor: 'white',
        elevation: 4,
        padding: 8,
        borderRadius: 8,
        top: 20,
    },
    input: {
        borderColor: '#888',
    },
});

export default LocationScreen;

