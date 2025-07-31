import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const Footer = ({ navigation }) => {
  const route = useRoute(); //Get current active route name

  const NavItem = ({ icon, text, targetScreen }) => {
    const isActive = route.name === targetScreen;

    return (
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate(targetScreen)}
      >
        <View style={[styles.iconWrapper, isActive && styles.activeIcon]}>
          <Ionicons
            name={icon}
            size={24}
            color={isActive ? "white" : "gray"}
          />
        </View>
        <Text style={[styles.navText, isActive && styles.activeNavText]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.bottomNav}>
      <NavItem icon="home" text="Home" targetScreen="Homepage" />
      <NavItem icon="grid" text="Services" targetScreen="ServicesCard" />
      <NavItem icon="document-text" text="Bookings" targetScreen="BookingList" />
      <NavItem icon="person" text="Profile" targetScreen="Profile" />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  navItem: {
    alignItems: "center",
  },
  iconWrapper: {
    padding: 10,
    borderRadius: 25,
  },
  activeIcon: {
    backgroundColor: "red",
  },
  navText: {
    color: "#666",
    fontSize: 12,
    marginTop: 5,
  },
  activeNavText: {
    color: "red",
  },
});
