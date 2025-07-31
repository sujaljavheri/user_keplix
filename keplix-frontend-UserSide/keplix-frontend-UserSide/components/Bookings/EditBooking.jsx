import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EditBooking ({ navigation }){
  const [modalVisible, setModalVisible] = useState(false);

  const CancelConfirmationModal = () => (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <TouchableOpacity onPress={() => setModalVisible(false)}>   
        <Ionicons name="close-outline" style={styles.closeIcon} />
          </TouchableOpacity>
        <View style={styles.modalContent}>
            
          <Text style={styles.modalText}>
            Are you sure you want to cancel your booking?
          </Text>
          <TouchableOpacity
            style={styles.modalCancelButton}
            onPress={() => navigation.navigate('CancelBooking')}
          >
            <Text style={styles.modalCancelButtonText}>Cancel Booking</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Ionicons name={"arrow-back-outline"} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate("HamburgerMenu")}>
                    <Ionicons name="menu-outline" style={styles.icon} />
                    </TouchableOpacity>
                  </View>

      <Text style={styles.title}>Edit Booking</Text>

      <View style={styles.serviceContainer}>
        <View style={styles.serviceDetails}>
          <Text style={styles.serviceName}>Dwarka mor service</Text>
          <View style={styles.serviceRow}>
            <Text style={styles.serviceLabel}>Service: </Text>
            <Text style={styles.serviceType}>Engine Repair</Text>
          </View>
          <TouchableOpacity style={styles.locationButton}>
            <Ionicons name="location" size={20} color="white" />
            <Text style={styles.locationButtonText}>See location</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/images/p1.png')}
          style={styles.serviceImage}
        />
      </View>

      <Text style={styles.bookingSlotTitle}>Booked Slot:</Text>
      <View style={styles.bookingDetailsCard}>
        <View style={styles.detailsGrid}>
          <View style={styles.detailColumn}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Date:</Text>
              <Text style={styles.detailValue}>26 June 2024</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Time Slot:</Text>
              <Text style={styles.detailValue}>4:30 PM</Text>
            </View>
          </View>
          
          <View style={styles.detailColumn}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Payment:</Text>
              <Text style={styles.detailValue}>Debit card</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Distance:</Text>
              <Text style={styles.detailValue}>7KM away</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.rescheduleButton} onPress={()=> navigation.navigate("RescheduleBooking")}>
          <Ionicons name="calendar" size={20} color="white" />
          <Text style={styles.rescheduleButtonText}>Reschedule Booking</Text>
        </TouchableOpacity>
      </View>

      {/* Note Section */}
      <View style={styles.noteSection}>
        <Text style={styles.noteLabel}>Note:</Text>
        <Text style={styles.noteText}>
          You can cancel your booking till 1 hour before appointment and you'll receive a confirmation.
        </Text>
      </View>

      {/* Cancel Button */}
      <TouchableOpacity 
        style={styles.cancelButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.cancelButtonText}>Cancel Booking</Text>
      </TouchableOpacity>

      <CancelConfirmationModal />
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
    gap:"75%",
  },
  icon: {
    fontSize: 30,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
   closeIcon: {
    padding: 5,
    fontSize: 24,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "DM",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  serviceDetails: {
    flex: 1,
    marginRight: 5,
  },
  serviceName: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: "DM",
    marginBottom: 5,
  },
  serviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  serviceLabel: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: "DM",
    color: 'gray',
  },
  serviceType: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: "DM",
  },
  locationButton: {
    backgroundColor: '#40A69F',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 70,
    alignSelf: 'flex-start',
  },
  locationButtonText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: "DM",
    color: 'white',
    marginLeft: 5,
  },
  serviceImage: {
    width: 140,
    height: 120,
    borderRadius: 16,
  },
  bookingDetailsCard: {
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 24,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  bookingSlotTitle: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: "DM",
    color:"#0000008F",
    marginHorizontal: 20,
     marginVertical: 10,
  },
  detailsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  detailColumn: {
    flex: 1,
  },
  detailItem: {
    marginBottom: 15,
  },
  detailLabel: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: "DM",
    color:"#0000008F",
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: "DM",
  },
  rescheduleButton: {
    backgroundColor: '#40A69F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 8,
  },
  rescheduleButtonText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: "DM",
  },
  noteSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  noteLabel: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: "DM",
    marginBottom: 5,
  },
  noteText: {
     color:"#0000008F",
     fontSize: 16,
    fontWeight: '500',
    fontFamily: "DM",
  },
  cancelButton: {
    backgroundColor: '#4E46B4',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 70,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: "DM",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(49, 49, 49, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalCancelButton: {
    backgroundColor: '#4E46B4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 70,
    width: '100%',
    marginBottom: 10,
  },
  modalCancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: "DM",
    textAlign: 'center',
  },
});

