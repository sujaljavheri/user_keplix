import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Payment5({ navigation }) {
  const [focusedField, setFocusedField] = useState(null);
  const [errorField, setErrorField] = useState(null);
  const [selectedBank, setSelectedBank] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cvv: "",
    validThru: "",
    name: "",
  });

  const [bankListVisible, setBankListVisible] = useState(true); // Control visibility of bank list

  const banks = ["HDFC Bank", "IDBI Bank", "SBI Bank", "CANARA Bank"];

  const handleCardNumberChange = (text) => {
    const formattedText = text.replace(/[^0-9]/g, "");
    const isValid = savedCards[formattedText] !== undefined;
    setErrorField(isValid ? null : "cardNumber");
  };

  const handleBankSelect = (bank, index) => {
    setCardDetails({ ...cardDetails, name: bank });
    setSelectedBank(index);
    setBankListVisible(false); // Hide bank list
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name={"arrow-back-outline"} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Payment</Text>
        <Text style={styles.subtitle}>Select payment method</Text>

        <View style={styles.cardContainer}>
          <View style={styles.inputGroup}>
            <View style={styles.menuItem}>
              <FontAwesome name="bank" size={25} color="#000" style={styles.menuIcon} />
              <Text style={styles.menuText}>Net Banking</Text>
            </View>

            <Text
              style={[
                styles.label,
                focusedField === "cardNumber" && styles.focusedLabel,
              ]}
            >
              Select Bank from the List
            </Text>
            <TextInput
              style={[
                styles.input,
                focusedField === "cardNumber" && styles.focusedInput,
                errorField === "cardNumber" && styles.errorInput,
              ]}
              placeholder="Select Bank"
              keyboardType="numeric"
              value={cardDetails.name}
              onChangeText={handleCardNumberChange}
              maxLength={16}
              onFocus={() => setFocusedField("cardNumber")}
              onBlur={() => setFocusedField(null)}
            />
            {errorField === "cardNumber" && (
              <Text style={styles.errorText}>Invalid Card Number</Text>
            )}
          </View>

          {bankListVisible && (
            <View style={styles.bankContainer}>
              {banks.map((bank, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.bankItem,
                    selectedBank === index && styles.bankItemSelected,
                  ]}
                  onPress={() => handleBankSelect(bank, index)}
                >
                  <Text
                    style={[
                      styles.bankText,
                      selectedBank === index && styles.bankTextSelected,
                    ]}
                  >
                    {bank}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <TouchableOpacity
            style={[
          styles.addButton,
          selectedBank !== null && styles.proceedSelected,
        ]}
        onPress={() => navigation.navigate("PaymentSuccess")}
          >
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.addButton,
          selectedBank !== null && styles.addButtonSelected,
        ]}
         onPress={() => navigation.navigate("PaymentSuccess")}
      >
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
    fontSize: 24,
    fontFamily: 'DM',
    fontWeight: '500',
    marginLeft: 23,
  },
  cardContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: "92%",
    marginLeft: 15,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 16,
    marginBottom: 20,
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  menuIcon: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#1E1E1E",
    fontFamily: "DM",
  },
  label: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 5,
    fontWeight: "500",
    fontFamily: "DM",
  },
  input: {
    borderWidth: 2,
    borderColor: "#E2E2E2",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "DM",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sendOtpButton: {
    backgroundColor: "#0000008F",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "DM",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "DM",
  },
  addButton: {
    backgroundColor: '#0000008F',
    borderRadius: 70,
    paddingVertical: 15,
    marginHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
    width: "90%",
  },
  addButtonSelected: {
    backgroundColor: "rgba(78, 70, 180, 1)", 
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  focusedInput: {
    borderColor: "#4E46B4",
  },
  focusedLabel: {
    color: "#4E46B4",
  },
  proceedSelected: {
    backgroundColor: "#40A69F",
  },
  bankContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#E2E2E2",
    marginBottom: 10,
    width: "100%",
  },
  bankItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: "#F9F9F9",
    marginBottom: 10,
  },
  bankItemSelected: {
    backgroundColor: "rgba(78, 70, 180, 1)",
  },
  bankText: {
    fontSize: 16,
    color: "#1E1E1E",
    fontWeight: "500",
  },
  bankTextSelected: {
    color: "#fff",
  },
});
