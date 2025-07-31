import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Linking,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TwoFactorAuthentication({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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

        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>*** Change Pin</Text>
        </TouchableOpacity>

        <View style={styles.separator} />

        <TouchableOpacity style={styles.optionRow}>
          <Ionicons name="bulb-outline" size={20} color="#000" style={{ marginRight: 8 }} />
          <View>
            <Text style={styles.optionTitle}>Add Recovery Email</Text>
            <Text style={styles.optionSubtext}>Add an email address incase you forget your pin.</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.buttonWrapperFixed}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Security')}>
          <Text style={styles.buttonText}>Turn Off</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
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
    marginBottom: 30,
  },
  learnMore: {
    color: '#4E46B4',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
    color: '#000',
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
    color: '#000',
  },
  optionSubtext: {
    fontSize: 12,
    color: '#0000008F',
    fontFamily: 'DM',
    marginTop: 2,
  },
  separator: {
    height: 1,
    backgroundColor: '#E2E2E2',
    marginVertical: 10,
  },
  buttonWrapperFixed: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    backgroundColor: '#fff',
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
