import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CancelBookingSuccess({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("WelcomeScreen"); // Navigate after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Image placeholder */}
      <View style={styles.imageContainer}>
        {/* Backend image will come here */}
        <Image
          source={null} // replace null with backend path later
          style={styles.image}
        />
        {/* Checkmark on top of image */}
        <View style={styles.checkWrapper}>
          <Ionicons name="checkmark" size={30} color="white" />
        </View>
      </View>

      {/* Success message */}
      <Text style={styles.text}>
        Your email address has been verified successfully !
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
    height: 230,
    borderRadius: 12,
    backgroundColor: "#E0E0E0", // Grey placeholder
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    resizeMode: "cover",
  },
  checkWrapper: {
    position: "absolute",
    bottom: -30, // now overlapping (half inside, half outside)
    alignSelf: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#E63946", // Red circle
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    zIndex: 10,
  },
  text: {
    fontSize: 20,
    color: "#555",
    textAlign: "center",
    marginTop: 40,
    paddingHorizontal: 70,
    marginBottom:80,
  },
});
