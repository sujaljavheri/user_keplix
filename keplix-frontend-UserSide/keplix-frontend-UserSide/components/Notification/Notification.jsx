import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Switch,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather, MaterialIcons } from '@expo/vector-icons';

export default function Notification({ navigation }) {
  const [customAlertsEnabled, setCustomAlertsEnabled] = React.useState(false);
  const [emailAlertsEnabled, setEmailAlertsEnabled] = React.useState(false);
  const [smsAlertsEnabled, setSmsAlertsEnabled] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState('An Hour Before');
  const [dropdownExpanded, setDropdownExpanded] = React.useState(false);

  const toggleCustomAlerts = () => {
    const newState = !customAlertsEnabled;
    setCustomAlertsEnabled(newState);
    setShowDropdown(newState);
  };
  
  const toggleEmailAlerts = () => setEmailAlertsEnabled(previousState => !previousState);
  const toggleSmsAlerts = () => setSmsAlertsEnabled(previousState => !previousState);
  
  const toggleDropdown = () => setDropdownExpanded(!dropdownExpanded);
  
  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownExpanded(false);
  };

  // Check if any switch is enabled to determine save button color
  const isSaveEnabled = customAlertsEnabled || emailAlertsEnabled || smsAlertsEnabled;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HamburgerMenu')}>
          <Ionicons name="menu-outline" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.settingsContainer} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerText}>Notifications settings</Text>

        <View style={styles.settingContainer}>
          <View style={styles.iconContainer}>
            <Feather name="alert-circle" size={30} color="black" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.settingTitle}>Custom Alerts</Text>
            <Text style={styles.settingDescription}>Set up custom alerts for bookings</Text>
          </View>
          <Switch
            trackColor={{ false: '#e0e0e0', true: '#4E46B4' }}
            thumbColor={customAlertsEnabled ? '#ffffff' : '#ffffff'}
            ios_backgroundColor="#e0e0e0"
            onValueChange={toggleCustomAlerts}
            value={customAlertsEnabled}
            style={styles.switch}
          />
        </View>

        {showDropdown && (
          <View style={styles.dropdownContainer}>
            <TouchableOpacity 
              style={styles.selectedOption}
              onPress={toggleDropdown}
            >
              <View style={styles.timeIconContainer}>
                <Ionicons name="time-outline" size={24} color="black" />
              </View>
              <Text style={styles.optionText}>{selectedOption}</Text>
              <Ionicons 
                name={dropdownExpanded ? "chevron-up" : "chevron-down"} 
                size={24} 
                color="black" 
                style={styles.dropdownIcon}
              />
            </TouchableOpacity>

            {dropdownExpanded && (
              <View style={styles.optionsContainer}>
                <TouchableOpacity 
                  style={styles.option}
                  onPress={() => selectOption('An Hour Before')}
                >
                  <View style={styles.timeIconContainer}>
                    <Ionicons name="time-outline" size={24} color="black" />
                  </View>
                  <Text style={styles.optionText}>An Hour Before</Text>
                </TouchableOpacity>
                <View style={styles.divider} />
                
                <TouchableOpacity 
                  style={styles.option}
                  onPress={() => selectOption('A Day Before')}
                >
                  <View style={styles.timeIconContainer}>
                    <Ionicons name="time-outline" size={24} color="black" />
                  </View>
                  <Text style={styles.optionText}>A Day Before</Text>
                </TouchableOpacity>
                <View style={styles.divider} />
                
                <TouchableOpacity 
                  style={styles.option}
                  onPress={() => selectOption('3 Hours Before')}
                >
                  <View style={styles.timeIconContainer}>
                    <Ionicons name="time-outline" size={24} color="black" />
                  </View>
                  <Text style={styles.optionText}>3 Hours Before</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}

        <View style={styles.settingContainer}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="email" size={30} color="black" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.settingTitle}>Email Alerts</Text>
            <Text style={styles.settingDescription}>Receive notifications via email?</Text>
            {emailAlertsEnabled && (
              <Text style={styles.statusText}>Email alerts turned on</Text>
            )}
          </View>
          <Switch
            trackColor={{ false: '#e0e0e0', true: '#4E46B4' }}
            thumbColor={emailAlertsEnabled ? '#ffffff' : '#ffffff'}
            ios_backgroundColor="#e0e0e0"
            onValueChange={toggleEmailAlerts}
            value={emailAlertsEnabled}
            style={styles.switch}
          />
        </View>

        <View style={styles.settingContainer}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="chat-bubble" size={30} color="black" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.settingTitle}>SMS Alerts</Text>
            <Text style={styles.settingDescription}>Receive notifications via SMS?</Text>
            {smsAlertsEnabled && (
              <Text style={styles.statusText}>SMS alerts turned on</Text>
            )}
          </View>
          <Switch
            trackColor={{ false: '#e0e0e0', true: '#4E46B4' }}
            thumbColor={smsAlertsEnabled ? '#ffffff' : '#ffffff'}
            ios_backgroundColor="#e0e0e0"
            onValueChange={toggleSmsAlerts}
            value={smsAlertsEnabled}
            style={styles.switch}
          />
        </View>

      </ScrollView>

     <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[
            styles.saveButton, 
            isSaveEnabled ? styles.saveButtonEnabled : styles.saveButtonDisabled
          ]}
          onPress={() => isSaveEnabled && navigation.navigate('Profile')}
          disabled={!isSaveEnabled}
        >
          <Text style={styles.saveButtonText}>Save Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: '75%',
  },
  icon: {
    fontSize: 30,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  settingsContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 10,
  },
  buttonContainer: {
    padding: 15,
    paddingBottom: 25,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: "DM",
    color: '#0000008F',
    marginBottom: 24,
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeIconContainer: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  settingTitle: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: "DM",
    color: 'black',
  },
  settingDescription: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: "DM",
    color: '#777',
    marginTop: 2,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: "DM",
    color: '#4E46B4',
    marginTop: 4,
  },
  switch: {
    transform: [{ scaleX: 1.6 }, { scaleY: 1.6 }],
    marginRight: 10,
  },
  dropdownContainer: {
    marginBottom: 16,
  },
  selectedOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 25,
    padding: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  optionsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginTop: 5,
    overflow: 'hidden',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: "DM",
    flex: 1,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginLeft: 50,
  },
  dropdownIcon: {
    marginRight: 5,
  },
  saveButton: {
    borderRadius: 70,
    padding: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  saveButtonEnabled: {
    backgroundColor: '#4E46B4',
  },
  saveButtonDisabled: {
    backgroundColor: '#0000008F',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: "DM",
  },
});