import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen({ navigation }) {
  const [phone, setphone] = useState("");
  const isFilled = phone.trim() == '';   //phone.trim().length === 10 && /^\d{10}$/.test(phone.trim()); add this to isFilled
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagelogo}>
        <View style={styles.imagePlaceholder}></View>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Let's get your car <Text style={styles.highlight}>back </Text>
          <Text style={[styles.title, { fontSize: "20", color: "red" }]}>
            on the road
          </Text>
        </Text>
      </View>

      <View style={styles.phoneInputContainer}>
        <TouchableOpacity style={styles.countrySelector}>
          <Image
            source={{ uri: "https://flagcdn.com/w40/in.png" }}
            style={styles.flagIcon}
          />
          <Text style={styles.countryCodeText}>+91</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.phoneInput}
          placeholder="Enter phone number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setphone}
        />
      </View>

      {/* <TouchableOpacity style={styles.signInButton} onPress={()=> navigation.navigate("SignIn")}>
        <Text style={styles.signInText}>Enter</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={[
          styles.signInButton,
          isFilled ? { backgroundColor: "red" } : { backgroundColor: "grey" },
        ]}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.signInText}>Continue with email </Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton1}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/50/000000/mac-os.png",
            }}
            style={[styles.icon1, { tintColor: "black" }]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{
              uri: "https://img.icons8.com/color/48/000000/google-logo.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton2}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/50/000000/facebook-new.png",
            }}
            style={[styles.icon2, { tintColor: "white" }]}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>
        By signing or logging in, you agree to the{" "}
        <Text style={styles.link}>Terms and Conditions</Text> of service and{" "}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imagelogo: {
    width: 260,
    height: 200,
    backgroundColor: "#ededed",
    borderRadius: 20,
    marginTop: 150,
    marginBottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  phoneInputContainer: {
    width: 360,
    height: 60,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#000",
  },

  countrySelector: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },

  flagIcon: {
    width: 24,
    height: 16,
    borderRadius: 2,
    marginRight: 6,
  },

  countryCodeText: {
    color: "white",
    fontSize: 16,
    fontFamily: "DM",
  },

  phoneInput: {
    flex: 1,
    color: "white",
    fontSize: 16,
    fontFamily: "DM",
  },

  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "DM",
  },
  imagePlaceholder: {
    width: 30,
    height: 20,
    backgroundColor: "#ededed",
    borderRadius: 20,
    marginBottom: 30,
  },
  titleContainer: {
    width: "90%",
    marginTop: 10,
    marginBottom: 40,
    alignSelf: "center",
    paddingLeft: 20,
    fontFamily: "DM",
  },
  title: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "500",
    fontFamily: "DM",
    color: "white",
  },
  highlight: {
    // color: '#4E46B4',
    color: "white",
    fontFamily: "DM",
  },
  subtitleContainer: {
    marginBottom: 40,
    alignSelf: "flex-start",
    paddingLeft: 20,
    fontFamily: "DM",
  },
  subtitle: {
    fontSize: 24,
    color: "#0000008F",
    fontFamily: "DM",
  },
  signInButton: {
    width: 370,
    height: 60,
    // backgroundColor: '#4E46B4',
    backgroundColor: "#D82424",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  signInText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "DM",
  },
  dividerContainer: {
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
    fontFamily: "DM",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginVertical: 20,
  },
  socialButton: {
    width: 100,
    height: 50,
    backgroundColor: "#fff",
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  socialButton1: {
    width: 100,
    height: 50,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  socialButton2: {
    width: 100,
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
  },
  icon2: {
    width: 30,
    height: 30,
  },
  footerText: {
    fontSize: 15,
    color: "white",
    marginBottom: 30,
    textAlign: "center",
    marginTop: 20,
    padding: 20,
    fontFamily: "DM",
  },
  link: {
    color: "red",
    textDecorationLine: "underline",
  },
});
