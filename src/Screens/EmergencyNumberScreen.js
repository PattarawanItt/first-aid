import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Text,
  StatusBar,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Linking } from "react-native";

const EmergencyCall = () => {
  const phoneData = [
    {
      id: 1,
      number: 1196,
      title: " อุบัติเหตุทางน้ำ",
    },
    {
      id: 2,
      number: 1554,
      title: " หน่วยแพทย์กู้ชีวิต วชิรพยาบาล",
    },
    {
      id: 3,
      number: 1669,
      title: " สถาบันการแพทย์ฉุกเฉินแห่งชาติ (ทั่วไทย)",
    },
    {
      id: 4,
      number: 1691,
      title: " โรงพยาบาลตำรวจ",
    },
    {
      id: 5,
      number: 191,
      title: " ติดต่อแจ้งเหตุเจ้าหน้าที่ตำรวจ",
    },
    {
      id: 6,
      number: 192,
      title: " ภัยพิบัติแห่งชาติ",
    },
    {
      id: 7,
      number: 199,
      title: " ศูนย์วิทยุพระราม เพื่อแจ้งอัคคีภัย/สัตว์ร้ายบุกรุกบ้าน",
    },
    {
      id: 8,
      number: 1418,
      title: " มูลนิธิปอเต๊กตึ๊ง กทม.",
    },
    {
      id: 9,
      number: 1155,
      title: " ตำรวจท่องเที่ยว (สายด่วนเหตุร้ายที่เกี่ยวข้องกับนักท่องเที่ยว)",
    },
    {
      id: 10,
      number: 1192,
      title: " ศูนย์ปราบขโมยรถ (สตช.)",
    },
    {
      id: 11,
      number: 1193,
      title: " ตำรวจทางหลวง",
    },
    {
      id: 12,
      number: 1195,
      title: " กองปราบ (สายด่วนแจ้งเหตุอาชญากรรม คดีร้ายแรงเป็นภัยต่อประเทศ)",
    },
    {
      id: 13,
      number: 1555,
      title:
        " ศูนย์ร้องทุกข์กรุงเทพฯ (หน่วยประสานงานกลางเหตุฉุกเฉินในกรุงเทพฯ)",
    },
    {
      id: 14,
      number: 1300,
      title: " ศูนย์ประชาบดี เพื่อแจ้งบุคคลสูญหาย",
    },
    {
      id: 15,
      number: 1137,
      title:
        " วิทยุ จส.100 (เบอร์โทรฉุกเฉินแจ้งเหตุด่วนบนท้องเพื่อประสานงานต่อ)",
    },
    {
      id: 16,
      number: 1146,
      title: " กรมทางหลวงชนบท (ติดต่อเรื่องท้องถนนเฉพาะพื้นที่ต่างจังหวัด)",
    },
    {
      id: 17,
      number: 1197,
      title: " ศูนย์ควบคุมและสั่งการจราจรตำรวจ",
    },
    {
      id: 18,
      number: 1644,
      title: " สวพ. FM91 (รายงานสภาพจราจรและแจ้งเหตุด่วนบนท้องถนน)",
    },
    {
      id: 19,
      number: 1356,
      title:
        " ศูนย์ปลอดภัยคมนาคม (ศูนย์ประสานภารกิจด้านความปลอดภัยระบบการขนส่ง)",
    },
    {
      id: 20,
      number: 1690,
      title: " การรถไฟแห่งประเทศไทย (สอบถามสายรถไฟ ตั๋ว และอื่น ๆ )",
    },
    {
      id: 21,
      number: 1584,
      title: " กรมการขนส่งทางบก",
    },
    {
      id: 22,
      number: 1586,
      title: " สายด่วนกรมทางหลวง",
    },
    {
      id: 23,
      number: 1543,
      title: " การทางพิเศษแห่งประเทศไทย",
    },
    {
      id: 24,
      number: 1677,
      title: " วิทยุร่วมด้วยช่วยกัน (เครือข่ายอาสาสมัคร)",
    },
    {
      id: 25,
      number: 1490,
      title: " บริษัท ขนส่ง จำกัด (บขส.)",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text
          style={{
            fontSize: 22,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 30,
            fontWeight: "bold",
          }}
        >
          Call Emergency
        </Text>
        {phoneData.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              Linking.openURL(`tel:${item.number}`);
            }}
          >
            <View key={item.id} style={styles.sosCard}>
              <Text style={styles.sosTitle}>
                {item.number}
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  //section เบอร์โทร ในscollview ทั้งหมด
  container: {
    alignItems: "center",
    paddingBottom: 80,
  },
  sosCard: {
    marginTop: 40,
    width: deviceWidth - 50,

    backgroundColor: "white",
    borderRadius: 15,

    shadowColor: "#B2BEB5",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 9,
  },
  sosTitle: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 20,
    textAlign: "left",
  },
});

export default EmergencyCall;
