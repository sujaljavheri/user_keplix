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
import Fontisto from "react-native-vector-icons/Fontisto";

const savedCards = {
  "1234567890123456": {
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
      [field]: value.replace(/[^0-9]/g, ""),
    }));
  };

  const isOtpEnabled =
    cardDetails.cardNumber.length === 16 &&
    cardDetails.cvv.length === 3 &&
    cardDetails.validThru.length === 7 &&
    cardDetails.name.trim() !== "";

  const CheckboxComponent = () => (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={() => setIsSaved(!isSaved)}
    >
      <View style={[styles.checkbox, isSaved && styles.checkboxChecked]}>
        {isSaved && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.checkboxText}>Save details for future</Text>
    </TouchableOpacity>
  );

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
                <Fontisto
                  name="credit-card"
                  size={20}
                  color="#000"
                  style={styles.menuIcon}
                />
                <Text style={styles.menuText}>Debit / Credit Card</Text>
              </View>

              <Text
                style={[
                  styles.label,
                  focusedField === "cardNumber" && styles.focusedLabel,
                ]}
              >
                Card Number
              </Text>
              <TextInput
                style={[
                  styles.input,
                  focusedField === "cardNumber" && styles.focusedInput,
                  errorField === "cardNumber" && styles.errorInput,
                ]}
                placeholder="xxxx-xxxx-xxxx-xxxx"
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
                <Text
                  style={[
                    styles.label,
                    focusedField === "cvv" && styles.focusedLabel,
                  ]}
                >
                  CVV/CVC No.
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    focusedField === "cvv" && styles.focusedInput,
                  ]}
                  placeholder="OOO"
                  maxLength={3}
                  keyboardType="numeric"
                  value={cardDetails.cvv}
                  onChangeText={(text) => handleInputChange("cvv", text)}
                  onFocus={() => setFocusedField("cvv")}
                  onBlur={() => setFocusedField(null)}
                />
              </View>
              <View style={[styles.inputGroup, styles.halfWidth]}>
                <Text
                  style={[
                    styles.label,
                    focusedField === "validThru" && styles.focusedLabel,
                  ]}
                >
                  Valid Thru
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    focusedField === "validThru" && styles.focusedInput,
                  ]}
                  placeholder="mm/yyyy"
                  maxLength={7}
                  keyboardType="numeric"
                  value={cardDetails.validThru}
                  onChangeText={(text) => handleInputChange("validThru", text)}
                  onFocus={() => setFocusedField("validThru")}
                  onBlur={() => setFocusedField(null)}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text
                style={[
                  styles.label,
                  focusedField === "name" && styles.focusedLabel,
                ]}
              >
                Full Name
              </Text>
              <TextInput
                style={[
                  styles.input,
                  focusedField === "name" && styles.focusedInput,
                ]}
                placeholder="Name"
                value={cardDetails.name}
                onChangeText={(text) =>
                  setCardDetails((prev) => ({ ...prev, name: text }))
                }
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />
            </View>

            <TouchableOpacity
              style={[
                styles.sendOtpButton,
                isOtpEnabled && styles.sendOtpButtonEnabled,
              ]}
              disabled={!isOtpEnabled} 
            >
              <Text style={styles.buttonText} 
              onPress={() => navigation.navigate("Payment3")}>
                Send OTP</Text>
            </TouchableOpacity>

            <CheckboxComponent />
          </View>
        </ScrollView>
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
    width:"92%",
    marginLeft:15, 
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
    marginBottom: 20,
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
    borderWidth: 1,
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
  halfWidth: {
    width: "48%",
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
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 4,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
  },
  checkboxText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'DM',
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
  sendOtpButtonEnabled: {
    backgroundColor: "#40A69F",
  },
});
