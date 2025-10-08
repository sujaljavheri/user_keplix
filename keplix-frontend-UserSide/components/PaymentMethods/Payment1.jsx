import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.title}>Payments</Text>
        </View>

        {/* Section 1 Heading */}
        <Text style={styles.sectionTitle}>Credit & Debit Cards</Text>

        {/* Add Card Details */}
        <TouchableOpacity
          style={styles.paymentItem}
          onPress={() => navigation.navigate("Payment2")}
        >
          <View style={styles.iconTextRow}>
            <Fontisto name="credit-card" size={18} color="#D70000" />
            <Text style={styles.paymentText}>Add Card Details</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color="#D70000"
          />
        </TouchableOpacity>

        {/* Section 2 Heading */}
        <Text style={styles.sectionTitle}>Credit & Debit Cards</Text>

        {/* UPI Apps */}
        <TouchableOpacity
          style={styles.paymentItem}
          onPress={() => navigation.navigate("Payment4")}
        >
          <View style={styles.iconTextRow}>
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={22}
              color="#D70000"
            />
            <Text style={styles.paymentText}>UPI Apps</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#000" />
        </TouchableOpacity>

        {/* Cash on Delivery */}
        <TouchableOpacity
          style={styles.paymentItem}
          onPress={() => navigation.navigate("PaymentSuccess")}
        >
          <View style={styles.iconTextRow}>
            <MaterialCommunityIcons name="cash" size={24} color="#D70000" />
            <Text style={styles.paymentText}>Cash on Delivery</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#000" />
        </TouchableOpacity>

        {/* Net Banking */}
        <TouchableOpacity
          style={styles.paymentItem}
          onPress={() => navigation.navigate("Payment5")}
        >
          <View style={styles.iconTextRow}>
            <FontAwesome name="university" size={20} color="#D70000" />
            <Text style={styles.paymentText}>Net Banking</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#000" />
        </TouchableOpacity>

        {/* Bill Summary */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Bill Summary</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Price</Text>
            <Text style={styles.summaryValue}>₹1,500</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Discount</Text>
            <Text style={styles.summaryValue}>-₹0</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Additional fees</Text>
            <Text style={styles.summaryValue}>₹0</Text>
          </View>

          <View style={styles.separator} />

          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalValue}>₹1,500</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// 🔽 Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 16,
  },
  icon: {
    width: 46, 
    height: 46,
    fontSize: 30,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 6,
    marginRight: 10,
  },
  
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8,
    color: "#000",
  },
  paymentItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  iconTextRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentText: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
    color: "#000",
  },
  summaryContainer: {
    margin: 16,
    borderRadius: 10,
    borderColor: "#E2E2E2",
    borderWidth: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  summaryTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 12,
    color: "#000",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: "#000",
  },
  summaryValue: {
    fontSize: 14,
    color: "#000",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#D70000",
  },
});
