import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Footer from "../Footer/Footer";

const SettingsItem = ({ icon, title, navigation, targetScreen }) => (
  <TouchableOpacity
    style={styles.settingsItem}
    onPress={() => navigation.navigate(targetScreen)}
  >
    <View style={styles.settingsItemLeft}>
      <Ionicons name={icon} size={22} color="#000" />
      <Text style={styles.settingsItemText}>{title}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#000" />
  </TouchableOpacity>
);

export default function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name={"arrow-back"} size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Menu</Text>
        <View style={{ width: 24 }} /> {/* Spacer for symmetry */}
      </View>

      {/* Profile Card */}
      <TouchableOpacity
        style={styles.profileSection}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <View style={styles.profileInfo}>
          <Image
            source={require("../../assets/images/3.jpeg")}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.profileName}>Nithish Kumar</Text>
            <Text style={styles.profilePhone}>+91 9731013245</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.chevronButton}
          onPress={() => navigation.navigate("UserProfile")}
        >
          <Ionicons name="chevron-forward" size={20} color="#FF0000" />
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Menu Items */}
      <View style={styles.settingsList}>
        <SettingsItem
          icon="card"
          title="Payment Methods"
          navigation={navigation}
          targetScreen="UpdatePayment"
        />
        <SettingsItem
          icon="time-outline"
          title="Booking History"
          navigation={navigation}
          targetScreen="BookingList"
        />
        <SettingsItem
          icon="star"
          title="My Reviews"
          navigation={navigation}
          targetScreen="ReviewList"
        />
        <SettingsItem
          icon="shield"
          title="Security Settings"
          navigation={navigation}
          targetScreen="Security"
        />
        <SettingsItem
          icon="notifications"
          title="Notification Settings"
          navigation={navigation}
          targetScreen="Notification"
        />
        <SettingsItem
          icon="help-circle-outline"
          title="Support & Help"
          navigation={navigation}
          targetScreen="Support"
        />
      </View>

      {/* Footer */}
      {/* <Footer style ={styles.footer} navigation={navigation} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  backButton: {
    padding: 5,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "#E2E2E2",
  },
  chevronButton: {
    width: 34,
    height: 34,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#c7c4c4ff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
},

  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#c7c4c4ff",
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: "#f0f0f0",
    marginRight: 12,
  },
  profileName: {
    fontWeight: "600",
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  profilePhone: {
    marginTop: 2,
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
  },
  settingsList: {
    borderTopWidth: 1,
    borderTopColor: "#E2E2E2",
  },
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#c8b9b9ff",
  },
  settingsItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  settingsItemText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  // Profile container
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16, // bigger padding
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 3,
  },
});
