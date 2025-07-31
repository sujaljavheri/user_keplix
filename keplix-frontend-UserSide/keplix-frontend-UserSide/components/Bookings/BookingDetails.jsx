import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Switch,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function BookingDetails({ navigation }) {
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

           
<View style={[styles.bookingCard ,{marginTop: Number(20)}]}>
  <View style={styles.marginBottom}>
  <View style={styles.serviceRow}>
    <View style={styles.serviceLeft}>
      
      <MaterialCommunityIcons
        name="bell-outline"
        size={28}
        color="#000"
      />
      <Text style={styles.serviceText}>
        Reminder
      </Text>
    </View>
    <Switch
      trackColor={{ false: "#e0e0e0", true: "#4E46B4" }}
      thumbColor={notificationsEnabled ? "#ffffff" : "#ffffff"}
      ios_backgroundColor="#e0e0e0"
      onValueChange={() =>
        setNotificationsEnabled(!notificationsEnabled)
      }
      value={notificationsEnabled}
      style={styles.largeSwitch}
    />
  </View>
  </View>
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
        <View style={styles.divider} />
        <Text style={styles.shopDetailsLabel}>Shop Details:</Text>
        <Text style={styles.shopName}>Dwarka mor service</Text>

        <View style={styles.detailsRow}>
          <View style={styles.dateLocation}>
            <Text style={styles.dateText}>26 June 2024 • 4:30PM</Text>
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.priceText}>7KM away</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <Text style={styles.shopDetailsLabel}>Payment Details:</Text>
        <Text style={styles.shopName}>Debit card</Text>

        <View style={styles.detailsRow}>
          <View style={styles.dateLocation}>
            <Text style={styles.dateText}>xxxx xxxx xxxx 1234</Text>
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.priceText}>₹10,499</Text>
          </View>
        </View>
      </View>

      {/* Bottom Button */}
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Text style={styles.bottomButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  
  largeSwitch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
    marginLeft: 24,
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
    marginLeft: 20,
    fontFamily: "DM",
  },
  notificationContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginHorizontal: 20,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 16,
    marginBottom: 20,
  },
  notificationLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationText: {
    marginLeft: 10,
  },
  notificationTitle: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "DM",
  },
  notificationSubtitle: {
    fontSize: 14,
    color: "#0000008F",
    fontWeight: "500",
    fontFamily: "DM",
  },
  bookingCard: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 24,
    padding: 15,
  },
  serviceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  serviceLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  serviceText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "DM",
  },
  referenceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 80,
  },
  labelText: {
    fontSize: 14,
    color: "#0000008F",
    fontWeight: "500",
    fontFamily: "DM",
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
    fontWeight: "500",
    fontFamily: "DM",
  },
  shopDetailsLabel: {
    fontSize: 14,
    color: "#0000008F",
    fontWeight: "500",
    fontFamily: "DM",
    marginBottom: 5,
  },
  shopName: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "DM",
    marginBottom: 10,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  dateLocation: {
    flex: 1,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "DM",
    marginBottom: 5,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  distanceText: {
    fontSize: 16,
    color: "#0000008F",
    fontWeight: "500",
    fontFamily: "DM",
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
    fontWeight: "500",
    fontFamily: "DM",
  },
  calendarButton: {
    backgroundColor: "#40A69F",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 8,
  },
  calendarButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "DM",
    marginLeft: 8,
  },
  bottomButton: {
    backgroundColor: "#4E46B4",
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 70,
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  bottomButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "DM",
  },
  divider: {
    height: 2,
    backgroundColor: "#E2E2E2",
    marginVertical: 10,
  },
});
