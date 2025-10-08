import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";

const savedCards = {
  1234567890123456: {
    name: "Nithish Kumar",
    validThru: "01/2024",
  },
};

export default function Payment2({ navigation }) {
  const [isSaved, setIsSaved] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [errorField, setErrorField] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cvv: "",
    validThru: "",
    name: "",
  });

  const handleCardNumberChange = (text) => {
    const formattedText = text.replace(/[^0-9]/g, "");
    const isValid = savedCards[formattedText] !== undefined;
    setErrorField(isValid ? null : "cardNumber");
    setCardDetails((prev) => ({
      ...prev,
      cardNumber: formattedText,
      ...(isValid ? savedCards[formattedText] : { name: "", validThru: "" }),
    }));
  };

  const handleInputChange = (field, value) => {
    setCardDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const isOtpEnabled =
    cardDetails.cardNumber.length === 16 &&
    cardDetails.cvv.length === 3 &&
    cardDetails.validThru.length >= 4 &&
    cardDetails.name.trim() !== "";

  const CheckboxComponent = () => (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={() => setIsSaved(!isSaved)}
    >
      <View style={[styles.checkbox, isSaved && styles.checkboxChecked]}>
        {isSaved && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.checkboxText}>Save card details</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back-outline" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Card Details</Text>
        </View>

        {/* Purple Card Preview */}
        <View style={styles.cardWrapper}>
          <View style={styles.cardPreview}>
            {/* Card Top Row */}
            <View style={styles.cardTopRow}>
              <Fontisto name="credit-card" size={28} color="#FFD700" />
              <View style={styles.mastercardLogo}>
                <View style={[styles.circle, { backgroundColor: "#EB001B" }]} />
                <View
                  style={[
                    styles.circle,
                    { backgroundColor: "#F79E1B", marginLeft: -15 },
                  ]}
                />
              </View>
            </View>

            {/* Card Number */}
            <Text style={styles.cardNumber}>
              {cardDetails.cardNumber
                ? cardDetails.cardNumber.replace(/.(?=.{4})/g, "*")
                : "**** **** **** 4765"}
            </Text>

            {/* Card Bottom Row */}
            <View style={styles.cardRow}>
              <Text style={styles.cardName}>
                {cardDetails.name ? cardDetails.name : "Nithish Kumar"}
              </Text>
              <Text style={styles.cardExpiry}>
                {cardDetails.validThru ? cardDetails.validThru : "11/23"}
              </Text>
            </View>
          </View>
        </View>

        {/* Card Details Form */}
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Credit & Debit Cards</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name on Card</Text>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={cardDetails.name}
              onChangeText={(text) =>
                setCardDetails((prev) => ({ ...prev, name: text }))
              }
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Card Number</Text>
            <TextInput
              style={[
                styles.input,
                errorField === "cardNumber" && styles.errorInput,
              ]}
              placeholder="1234 5678 9012 3456"
              keyboardType="numeric"
              value={cardDetails.cardNumber}
              onChangeText={handleCardNumberChange}
              maxLength={16}
              onFocus={() => setFocusedField("cardNumber")}
              onBlur={() => setFocusedField(null)}
            />
            {errorField === "cardNumber" && (
              <Text style={styles.errorText}>Invalid Card Number</Text>
            )}
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>Expiry Date</Text>
              <TextInput
                style={styles.input}
                placeholder="MM/YY"
                maxLength={5}
                keyboardType="numeric"
                value={cardDetails.validThru}
                onChangeText={(text) => handleInputChange("validThru", text)}
                onFocus={() => setFocusedField("validThru")}
                onBlur={() => setFocusedField(null)}
              />
            </View>
            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>CVV</Text>
              <TextInput
                style={styles.input}
                placeholder="123"
                maxLength={3}
                keyboardType="numeric"
                value={cardDetails.cvv}
                onChangeText={(text) => handleInputChange("cvv", text)}
                onFocus={() => setFocusedField("cvv")}
                onBlur={() => setFocusedField(null)}
              />
            </View>
          </View>

          <CheckboxComponent />

          {/* Send OTP Button */}
          <TouchableOpacity
            style={[
              styles.sendOtpButton,
              isOtpEnabled && styles.sendOtpButtonEnabled,
            ]}
            disabled={!isOtpEnabled}
            onPress={() => navigation.navigate("Payment3")}
          >
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    alignItems: "center",
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
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    marginRight: 40, // balance arrow space
  },

  cardWrapper: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  cardPreview: {
    backgroundColor: "#8e24aa",
    borderRadius: 20,
    width: "85%",
    height: 200,
    padding: 20,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  mastercardLogo: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  cardTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardNumber: {
    fontSize: 22,
    color: "#fff",
    letterSpacing: 3,
    marginVertical: 10,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  cardExpiry: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },

  formContainer: {
    borderColor: "#E2E2E2",
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    padding: 16,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
    color: "#000",
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfWidth: {
    width: "48%",
  },

  sendOtpButton: {
    backgroundColor: "#ccc",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  sendOtpButtonEnabled: {
    backgroundColor: "#E53935",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 4,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  checkmark: { color: "#fff", fontSize: 14 },
  checkboxText: { fontSize: 14, color: "#666" },

  errorInput: { borderColor: "red" },
  errorText: { color: "red", fontSize: 12, marginTop: 4 },
});
