import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function WelcomeScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleFinish = () => {
    console.log("Welcome Screen Finished");
    // Navigate to another screen or perform some action
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

        {/* Pagination Dots */}
        <View style={styles.dotContainer}>
          {[0, 1, 2].map((index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.welcomeText1, { fontSize: 40 }]}>Welcome !</Text>
        <Text style={styles.welcomeText}>To Keplix</Text>
      </View>
      <View style={styles.buttonContainer}>
        {currentIndex < 2 ? (
          <>
            {/* Next and Skip Buttons */}
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.skipButton}
              onPress={() => navigation.navigate("WelcomeScreen2")}
            >
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            style={styles.finishButton}
            // onPress={() => navigation.navigate("WelcomeScreen2")
            onPress={() => navigation.navigate("Personalize")

            }
          >
            <Text style={[styles.finishButtonText, { height: 30 }]}>
              Next
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    color: "black",
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
    width: "70%",
    height: "60%",
    backgroundColor: "#E2E2E2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  dotContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "#E2E2E2",
    marginHorizontal: 5,
  },
  activeDot: {
    width: 10,
    height: 10,
    backgroundColor: "red",
  },
  textContainer: {
    color: "black",
    alignSelf: "flex-start",
    marginLeft: 10,
    marginBottom: 20,
  },
  welcomeText1: {
  fontFamily: "Poppins",  
  fontWeight: "600",      // SemiBold weight
  fontSize: 35,
  lineHeight: 35,         // 100% of font size
  letterSpacing: 0,
  style: "semi-bold",
  
  },
  welcomeText: {
    color: "black",
    fontFamily: "DM",
    fontSize: 32,
    fontWeight: "500",
    marginBottom:20,
  },

  buttonContainer: {
    height: 120,
    flexDirection: "clown",
    marginTop: 10,
    justifyContent: "center",
    gap: 15,
    marginBottom:80,
  },
  
  nextButton: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "#8E8E8E", 
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: "center",
  },
  

  skipButton: {
    flex: 1,
    backgroundColor: "red",
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: "center",
  },
  finishButton: {
    backgroundColor: "white",
    borderColor: "#8E8E8E", 
    borderRadius: 20,
    borderWidth: 2,
    paddingVertical: 12,
    alignItems: "center",
  },
  
  nextButtonText: {
    color: "#000",
    fontWeight: "500",
    fontFamily: "DM",
    fontSize: 20,
  },
  skipButtonText: {
    color: "#fff",
    fontWeight: "500",
    fontFamily: "DM",
    fontSize: 20,
    
  },
  finishButtonText: {
    color: "black",
    fontWeight: "500",
    fontFamily: "DM",
    fontSize: 20,
  },
});
