import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function Payment3({ navigation }) {
  const [otp, setOtp] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [showCheckbox, setShowCheckbox] = useState(true);
  const [resendModalVisible, setResendModalVisible] = useState(false);
  const [invalidOtpModalVisible, setInvalidOtpModalVisible] = useState(false);
  const correctOtp = "123456";

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

  const handleResendOtp = () => {
    setResendModalVisible(true);
    // Simulate OTP resend
    setTimeout(() => {
      setResendModalVisible(false);
    }, 2000);
  };

  const handlePayment = () => {
    if (otp === correctOtp) {
      navigation.navigate("PaymentSuccess");
    } else {
      setInvalidOtpModalVisible(true);
      setShowCheckbox(false); // Remove checkbox when invalid OTP is entered
    }
  };

  const closeInvalidOtpModal = () => {
    setInvalidOtpModalVisible(false);
    setOtp(""); // Clear the OTP field
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Payment</Text>
      <Text style={styles.subtitle}>Select payment method</Text>

      <View style={styles.menuContainer}>
        <View style={styles.menuItem}>
          <Fontisto name="credit-card" size={20} color="#000" style={styles.menuIcon} />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuText}>Debit / Credit Card</Text>
          </View>
        </View>

        <Text style={styles.otpTitle}>OTP to xxxxxx3245</Text>
        <TextInput
          style={styles.otpInput}
          placeholder="Enter 6-digit OTP"
          keyboardType="numeric"
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
        />
        <TouchableOpacity onPress={handleResendOtp}>
          <Text style={styles.resendButton}>Resend OTP</Text>
        </TouchableOpacity>

        {showCheckbox && CheckboxComponent()}
      </View>

      <TouchableOpacity
        style={[
          styles.payButton,
          otp.length === 6 ? styles.payButtonEnabled : styles.payButtonDisabled,
        ]}
        disabled={otp.length !== 6}
        onPress={handlePayment}
      >
        <Text style={styles.payButtonText}
         onPress={() => navigation.navigate("PaymentSuccess")}
         >Pay ₹10,499</Text>
      </TouchableOpacity>

      {/* Resend OTP Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={resendModalVisible}
        onRequestClose={() => setResendModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>OTP Sent</Text>
            <Text style={styles.modalText}>
              A new OTP has been sent to xxxxxx3245
            </Text>
          </View>
        </View>
      </Modal>

      {/* Invalid OTP Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={invalidOtpModalVisible}
        onRequestClose={closeInvalidOtpModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitleError}>Invalid OTP</Text>
            <Text style={styles.modalText}>
              The OTP you entered is incorrect. Please try again.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={closeInvalidOtpModal}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  title: {
    fontWeight: "500",
    fontSize: 24,
    marginLeft: 23,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    marginLeft: 20,
  },
  menuContainer: {
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
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
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
  },
  otpTitle: {
    fontSize: 16,
    marginBottom: 10,
    color: "#666",
  },
  otpInput: {
    height: 50,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  resendButton: {
    borderRadius: 8,
    textAlign: 'center',
    color: '#4E46B4',
    fontSize: 16,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    padding: 15,
    fontFamily: 'DM',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#000",
  },
  checkmark: {
    color: "#fff",
    fontSize: 14,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#0000008F",
    fontFamily: 'DM',
  },
  payButton: {
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    width: "90%",
  },
  payButtonEnabled: {
    backgroundColor: "#4E46B4",
  },
  payButtonDisabled: {
    backgroundColor: "#0000008F",
  },
  payButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#4E46B4',
  },
  modalTitleError: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#FF3B30',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  modalButton: {
    backgroundColor: '#4E46B4',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});