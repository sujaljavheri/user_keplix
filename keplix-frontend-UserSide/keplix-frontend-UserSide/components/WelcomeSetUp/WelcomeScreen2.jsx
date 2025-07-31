import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Location from "expo-location";

export default function LocationPermissionScreen({ navigation }) {
  const requestLocationPermission = async () => {
    try {
      // This will trigger the native permission dialog
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status === "granted") {
        console.log("Location permission granted");
        // Get the current location once permission is granted
        const location = await Location.getCurrentPositionAsync({});
        console.log("Location:", location);
      } else {
        console.log("Location permission denied by user");
      }
      
      // Navigate to Homepage after user has responded to the native permission dialog
      navigation.navigate("Homepage");
    } catch (error) {
      console.log("Error requesting location permission:", error);
      // Navigate to Homepage even if there's an error
      navigation.navigate("Homepage");
    }
  };

  const handleLater = () => {
    console.log("Location permission skipped");
    // Navigate to Homepage when "Do It Later" is pressed
    navigation.navigate("Homepage");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Image Placeholder */}
      <View style={styles.centerContainer}>
        <View style={styles.imagePlaceholder} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Keplix Wants To</Text>
        <Text style={styles.titleText}>Know Your Location</Text>
        <View style={styles.purpleLine} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.laterButton} onPress={handleLater}>
          <Text style={styles.laterButtonText}>Do It Later</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.allowButton} onPress={requestLocationPermission}>
          <Text style={styles.allowButtonText}>Allow</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "black",
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    color : "white",
    fontSize: 30,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  imagePlaceholder: {
    width: "80%",
    height: "60%",
    backgroundColor: "#E2E2E2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  textContainer: {
    marginBottom: 30,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  titleText: {
    color: "white",
    fontFamily: "DM",
    fontSize: 32,
    fontWeight: "500",
  },
  purpleLine: {
    width: 30,
    height: 4,
    backgroundColor: "#4E46B4",
    marginBottom: 10,
  },
  buttonContainer: {
    height: 120,
    flexDirection: "column",
    marginTop: 10,
    justifyContent: "space-between",
    marginBottom: 20,
    gap :15,
  },
  laterButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#E2E2E2",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
    marginRight: 10,
  },
  allowButton: {
    flex: 1,
    backgroundColor: "red",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
  },
  laterButtonText: {
    color: "#000",
    fontWeight: "500",
    fontFamily: "DM",
    fontSize: 20,
  },
  allowButtonText: {
    color: "#fff",
    fontWeight: "500",
    fontFamily: "DM",
    fontSize: 20,
  },
});