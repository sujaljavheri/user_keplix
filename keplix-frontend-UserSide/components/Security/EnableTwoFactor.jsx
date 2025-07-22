import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function EnableTwoFactor({ navigation }) {
  const [pin, setPin] = useState(['', '', '', '', '', '']);

  const handleChange = (value, index) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Move to next input if not last and input is filled
    if (value && index < 5) {
      const nextInput = `pin${index + 1}`;
      refs[nextInput].focus();
    }
  };

  const refs = {};

  const isComplete = pin.every((val) => val !== '');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Two-Factor Authentication</Text>

      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="checkbox-multiple-marked-outline" size={40} color="#4E46B4" />
      </View>

      <Text style={styles.description}>Enter your new 6 digit pin.</Text>

      <View style={styles.pinContainer}>
        {pin.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (refs[`pin${index}`] = ref)}
            style={[styles.pinBox, digit ? styles.filled : styles.empty]}
            maxLength={1}
            keyboardType="numeric"
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
          />
        ))}
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[styles.button, isComplete ? styles.buttonEnabled : styles.buttonDisabled]}
          disabled={!isComplete}
          onPress={() => navigation.navigate('AddEmail')}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const BOX_SIZE = 48;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 20,
    marginBottom: 40,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'DM',
    color: '#000',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#0000008F',
    fontFamily: 'DM',
    marginBottom: 20,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 40,
  },
  pinBox: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 8,
    fontFamily: 'DM',
  },
  filled: {
    borderColor: '#4E46B4',
    color: '#000',
  },
  empty: {
    borderColor: '#E2E2E2',
    color: '#000',
  },
  buttonWrapper: {
    marginTop: 'auto',
    marginBottom: 20,
  },
  button: {
    borderRadius: 70,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonEnabled: {
    backgroundColor: '#4E46B4',
  },
  buttonDisabled: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
  },
});
