import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ChangePassword({navigation}) {
  const [password, setPassword] = useState('');
  const [secureEntryNew, setSecureEntryNew] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(false);

  // Check if password is at least 8 characters
  useEffect(() => {
    setIsValidPassword(password.length >= 8);
  }, [password]);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Change Password</Text>

      <View>
        <Text style={styles.enter}>Enter your current password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Eg: a62gjf7hi"
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureEntryNew}
          />
          <TouchableOpacity onPress={() => setSecureEntryNew((prev) => !prev)}>
            <Ionicons
              name={secureEntryNew ? "eye-off" : "eye"}
              style={styles.iconInsideInput}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity 
        style={[styles.button, isValidPassword && styles.activeButton]} 
        onPress={() => {
          if (isValidPassword) {
            navigation.navigate("ChangePassword1");
          }
        }}
      >
        <Text style={[styles.buttonText, isValidPassword && styles.activeButtonText]}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.createAccountText}>
            Forgot Password
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backcontainer:{
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 40,
  },
  icon: {
    fontSize: 30, 
    borderColor:'#E2E2E2',
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  text: {
    fontSize: 24, 
    marginRight: 30,
    color: "#0000008F",
    fontFamily: 'DM',
  },
  titleContainer: {
    flex: 1, 
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 28,
    marginBottom: 40,
    fontFamily: 'DM',
  },
  enter:{
    fontSize: 16,
    color: '#0000008F',
    marginBottom: 10,
    fontFamily: 'DM',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 70,
    marginBottom: 350,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16, 
    fontFamily: 'DM',
  },
  iconInsideInput: {
    fontSize: 24,
    color: '#0000008F',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#0000008F',
    borderRadius: 70,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  activeButton: {
    backgroundColor: '#4E46B4',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  activeButtonText: {
    color: '#fff',
  },
  createAccountText: {
    borderRadius: 70,
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    padding: 15,
    fontFamily: 'DM',
  },
});