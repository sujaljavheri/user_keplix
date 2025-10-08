import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
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
  // Dummy user data (replace with backend fetched data later)
  const [user, setUser] = useState({
    name: "Nithish Kumar",
    phone: "+91 72838338393",
    image: require("../../assets/images/3.jpeg"),
  });

  // Example for future backend fetch
  useEffect(() => {
    // fetchUserData().then(data => setUser(data));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Red Header with Profile Image */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" style={styles.icon} />
          </TouchableOpacity>

          <View style={styles.profileWrapper}>
            <TouchableOpacity onPress={()=> navigation.navigate("UserProfile")}>
              <Image source={user.image} style={styles.profileImage} />
            <TouchableOpacity style={styles.editIcon}>
              <Ionicons name="pencil" size={18} color="#fff" />
            </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <Text style={styles.profileName}>{user.name}</Text>
          <Text style={styles.profilePhone}>{user.phone}</Text>
        </View>

        {/* Settings List */}
        <View style={styles.settingsList}>
          <SettingsItem
            icon="card"
            title="Payment Methods"
            navigation={navigation}
            targetScreen="UpdatePayment"
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

        {/* Bottom Actions */}
        <View style={styles.bottomActions}>
          <TouchableOpacity style={styles.deleteButton}
          onPress={() => navigation.replace("Deleted")}
          >
            <Text style={styles.deleteButtonText}>Delete Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutButton}
          onPress={() => navigation.replace("SignIn")}
          >
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  icon: {
    fontSize: 20,
    color:"#fff",
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
    marginRight: "83%",
    marginTop: 10,
  },

  header: {
    backgroundColor: "#D91E18",
    alignItems: "center",
    paddingTop: 20,
    position: "relative",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileWrapper: {
    position: "relative",
    marginTop: 20,
  },
  profileImage: {
    top: 90,
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: "#fff",
  },
  editIcon: {
    top: 80,
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#D91E18",
    padding: 6,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
  },
  profileName: {
    top: 80,
    marginTop: 12,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  profilePhone: {
    top: 80,
    fontSize: 15,
    color: "#444",
    marginTop: 4,
  },
  settingsList: {
    marginTop: 90,
  },
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  settingsItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  settingsItemText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  bottomActions: {
    marginTop: 30,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  deleteButton: {
    borderWidth: 1.5,
    borderColor: "#D91E18",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 14,
  },
  deleteButtonText: {
    color: "#D91E18",
    fontSize: 16,
    fontWeight: "600",
  },
  logoutButton: {
    backgroundColor: "#D91E18",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
