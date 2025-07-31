import React, { useState } from "react"; 
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Payment1({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Payment</Text>
      <Text style={styles.subtitle}> Select payment method</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Fontisto name="credit-card" size={20} color="#000" style={styles.menuIcon} />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuText}>Debit / Credit Card</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Payment2")}>
            <MaterialIcons name="keyboard-arrow-right" style={styles.dropdownIcon} />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Payment5")}>
          <FontAwesome name="bank" size={25} color="#000" style={styles.menuIcon} />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuText}>Net Banking</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Payment5")}>
            <MaterialIcons name="keyboard-arrow-right" style={styles.dropdownIcon} />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Payment4")}>
          <FontAwesome5 name="rupee-sign" size={30} color="#000" style={styles.menuIcon} />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuText}>UPI</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Payment4")}>
            <MaterialIcons name="keyboard-arrow-right" style={styles.dropdownIcon} />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("PaymentSuccess")}>
          <MaterialCommunityIcons name="cash" size={40} color="#000" style={styles.menuIcon} />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuText}>Cash on Delivery</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("PaymentSuccess")}>
            <MaterialIcons name="keyboard-arrow-right" style={styles.dropdownIcon} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("Payment1")}>
        <Text style={styles.addButtonText}>Pay ₹10,499</Text>
      </TouchableOpacity>
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
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    fontWeight: '500',
    fontFamily: 'DM',
    marginLeft: 20,
  },
  title: {
    fontWeight: '500',
    fontSize: 24,
    fontFamily: 'DM',
    marginLeft: 23,
  },
  menuContainer: {
    flex: 1,    
  },
  menuItem: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    paddingVertical: 15, 
    paddingHorizontal: 15,
    width:"92%",
    marginLeft:15, 
    borderColor: "#E2E2E2", 
    borderWidth: 2, 
    borderRadius: 16, 
    marginBottom: 20, 
    backgroundColor: "#fff", 
  },
  menuIcon: {
    marginRight: 10,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuText: {
    fontSize: 20, 
    fontWeight: "500", 
    color: "#1E1E1E",
    fontFamily: "DM", 
  },
  menusubText: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.56)", 
    fontWeight: "500",
    fontFamily: "DM", 
  },
  dropdownIcon: {
    width: 20,
    height: 30,
    fontSize: 18,
    lineHeight: 26,
    color: "rgba(0, 0, 0, 0.56)",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(0, 0, 0, 0.56)",
    borderWidth: 1.5,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  addButton: {
    backgroundColor: "#0000008F",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    width: "90%",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "DM", 
  },
});
