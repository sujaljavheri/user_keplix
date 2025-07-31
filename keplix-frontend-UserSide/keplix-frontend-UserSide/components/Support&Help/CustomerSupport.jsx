import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomerSupport({ navigation }) {
  const options = [
    { icon: 'phone', title: 'Call us', subtitle: 'Customer care available 24/7' },
    { icon: 'message-text-outline', title: 'Message us', subtitle: 'Chat available from 8 AM – 12 AM IST' },
    { icon: 'alert-circle-outline', title: 'Raise complaint', subtitle: 'Will receive a confirmation once registered' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back-outline" size={30} color="#000" />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Customer Support</Text>
        <Text style={styles.description}>For any query regarding Keplix service. Please contact to us</Text>

        {options.map((item, index) => (
          <TouchableOpacity key={index} style={styles.optionBox}>
            <View style={styles.optionContent}>
              <MaterialCommunityIcons name={item.icon} size={24} color="#000" style={styles.optionIcon} />
              <View>
                <Text style={styles.optionTitle}>{item.title}</Text>
                <Text style={styles.optionSubtitle}>{item.subtitle}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    marginBottom: 20,
  },
  backButton: {
    marginTop:10,
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
    marginBottom: 10,
    fontFamily: 'DM',
    color: '#0000008F',
  },
  description: {
    fontSize: 14,
    color: '#0000008F',
    marginBottom: 20,
    fontFamily: 'DM',
  },
  optionBox: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    marginRight: 15,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
    color: '#000',
  },
  optionSubtitle: {
    fontSize: 12,
    color: '#0000008F',
    marginTop: 2,
    fontFamily: 'DM',
  },
});
