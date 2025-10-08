import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity
        style={styles.skipbutton}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Text style={styles.skiptext}>Skip</Text>
      </TouchableOpacity>

      {/* Gradient Image Container */}
      {/* Gray Image Container */}
      <View style={styles.imageContainer}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Let's get your car back on the road</Text>
        </View>
        {/* Future image will go here */}
      </View>

      {/* Continue with Email */}
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.signInText}>Continue with email</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* Social Buttons at Bottom */}
      <View style={styles.bottomSection}>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios-filled/50/000000/mac-os.png",
              }}
              style={styles.icon1}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/color/48/000000/google-logo.png",
              }}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButtonBlue}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png",
              }}
              style={styles.icon2}
            />
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text style={styles.footerText}>
          By signing or logging in, you agree to the{" "}
          <Text style={styles.link}>Terms and Conditions</Text> of service and{" "}
          <Text style={styles.link}>Privacy Policy</Text>.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  skipbutton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
    zIndex: 10,
  },
  skiptext: {
    fontSize: 18,
    color: "black",
    fontWeight: "500",
  },
  imageContainer: {
    width: "100%",
    height: "60%", // taller
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
    justifyContent: "flex-end",
    paddingBottom: 20,
    backgroundColor: "#8b8989ff", // ✅ solid gray instead of gradient
  },

  titleContainer: {
    marginVertical: 20,
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    color: "white",
  },
  signInButton: {
    width: "90%",
    height: 55,
    backgroundColor: "#D82424",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  signInText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  dividerContainer: {
    marginBottom:100,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: "90%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  orText: {
    
    marginHorizontal: 10,
    color: "#0000008F",
    fontWeight: "600",
  },
  bottomSection: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    alignItems: "center",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginVertical: 20,
  },
  socialButton: {
    width: 90,
    height: 50,
    backgroundColor: "#fff",
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  socialButtonBlue: {
    width: 90,
    height: 50,
    backgroundColor: "#00A2FD",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
  },
  icon1: {
    width: 30,
    height: 30,
    tintColor: "black",
  },
  icon2: {
    width: 30,
    height: 30,
    tintColor: "white",
  },
  footerText: {
    fontSize: 12,
    color: "black",
    textAlign: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  link: {
    color: "red",
    textDecorationLine: "underline",
  },
});
