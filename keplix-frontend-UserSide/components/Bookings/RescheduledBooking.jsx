import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CancelBookingSuccess({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("BookingList"); // Navigate after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Image placeholder */}
      <View style={styles.imageContainer}>
        {/* Red checkmark button */}
        <View style={styles.checkWrapper}>
          <Ionicons name="checkmark" size={30} color="white" />
        </View>
      </View>

      {/* Success message */}
      <Text style={styles.text}>
        Your booking has been cancelled successfully.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: 260,
    height: 260,
    borderRadius: 12,
    backgroundColor: "#E0E0E0", // Grey placeholder
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  checkWrapper: {
    position: "absolute",
    bottom: -30, // half outside the box
    alignSelf: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E63946", // Red circle
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  text: {
    fontSize: 20,
    color: "#555",
    textAlign: "center",
    marginTop: 40,
    paddingHorizontal: 20,
  },
});
