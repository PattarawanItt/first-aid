
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

const Card = () => {
    const info = [
        {
            id: 1,
            part: 1,
            title: "Detecting Sudden Cardiac Arrest",
            img: "https://sv1.picz.in.th/images/2022/11/04/vAbDL9.png",
            detail:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          },
          {
            id: 2,
            part: 2,
            title: "Detecting Sudden Cardiac Arrest",
            img: "https://sv1.picz.in.th/images/2022/11/04/vAbDL9.png",
            detail:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          },
          {
            id: 3,
            part: 3,
            title: "Detecting Sudden Cardiac Arrest",
            img: "https://sv1.picz.in.th/images/2022/11/11/vGf6JN.th.png",
            detail:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          },
    ];

    return(
        <View style={styles.Box1}>
            <Text style={styles.Text1}>
            How to Treat Sudden Cardiac Arrest
            </Text>
            <View style={styles.Box2}>
                {info.map((item) => (
                    <>
                    <View style={styles.Box3}>
                        <Text style={styles.partNum}>PART {item.part}</Text>
                        <Text style={styles.partTitle}>{item.title}</Text>
                    </View>
                    <Image source={{uri: item.img}} style={styles.partImg}/>
                    <ScrollView style={styles.scollview}>
                        <Text style={styles.partScollviewText}>{item.detail}</Text>
                    </ScrollView>
                    </>
                ))}
            </View>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    Box1:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text1:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    Box2:{
        marginTop: 40,
        width: deviceWidth - 35,
        backgroundColor: "white",
        borderRadius: 20,

        shadowColor: "#B2BEB5",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
        elevation: 9,
    },
    Box3:{
        height:50,
        width: deviceWidth - 35,
        borderColor: 'red',

        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    partNum:{
        fontSize: 16,
        fontWeight: "bold",
        width: 75,
        paddingTop: 16,
        color: "#fff",
        textAlign: "center",
        backgroundColor: "orange",
        borderRadius: 10,
        overflow: "hidden",  
    },
    partTitle:{
        fontSize: 15,
        fontWeight: "bold",
        padding: 16,
    },
    partImg:{
        height: 200,
        width: deviceWidth - 35,
    },
    scollview:{
        width: deviceWidth - 35,
        height: 100,
        marginBottom: 20,  
    },
    partScollviewText:{
        padding: 10,
        fontSize: 16,
    },
});

export default Card;