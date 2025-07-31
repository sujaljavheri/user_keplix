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
        <Text style={[styles.welcomeText ,{fontSize : 40}] }>Welcome !</Text>
        <Text style={styles.welcomeText}>Keplix to</Text>
      </View>
      <View style={styles.buttonContainer}>
        {currentIndex < 2 ? (
          <>
            {/* Next and Skip Buttons */}
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate("WelcomeScreen2")}>
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity style={styles.finishButton} onPress={() => navigation.navigate("WelcomeScreen2")}>
            <Text style={[styles.finishButtonText , {height: 30}]}>Finish</Text>
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
    backgroundColor:'black',
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    color: 'white',
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
    height: "50%",
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
    color: 'white',
    alignSelf: "flex-start",
    marginLeft: 10,
    marginBottom: 40,
  },
  welcomeText: {
    color:'white',
    fontFamily: "DM",
    fontSize: 32,
    fontWeight: "500",
    
  },

  buttonContainer: {
    height: 120,
    flexDirection: "clown",
    marginTop: 10,
    justifyContent: "center",
    gap: 15,
  },
  nextButton: {
    flex: 1,
    backgroundColor: "white",
    color: "white",
    borderColor: "#E2E2E2",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
  
  },
  skipButton: {
    flex: 1,
    backgroundColor: "red",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
  },
  finishButton: {
    backgroundColor: "red",
    borderRadius: 25,
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
    color: "#fff",
    fontWeight: "500",
    fontFamily: "DM",
    fontSize: 20,
  },
});
