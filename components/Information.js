import React from "react";
import { View, Text, StyleSheet, Image, Button ,ScrollView} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Cards from '../components/Card';



export default function Information() {
  return (
    <ScrollView>
    <View style={{ paddingTop: 60 }}>
      <Image
        source={{ uri: "https://sv1.picz.in.th/images/2022/11/04/vA7Chl.png" }}
        style={{ width: 430, height: 300 }}
      />
      <View style={styles.cardShadow}>
        <View style={styles.cardContainer}>
          <MaterialCommunityIcons
            name="check-decagram"
            color="#F24E1E"
            style={styles.icon}
          />
        </View>
      </View>
      <Cards />
    </View>
    </ScrollView>
    
   );
}

const styles = StyleSheet.create({
  icon: {
    paddingTop: 10,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 30,
  },
  shadowStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  cardShadow: {
    top: -25,
    borderRadius: 16,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardContainer: {
    height: 50,
    width: 50,
    left: "80%",
    backgroundColor: "#fff",
    borderRadius: 25,
    overflow: "hidden",
  },
});