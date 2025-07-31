import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PaymentConfirmation = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" style={styles.closeIcon} />
        </TouchableOpacity>
      </View>

      

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.cardContainer} > 
        <View style={styles.statusContainer}>
          <Ionicons name="checkmark-circle" style={styles.checkIcon} />
          <Text style={styles.statusText}>Payment Success!</Text>
          <Text style={styles.amount}>₹10,499</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.detailsContainer}>
          <TextRow label="Trxn Number" value="000085752257" />
          <TextRow label="Payment Time" value="18-09-2024, 8:39PM" />
          <TextRow label="Payment Method" value="Debit Card" />
          <TextRow label="Sender Name" value="Nithish Kumar" />
          <View style={styles.divider} />
          <TextRow label="Amount" value="₹10,513" />
          <TextRow label="Processing Fee" value="₹14.00" />
        </View>
        </View>
       
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("BookingConfirmation")}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Download receipt</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const TextRow = ({ label, value }) => (
  <View style={styles.textRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    alignItems: 'flex-start',
  },
  closeIcon: {
    fontSize: 24,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  content: {
    paddingBottom: 20,
  },
  cardContainer: { 
    paddingVertical: 15, 
    paddingHorizontal: 15,
    width:"92%",
    marginLeft:15, 
    borderColor: "#E2E2E2", 
    borderWidth: 2, 
    borderRadius: 16, 
    marginBottom: 20, 
    padding: 20,
  },
  statusContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  checkIcon: {
    fontSize: 60,
    color: '#40A69F',
    marginBottom: 10,
  },
  statusText: {
    fontSize: 18,
    color: '#4E46B4',
    fontFamily: 'DM',
    fontWeight: '500',
    marginBottom: 5,
  },
  amount: {
    fontSize: 24,
    fontFamily: 'DM',
    fontWeight: '500',
    color: '#000',
  },
  detailsContainer: {
    borderRadius: 12,
    paddingVertical: 20,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: '#888',
    fontFamily: 'DM',
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    color: '#000',
    textAlign: 'right',
    fontFamily: 'DM',
    fontWeight: '500',
  },
  divider: {
    height: 2,
    backgroundColor: '#E2E2E2',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#4E46B4',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'DM',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderColor: '#E2E2E2',
    borderWidth: 1,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#0000008F',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'DM',
  },
});

export default PaymentConfirmation;
