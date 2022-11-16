import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from "../src/Screens/HomeScreen";
import LocationScreen from "../src/Screens/LocationScreen";
import EmergencyNumberScreen from '../src/Screens/EmergencyNumberScreen';

const Tab = createMaterialBottomTabNavigator();
// const Stack = createNativeStackNavigator();

const NavigationBar =()=>{
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Page"
        activeColor="#e91e63"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#fff' }}
      >
        <Tab.Screen
          name="Main"
          component={HomeScreen }
          options={{
            title: 'SOS',
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Location"
          component={LocationScreen}
          options={{
            tabBarLabel: 'Location',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="location-arrow" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Emergency"
          component={EmergencyNumberScreen}
          options={{
            tabBarLabel: 'SOS',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="phone-alert" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>


    </NavigationContainer>
  );
}

export default  NavigationBar ;