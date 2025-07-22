import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Modal,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AddEmail({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = () => {
    setModalVisible(false);
    navigation.navigate('TwoFactorConfirm');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Two-Factor Authentication</Text>

      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="email" size={40} color="#fff" style={styles.emailIconBackground} />
      </View>

      <Text style={styles.subTitle}>Add email in case you forget your Pin</Text>

      <Text style={styles.description}>
        Two step verification is on. Add an email address to your account to make sure you have access if you forget your pin.
      </Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('UserProfile')}
        >
          <Text style={styles.primaryButtonText}>Add Email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.secondaryButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Close icon moved outside the modal */}
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeIcon}>
              <Ionicons name="close" size={22} color="#000" />
            </TouchableOpacity>
            <Text style={styles.modalText}>
              Are you sure you want to skip from adding email incase you forget your pin. This
              prevents you from losing access if you forget 2FA.
            </Text>
            <Pressable style={styles.confirmButton} onPress={handleConfirm}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 20,
    marginBottom: 40,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'DM',
    color: '#000',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  emailIconBackground: {
    backgroundColor: '#4E46B4',
    padding: 12,
    borderRadius: 12,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
    textAlign: 'center',
    color: '#000',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'DM',
    textAlign: 'center',
    color: '#0000008F',
    marginHorizontal: 10,
    marginBottom: 40,
  },
  buttonGroup: {
    marginTop: 'auto',
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#4E46B4',
    paddingVertical: 15,
    borderRadius: 70,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: '#DADADA',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#8C8C8C',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000080', // Adjusted for more blur effect
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '85%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1, // Make sure the icon stays on top
  },
  modalText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'DM',
    color: '#333',
    textAlign: 'center',
    marginVertical: 40,
    lineHeight: 22,
  },
  confirmButton: {
    backgroundColor: '#4E46B4',
    paddingVertical: 14,
    borderRadius: 70,
    width: '100%',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'DM',
    fontSize: 16,
  },
});
