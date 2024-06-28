import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
{
  /* Previous shifts display */
}
const ShiftCard = ({ navigation, shifts }) => {
  return (
    <View style={styles.cardsContainers}>
      <View style={styles.arrowContainer}>
        <Image
          style={styles.myarrow}
          source={require("./assets/rightarrow.png")}
        />
      </View>
      <Text style={styles.clockInOutContainerText}>
        YOUR PREVIOUS SHIFTS AT A GLANCE
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        //pass shifts prop into data field
        data={shifts}
        keyExtractor={(item, index) => index.toString()}
        //iterate through shifts and render each
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            style={styles.jobBox}
            onPress={() =>
              navigation.navigate("Shifts", {
                clockIn: item.clockIn,
                clockOut: item.clockOut,
              })
            }
          >
            <Text style={styles.jobTitle}>{item.clockIn?.toDateString()} </Text>
            <Text style={styles.jobDetails}>
              Clock in time: {item.clockIn?.toLocaleTimeString()}{" "}
            </Text>
            <Text style={styles.jobDetails}>
              Clock out time: {item.clockOut?.toLocaleTimeString()}{" "}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  clockInOutContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  cardsContainers: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginBottom: 40,
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 2,
  },
  jobBox: {
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    height: 150,
    marginHorizontal: 5,
    width: 150,
    borderWidth: 0.5,
    borderColor: "#ebebeb",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    elevation: 2,
  },
  jobTitle: {
    fontWeight: "bold",
    padding: 5,
    // color:'white'
  },
  jobDetails: {
    fontStyle: "italic",
    // color:'white'
  },
  clockInOutContainerText: {
    // padding: 20,
    marginTop: 20,
    fontWeight: "600",
  },
  arrowContainer: {
    position: "absolute",
    top: "50%",
    right: 0,
    transform: [{ translateY: -12.5 }],
    zIndex: 1,
  },
  myarrow: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
});
export default ShiftCard;
