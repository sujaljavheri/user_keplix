import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MenuItem = ({ icon, title, onPress, showBorder = true }) => (
  <TouchableOpacity
    style={[styles.menuItem, showBorder && styles.menuItemBorder]}
    onPress={onPress}
  >
    <View style={styles.menuContent}>
      <View style={styles.leftContent}>
        <Ionicons name={icon} size={24} color="black" />
        <Text style={styles.menuText}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" style={styles.dropdownIcon} />
    </View>
  </TouchableOpacity>
);

export default function Security({ navigation }) {
  const handleChangePasswordPress = () => {
    navigation.navigate('ChangePassword');
  };

  const handleTwoFactorAuthPress = () => {
    navigation.navigate('TwoFactorAuth'); 
  };

  const handlePrivacyPolicyPress = () => {
    navigation.navigate('PrivacyPolicy'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.icon}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitle}>Security Settings</Text>


      <View style={styles.menuContainer}>
        <MenuItem 
          icon="ellipsis-horizontal"
          title="Change Password"
          onPress={handleChangePasswordPress}
        />
        <MenuItem 
          icon="shield-checkmark"
          title="Two-Factor Authentication"
          onPress={handleTwoFactorAuthPress}
        />
        <MenuItem 
          icon="document-lock"
          title="Privacy Policy"
          onPress={handlePrivacyPolicyPress}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 20,
  },
  icon: {
    fontSize: 30,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 16,
    color: '#0000008F',
    fontFamily: 'DM',
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  menuItemBorder: {
    borderBottomWidth: 2,
    borderBottomColor: '#E2E2E2',
  },
  menuContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 20,
    marginLeft: 12,
    color: '#000',
    fontFamily: 'DM',
  },
  dropdownIcon: {
    width:20,
    height: 30,
    fontSize: 18,
    lineHeight:26,
    color: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(0, 0, 0, 0.56)",
    borderWidth: 1.5,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
});