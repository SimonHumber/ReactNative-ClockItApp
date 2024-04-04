import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

export default function Payroll({}) {
  const [payroll, setPayroll] = useState([
    {
      startPeriod: "2024-01-01",
      endPeriod: "2024-01-07",
      id: 1,
      payrollTotal: "$1000",
      totalHours: "30 hours",
    },
    {
      startPeriod: "2024-01-08",
      endPeriod: "2024-01-14",
      id: 2,
      payrollTotal: "$1200",
      totalHours: "35 hours",
    },
    {
      startPeriod: "2024-01-15",
      endPeriod: "2024-01-21",
      id: 3,
      payrollTotal: "$1100",
      totalHours: "32 hours",
    },
    {
      startPeriod: "2024-01-22",
      endPeriod: "2024-01-28",
      id: 4,
      payrollTotal: "$1050",
      totalHours: "31 hours",
    },
    {
      startPeriod: "2024-01-29",
      endPeriod: "2024-02-04",
      id: 5,
      payrollTotal: "$1300",
      totalHours: "38 hours",
    },
    {
      startPeriod: "2024-02-05",
      endPeriod: "2024-02-11",
      id: 6,
      payrollTotal: "$1150",
      totalHours: "33 hours",
    },
    {
      startPeriod: "2024-02-12",
      endPeriod: "2024-02-18",
      id: 7,
      payrollTotal: "$1250",
      totalHours: "36 hours",
    },
    {
      startPeriod: "2024-02-19",
      endPeriod: "2024-02-25",
      id: 8,
      payrollTotal: "$1350",
      totalHours: "39 hours",
    },
    {
      startPeriod: "2024-02-26",
      endPeriod: "2024-03-03",
      id: 9,
      payrollTotal: "$1400",
      totalHours: "40 hours",
    },
    {
      startPeriod: "2024-03-04",
      endPeriod: "2024-03-10",
      id: 10,
      payrollTotal: "$1500",
      totalHours: "42 hours",
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      
        <FlatList
          style={styles.flatlist}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={payroll}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
            <View style={styles.logoContainer}>
            <Image
              style={styles.mylogo}
              source={require("./assets/moneylogo.png")}
            />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textPayroll}>{item.payrollTotal}</Text>
              <Text style={styles.flatlistText}>
                {item.startPeriod} to {item.endPeriod}
              </Text>
              <Text style={styles.flatlistText}>{item.totalHours}</Text>
            </View>
            <View style={styles.logoContainer}>
            <Image
              style={styles.myarrow}
              source={require("./assets/rightarrow.png")}
            />
            </View>
            </View>
          )}
        />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  flatlist: {
    width: "100%",
  },
  itemContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
    alignItems: "center",
 
  },
  logoContainer: {
    marginRight: 15,
  },
  mylogo: {
    height: 45,
    width: 45,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
  },
  textPayroll: {
    fontSize: 18,
    fontWeight: "bold",
  },
  myarrow: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
});