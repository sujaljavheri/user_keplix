import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function TwoFactorScreen({ navigation }) {
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

      <Text style={styles.description}>
        For extra security, turn on two-step verification, which will require a PIN when registering your phone number with Keplix again.
        <Text style={styles.learnMore} onPress={() => Linking.openURL('https://example.com')}> Learn more</Text>
      </Text>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('EnableTwoFactor')}
        >
          <Text style={styles.buttonText}>Turn On</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

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
    marginBottom: 30,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#0000008F',
    fontFamily: 'DM',
    paddingHorizontal: 10,
  },
  learnMore: {
    color: '#4E46B4',
  },
  buttonWrapper: {
    marginTop: 'auto',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4E46B4',
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
