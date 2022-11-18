import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";

//import screen ที่ต้องdารเชื่อม
import HomeScreen from "./src/Screens/HomeScreen";
import ContentFirstAid from "./components/ContentFirstAid";
import EmergencyScreen from "./src/Screens/EmergencyScreen";
import EmergencyNumberScreen from "./src/Screens/EmergencyNumberScreen";
import HospitalLocation from "./src/Screens/LocationScreen";
import Information from "./components/Information";
import NavigationBar from "./components/NavigationBar";
 
const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home" component={NavigationBar} />
        <Stack.Screen name = "ContentFirstAid" component={ContentFirstAid} />
        <Stack.Screen name = "EmergencyScreen" component={EmergencyScreen} />
        <Stack.Screen name="EmergencyNumberScreen" component={EmergencyNumberScreen} />
        <Stack.Screen name="HospitalLocation" component={HospitalLocation} />
        <Stack.Screen name="Information" component={Information} />


      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}
