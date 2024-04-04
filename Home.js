// import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  // ScrollView,
  Modal,
  TouchableHighlight,
  Image,
  Alert,
  FlatList,
  StatusBar as RNStatusBar,
  ToastAndroid,
} from "react-native";

export default function Home({ navigation }) {
  const [clockInTime, setClockInTime] = useState(null);
  const [clockedIn, setClockedIn] = useState(false);
  const [clockOutTime, setClockOutTime] = useState(null);
  const [clockedOut, setClockedOut] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [shifts, setShifts] = useState([]);

  const handleClockIn = () => {
    const now = new Date();
    setClockInTime(now);
    setClockedIn(true);
    setModalVisible(true);
  };

  const handleClockOut = () => {
    const now = new Date();
    setClockOutTime(now);
    setClockedOut(true);
    setModalVisible(true);

    setShifts([...shifts, { clockIn: clockInTime, clockOut: now }]);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setClockedIn(false);
    setClockedOut(false);
  };

  var buttons1Config = [
    { text: "No", onPress: () => {} },
    {
      text: "Yes",
      onPress: () => {
        const now = new Date();
        setBreakStart(now);
        ToastAndroid.show(
          "Break started at" + now.toLocaleTimeString(),
          ToastAndroid.LONG
        );
      },
    },
  ];

  var buttons2Config = [
    { text: "No", onPress: () => {} },
    {
      text: "Yes",
      onPress: () => {
        const now = new Date();
        setBreakEnd(now);
        ToastAndroid.show(
          "Break ended at" + now.toLocaleTimeString(),
          ToastAndroid.LONG
        );
      },
    },
  ];


  return (
    <>
      <RNStatusBar hidden={modalVisible} barStyle="dark-content" backgroundColor="white" />
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <SafeAreaView style={styles.container}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image
              style={styles.mylogo}
              source={require("./assets/Asset 1.png")}
            />
          </View>

          <View style={styles.cardsContainers}>
            {/* Clock in and out buttons */}
            <View style={styles.clockInOutContainer}>
              <TouchableOpacity
                style={styles.greenButton}
                onPress={handleClockIn}
              >
                <Text style={styles.buttonText}>Clock In</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.redButton}
                onPress={handleClockOut}
              >
                <Text style={styles.buttonText}>Clock Out</Text>
              </TouchableOpacity>
            </View>
            {/* Break buttons */}
            <View style={styles.breakContainer}>
              <TouchableOpacity
                style={styles.greenButton}
                onPress={() => {
                  Alert.alert(
                    "Attention",
                    "Do you want to start your break?",
                    buttons1Config
                  );
                }}
              >
                <Text style={styles.buttonText}>Start Break</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.redButton}
                onPress={() => {
                  Alert.alert(
                    "Attention",
                    "Do you want to end your break?",
                    buttons2Config
                  );
                }}
              >
                <Text style={styles.buttonText}>End Break</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Pop up */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleModalClose}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                {clockedIn && (
                  <>
                    <Text>
                      You clocked in at {clockInTime?.toLocaleTimeString()} on{" "}
                      {clockInTime?.toDateString()}
                    </Text>
                  </>
                )}
                {clockedOut && (
                  <>
                    <Text>
                      You clocked out at {clockOutTime?.toLocaleTimeString()} on{" "}
                      {clockOutTime?.toDateString()}
                    </Text>
                  </>
                )}
                <TouchableHighlight
                  style={styles.modalButton}
                  onPress={handleModalClose}
                >
                  <Text style={{color:"white"}}>Dismiss</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          {/* Previous shifts display */}
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
              data={shifts}
              keyExtractor={(item, index) => index.toString()}
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
                  <Text style={styles.jobTitle}>
                    {item.clockIn?.toDateString()}{" "}
                  </Text>
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
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  mylogo: {
    // marginTop: 20,
    // width: 150,
    height: 130,
    resizeMode: "contain",
    width: "60%",
  },
  logoContainer: {
    flex: 0.5,
    // marginTop: 50,
    // backgroundColor: 'pink',
    alignItems: "center",
    width: "100%",
    // justifyContent: 'center',
  },
  clockInOutContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  breakContainer: {
    flexDirection: "row",
    justifyContent: "center",
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
  buttonText: {
    fontWeight: "400",
  },
  greenButton: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    borderWidth: 0.7,
    borderColor: "green",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 10,
    marginRight: 10,
    width: 105,
    height: 50,
  },
  redButton: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    borderWidth: 0.7,
    borderColor: "#8C1D1D",
    shadowColor: "red",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 10,
    marginRight: 10,
    width: 105,
    height: 50,
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.07)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  modalButton: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    borderRadius: 20,
    padding: 12,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  arrowContainer: {
    position: 'absolute',
    top: '50%',
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
