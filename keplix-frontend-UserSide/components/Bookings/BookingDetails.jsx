import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  Modal,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function BookingDetails({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [bookingData, setBookingData] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false); // for popup

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      setTimeout(() => {
        const dummyData = {
          services: ["Engine Repair", "Engine Repair"],
          tokenNumber: 15,
          shopName: "Dwarka mor service",
          date: "26 June 2024",
          time: "4:30PM",
          location: "7 km, Location addressssss....",
          paymentMode: "Debit card",
          paymentCard: "xxxx xxxx xxxx 1234",
          paymentAmount: "₹10,499",
        };

        setBookingData(dummyData);
        setLoading(false);
      }, 1500);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#4E46B4" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.title}>Booking Details</Text>
        </View>

        {/* Services */}
        <View style={styles.bookingCard}>
          {bookingData.services.map((service, idx) => (
            <View key={idx} style={styles.serviceRow}>
              <MaterialCommunityIcons name="engine" size={22} color="#000" />
              <Text style={styles.serviceText}>{service}</Text>
            </View>
          ))}

          {/* Token Number */}
          <View style={styles.rowBetween}>
            <Text style={styles.label}>Reference Number:</Text>
            <View style={styles.tokenBox}>
              <Text style={styles.tokenText}>{bookingData.tokenNumber}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Shop Details */}
          <Text style={styles.label}>Shop Details:</Text>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.shopName}>{bookingData.shopName}</Text>
              <Text style={styles.subText}>
                {bookingData.date} • {bookingData.time}
              </Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="call-outline" size={22} color="#E63946" />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          {/* Location Details */}
          <Text style={styles.label}>Location Details:</Text>
          <View style={styles.rowBetween}>
            <Text style={styles.subText}>{bookingData.location}</Text>
            <TouchableOpacity>
              <Ionicons name="navigate-outline" size={22} color="#E63946" />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          {/* Payment Details */}
          <Text style={styles.label}>Payment Details:</Text>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.shopName}>{bookingData.paymentMode}</Text>
              <Text style={styles.subText}>{bookingData.paymentCard}</Text>
            </View>
            <View style={styles.priceBox}>
              <Text style={styles.priceText}>{bookingData.paymentAmount}</Text>
            </View>
          </View>
        </View>

        {/* Bottom help box */}
        <View style={styles.helpBox}>
          <Ionicons name="help-circle-outline" size={22} color="#E63946" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.helpText}>Need help with your service?</Text>
            <Text style={styles.subText}>Get help & support</Text>
          </View>
        </View>

        {/* Booking Slot */}
        <View style={styles.slotCard}>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.label}>Date:</Text>
              <Text style={styles.slotText}>{bookingData.date}</Text>
            </View>
            <View>
              <Text style={styles.label}>Time Slot:</Text>
              <Text style={styles.slotText}>{bookingData.time}</Text>
            </View>
          </View>

          {/* Reschedule Button */}
          <TouchableOpacity
            style={styles.rescheduleBtn}
            onPress={() => navigation.navigate("RescheduleBooking")}
          >
            <Ionicons name="calendar-outline" size={20} color="#fff" />
            <Text style={styles.rescheduleText}>Reschedule Booking</Text>
          </TouchableOpacity>
        </View>

        {/* Cancel Booking */}
        <View style={styles.cancelCard}>
          <Text style={styles.subText}>
            You can cancel your booking till 1 hour before appointment and
            you’ll receive a confirmation.
          </Text>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() => setShowCancelModal(true)}
          >
            <Ionicons name="close-circle-outline" size={20} color="#E63946" />
            <Text style={styles.cancelText}>Cancel Booking</Text>
          </TouchableOpacity>
        </View>

        {/* Done Button */}
        <TouchableOpacity style={styles.doneBtn}>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
            Done
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Cancel Modal */}
      <Modal
        transparent
        animationType="fade"
        visible={showCancelModal}
        onRequestClose={() => setShowCancelModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>
              Are you sure you want to cancel your booking?
            </Text>
            <TouchableOpacity
              style={styles.confirmBtn}
              onPress={() => {
                setShowCancelModal(false);
                navigation.navigate("CancelBooking");
              }}
            >
              <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  icon: {
    fontSize: 24,
    borderColor: "#E2E2E2",
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    marginRight: 10,
  },
  title: { fontSize: 20, fontWeight: "600" },

  bookingCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 10,
    borderColor: "#ccc",
    borderWidth: 1.5,
    borderRadius: 16,
    padding: 15,
  },

  serviceRow: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  serviceText: { marginLeft: 10, fontSize: 16, fontWeight: "500" },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },

  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
    marginBottom: 5,
  },

  tokenBox: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  tokenText: { fontSize: 16, fontWeight: "600" },

  shopName: { fontSize: 16, fontWeight: "500" },
  subText: { fontSize: 14, color: "#666" },

  priceBox: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  priceText: { fontSize: 15, fontWeight: "600" },

  divider: {
    height: 1,
    backgroundColor: "#E2E2E2",
    marginVertical: 10,
  },

  helpBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 15,
    borderColor: "#E2E2E2",
    borderWidth: 1,
  },
  helpText: { fontSize: 15, fontWeight: "600" },

  slotCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 15,
    borderColor: "#ccc",
    borderWidth: 1.5,
    borderRadius: 16,
    padding: 15,
  },
  slotText: { fontSize: 16, fontWeight: "600" },

  rescheduleBtn: {
    flexDirection: "row",
    backgroundColor: "#1E9E6A",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    marginTop: 15,
  },
  rescheduleText: { color: "#fff", fontSize: 15, fontWeight: "600", marginLeft: 5 },

  cancelCard: {
    marginHorizontal: 20,
    marginTop: 20,
    borderColor: "#ccc",
    borderWidth: 1.5,
    borderRadius: 16,
    padding: 15,
    backgroundColor: "#fff",
  },
  cancelBtn: {
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: "#E63946",
    borderRadius: 10,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  cancelText: { color: "#E63946", fontSize: 15, fontWeight: "600", marginLeft: 5 },

  doneBtn: {
    backgroundColor: "#E63946",
    borderRadius: 50,
    marginHorizontal: 20,
    marginVertical: 25,
    padding: 15,
    alignItems: "center",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 25,
    width: "80%",
    alignItems: "center",
  },
  modalText: { fontSize: 16, fontWeight: "500", textAlign: "center", marginBottom: 20 },
  confirmBtn: {
    backgroundColor: "#E63946",
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
