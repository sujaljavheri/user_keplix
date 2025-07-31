import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ChangePassword1({ navigation }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureEntryNew, setSecureEntryNew] = useState(true);
  const [secureEntryConfirm, setSecureEntryConfirm] = useState(true);

  const isValid =
    newPassword.length >= 8 && confirmPassword.length >= 8;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.backcontainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name={"arrow-back-outline"} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Change Password</Text>

        <View>
          <Text style={styles.enter}>Enter your new password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input1}
              placeholder="Eg: a62gjf7hi"
              placeholderTextColor="#aaa"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={secureEntryNew}
            />
            <TouchableOpacity onPress={() => setSecureEntryNew(prev => !prev)}>
              <Ionicons
                name={secureEntryNew ? "eye-off" : "eye"}
                style={styles.iconInsideInput}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.enter}>Confirm new password </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input1}
            placeholder="Eg: a62gjf7hi"
            placeholderTextColor="#aaa"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={secureEntryConfirm}
          />
          <TouchableOpacity onPress={() => setSecureEntryConfirm(prev => !prev)}>
            <Ionicons
              name={secureEntryConfirm ? "eye-off" : "eye"}
              style={styles.iconInsideInput}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: isValid ? '#4E46B4' : '#0000008F' }
            ]}
            disabled={!isValid}
            onPress={() => navigation.navigate('PasswordReseted')}
          >
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  icon: {
    fontSize: 30,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 50,
  },
  title: {
    fontWeight: '500',
    fontSize: 28,
    marginBottom: 30,
    fontFamily: 'DM',
  },
  enter: {
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
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  input1: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#000',
    fontFamily: 'DM',
  },
  iconInsideInput: {
    fontSize: 24,
    marginLeft: 10,
  },
  buttonWrapper: {
    marginTop: 'auto',
    paddingBottom: 10,
  },
  button: {
    borderRadius: 70,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
  },
});
