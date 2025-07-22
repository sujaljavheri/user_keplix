import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CreditCard = ({ cardNumber, bankName, expiryDate }) => (
  <View style={styles.cardContainer}>
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardNumber}>{cardNumber}</Text>
        <TouchableOpacity>
          <Ionicons name="close" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.bankName}>{bankName}</Text>
        <View style={styles.expiryContainer}>
          <Text style={styles.expiryLabel}>Exp. date</Text>
          <Text style={styles.expiryDate}>{expiryDate}</Text>
        </View>
      </View>
    </View>
  </View>
);

const BankOption = ({ bankName, isSelected, onSelect }) => (
  <TouchableOpacity 
    style={[styles.bankOption, isSelected && styles.selectedBankOption]} 
    onPress={() => onSelect(bankName)}
  >
    <Text style={styles.bankOptionText}>{bankName}</Text>
    {isSelected && (
      <Ionicons name="checkmark-circle" size={24} color="#002B80" />
    )}
  </TouchableOpacity>
);

const MenuItem = ({ icon, title, onPress, showBorder = true, isExpanded, navigation, menuType }) => {
  const [selectedBank, setSelectedBank] = useState('State Bank of India');

  const handleBankSelect = (bankName) => {
    setSelectedBank(bankName);
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.menuItem, showBorder && styles.menuItemBorder]}
        onPress={onPress}
      >
        <View style={styles.menuContent}>
          <View style={styles.leftContent}>
            {icon === 'card' && (
              <Ionicons name="card" size={24} color="black" />
            )}
            {icon === 'bank' && (
              <Ionicons name="business" size={24} color="black" />
            )}
            {icon === 'upi' && (
              <Text style={styles.rupeesIcon}>₹</Text>
            )}
            <Text style={styles.menuText}>{title}</Text>
          </View>
          <View style={styles.rightIcon}>
            <Ionicons 
              name={isExpanded ? "chevron-up" : "chevron-forward"} 
              style={styles.dropdownIcon} 
            />
          </View>
        </View>
      </TouchableOpacity>
      
      {isExpanded && menuType === 'card' && (
        <View style={styles.dropdownContent}>
          <View style={styles.cardsRow}>
            <CreditCard 
              cardNumber="xxxx xxxx xxxx 1234"
              bankName="HDFC Bank"
              expiryDate="08 / 26"
            />
            <TouchableOpacity style={styles.addBankButton} onPress={()=> navigation.navigate("UpdatePayment2")}>
              <Ionicons name="add" size={24} color="black" />
              <Text style={styles.addBankText}>Add bank</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.defaultPaymentContainer}>
            <Ionicons name="checkbox" size={24} color="black" />
            <Text style={styles.defaultPaymentText}>Set Default payment method</Text>
          </TouchableOpacity>
        </View>
      )}
      
      {isExpanded && menuType === 'bank' && (
        <View style={styles.dropdownContent}>
          <ScrollView style={styles.bankOptionsContainer}>
            <BankOption 
              bankName="State Bank of India" 
              isSelected={selectedBank === "State Bank of India"} 
              onSelect={handleBankSelect} 
            />
            <BankOption 
              bankName="HDFC Bank" 
              isSelected={selectedBank === "HDFC Bank"} 
              onSelect={handleBankSelect} 
            />
            <BankOption 
              bankName="ICICI Bank" 
              isSelected={selectedBank === "ICICI Bank"} 
              onSelect={handleBankSelect} 
            />
            <BankOption 
              bankName="Axis Bank" 
              isSelected={selectedBank === "Axis Bank"} 
              onSelect={handleBankSelect} 
            />
            <BankOption 
              bankName="Bank of Baroda" 
              isSelected={selectedBank === "Bank of Baroda"} 
              onSelect={handleBankSelect} 
            />
            <BankOption 
              bankName="Punjab National Bank" 
              isSelected={selectedBank === "Punjab National Bank"} 
              onSelect={handleBankSelect} 
            />
            <BankOption 
              bankName="Other" 
              isSelected={selectedBank === "Other"} 
              onSelect={handleBankSelect} 
            />
          </ScrollView>
          <TouchableOpacity style={styles.defaultPaymentContainer}>
            <Ionicons name="checkbox" size={24} color="black" />
            <Text style={styles.defaultPaymentText}>Set Default payment method</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default function UpdatePayment({ navigation }) {
  const [expandedItem, setExpandedItem] = useState('card');

  const handleItemPress = (itemType) => {
    if (itemType === 'upi') {
      navigation.navigate("UpdatePayment3");
      return;
    }
    setExpandedItem(expandedItem === itemType ? null : itemType);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.icon}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitle}>Update Payment Methods</Text>
      <View style={styles.menuContainer}>
        <MenuItem 
          icon="card"
          title="Debit / Credit Card"
          onPress={() => handleItemPress('card')}
          isExpanded={expandedItem === 'card'}
          navigation={navigation}
          menuType="card"
        />
        <MenuItem 
          icon="bank"
          title="Net Banking"
          onPress={() => handleItemPress('bank')}
          isExpanded={expandedItem === 'bank'}
          navigation={navigation}
          menuType="bank"
        />
        <MenuItem 
          icon="upi"
          title="UPI"
          onPress={() => handleItemPress('upi')}
          isExpanded={expandedItem === 'upi'}
          showBorder={false}
          navigation={navigation}
          menuType="upi"
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
  rightIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rupeesIcon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  dropdownIcon: {
    width: 20,
    height: 30,
    fontSize: 18,
    lineHeight: 26,
    color: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(0, 0, 0, 0.56)",
    borderWidth: 1.5,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  dropdownContent: {
    padding: 16,
  },
  cardsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  cardContainer: {
    flex: 1,
  },
  card: {
    backgroundColor: '#002B80',
    borderRadius: 16,
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  cardNumber: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'DM',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  bankName: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'DM',
  },
  expiryContainer: {
    alignItems: 'flex-end',
  },
  expiryLabel: {
    color: 'white',
    fontSize: 12,
    opacity: 0.7,
    fontFamily: 'DM',
  },
  expiryDate: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'DM',
  },
  addBankButton: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBankText: {
    fontSize: 14,
    color: '#000',
    marginTop: 4,
    fontFamily: 'DM',
  },
  defaultPaymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    gap: 8,
  },
  defaultPaymentText: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.56)',
    fontFamily: 'DM',
  },
  bankOptionsContainer: {
    maxHeight: 250,
  },
  bankOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  selectedBankOption: {
    backgroundColor: 'rgba(0, 43, 128, 0.05)',
  },
  bankOptionText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'DM',
  },
});