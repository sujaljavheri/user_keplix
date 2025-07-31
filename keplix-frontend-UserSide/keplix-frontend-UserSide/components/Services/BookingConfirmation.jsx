import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Switch } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function BookingConfirmation ({ navigation }){
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
     <View style={styles.header}>
             <TouchableOpacity onPress={() => navigation.goBack()}>
               <Ionicons name={"arrow-back-outline"} style={styles.icon} />
             </TouchableOpacity>
           </View>

      <Text style={styles.title}>Booking Details</Text>

      {/* Notifications Toggle */}
      <View style={styles.notificationContainer}>
        <View style={styles.notificationLeft}>
          <Ionicons name="notifications" size={30} color="black" />
          <View style={styles.notificationText}>
            <Text style={styles.notificationTitle}>Enable Notifications</Text>
            <Text style={styles.notificationSubtitle}>(For the appointment - Optional)</Text>
          </View>
        </View>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: '#D1D1D6', true: '#5856D6' }}
          thumbColor={'#FFFFFF'}
        />
      </View>

      <View style={styles.bookingCard}>
        <View style={styles.serviceRow}>
          <View style={styles.serviceLeft}>
           <MaterialCommunityIcons name="engine" size={28} color="#000" />
            <Text style={styles.serviceText}>Engine Repair</Text>
          </View>
        </View>

        <View style={styles.referenceRow}>
          <Text style={styles.labelText}>Reference Number:</Text>
          <View style={styles.referenceBox}>
            <Text style={styles.referenceText}>1517</Text>
          </View>
        </View>

        <Text style={styles.shopDetailsLabel}>Shop Details:</Text>
        <Text style={styles.shopName}>Dwarka mor service</Text>
        
        <View style={styles.detailsRow}>
          <View style={styles.dateLocation}>
            <Text style={styles.dateText}>26 June 2024 • 4:30PM</Text>
            <View style={styles.locationRow}>
              <Ionicons name="location" size={20} color="#0000008F" />
              <Text style={styles.distanceText}>7 km away</Text>
            </View>
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.priceText}>₹10,499</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.calendarButton}>
          <Ionicons name="calendar" size={20} color="white" />
          <Text style={styles.calendarButtonText}>Add to calendar</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Button */}
      <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('Homepage')}>
        <Text style={styles.bottomButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
  },
  icon: {
    fontSize: 24,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  title: {
    fontWeight: 500,
    fontSize: 32,
    marginBottom: 10,
    marginLeft:20,
    fontFamily: 'DM',
  },
  notificationContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 16,
    marginBottom: 20,
  },
  notificationLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationText: {
    marginLeft: 10,
  
  },
  notificationTitle: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  notificationSubtitle: {
    fontSize: 14,
    color: '#0000008F',
    fontWeight: '500',
    fontFamily: 'DM',
  },
  bookingCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 24,
    padding: 15,
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  serviceLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  referenceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap:80
  },
  labelText: {
    fontSize: 14,
    color: '#0000008F',
    fontWeight: '500',
    fontFamily: 'DM',
  },
  referenceBox: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 70,
    marginLeft: 10,
  },
  referenceText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  shopDetailsLabel: {
    fontSize: 14,
    color: '#0000008F',
    fontWeight: '500',
    fontFamily: 'DM',
    marginBottom: 5,
  },
  shopName: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'DM',
    marginBottom: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  dateLocation: {
    flex: 1,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
    marginBottom: 5,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distanceText: {
    fontSize: 16,
    color: '#0000008F',
    fontWeight: '500',
    fontFamily: 'DM',
    marginLeft: 5,
  },
  priceBox: {
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 70,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  calendarButton: {
    backgroundColor: '#40A69F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 8,
  },
  calendarButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
    marginLeft: 8,
  },
  bottomButton: {
    backgroundColor: '#4E46B4',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 70,
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'DM',
  },
});

