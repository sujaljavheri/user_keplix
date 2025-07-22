import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"

export default function SignUpPhone({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isPhoneValid = /^\d{10}$/.test(phoneNumber);
  const isFormValid = phoneNumber.trim() && isPhoneValid;

  const handleSendOtp = () => {
    setSubmitted(true);
    if (isFormValid) {
      navigation.navigate("SendOtp");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>
        You will receive an OTP for verification once you enter your phone number
      </Text>

      <View>
        <Text style={styles.enter}>Enter your phone number</Text>
        <TextInput
          style={[
            styles.input,
            submitted && !isFormValid && { borderColor: 'red' },
          ]}
          placeholder="+91"
          placeholderTextColor="#aaa"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          maxLength={10}
        />
      </View>

      <TouchableOpacity
        style={[styles.button, isFormValid && { backgroundColor: 'red' }]}
        onPress={handleSendOtp}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Send Otp</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.createAccountText}>or Sign up using E-mail</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        By signing or logging in, you agree to the{' '}
        <Text style={styles.link}>Terms and Conditions</Text> of service and{' '}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  backcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  icon: {
    fontSize: 30,
    color:'white',
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 50,
  },
  text: {
    fontSize: 24,
    marginRight: 30,
    color: "white",
    fontFamily: 'DM',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 32,
    marginBottom: 10,
    fontFamily: 'DM',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: '#0000008F',
    marginBottom: 20,
    fontFamily: 'DM',
    color: 'white',
  },
  enter: {
    fontSize: 16,
    color: '#0000008F',
    marginBottom: 10,
    fontFamily: 'DM',
    color: 'white',
  },
  input: {
    height: 50,
    color: 'white',
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 70,
    marginBottom: 280,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: 'DM',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 70,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  createAccountText: {
    borderRadius: 70,
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    padding: 15,
    fontFamily: 'DM',
  },
  footerText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
    padding: 20,
    fontFamily: 'DM',
  },
  link: {
    color: 'red',
    textDecorationLine: 'underline',
    fontFamily: 'DM',
  },
});
