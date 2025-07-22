import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ReviewPage({ route, navigation }) {
  const [note, setNote] = useState('');
  const { date, time } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Summary</Text>

      <View style={styles.summaryContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Service</Text>
          <Text style={styles.value}>Engine Repair</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Provider</Text>
          <Text style={styles.value}>Dwarka Mor Service</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Distance</Text>
          <View style={styles.distanceContainer}>
            <Ionicons name="location" size={20} color="black" />
            <Text style={styles.value}>7 km away</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>{date}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Time</Text>
          <Text style={styles.value}>{time}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Total Price</Text>
          <Text style={styles.priceValue}>₹10,499</Text>
        </View>
      </View>

      <View style={styles.noteSection}>
        <Text style={styles.noteLabel}>Any note (optional):</Text>
        <TextInput
          style={styles.noteInput}
          placeholder="add here"
          value={note}
          onChangeText={setNote}
          multiline
        />
      </View>

      <TouchableOpacity style={styles.proceedButton} onPress={() => navigation.navigate("Payment1")}>
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 30,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 20,
    fontFamily: 'DM',
  },
  summaryContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  label: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'DM',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  priceValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4E46B4',
    fontFamily: 'DM',
  },
  noteSection: {
    marginTop: 24,
  },
  noteLabel: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
    fontFamily: 'DM',
  },
  noteInput: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 12,
    padding: 16,
    height: 100,
    textAlignVertical: 'top',
    fontFamily: 'DM',
  },
  proceedButton: {
    backgroundColor: '#4E46B4',
    padding: 16,
    borderRadius: 70,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
  },
});