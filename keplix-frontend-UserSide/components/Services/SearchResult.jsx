import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ServiceCard = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.serviceCard} onPress={onPress}>
    <View style={styles.iconContainer}>
      <Ionicons name={icon} size={34} color="#000" />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </Text>
    </View>
  </TouchableOpacity>
);

export default function SearchResult({ navigation }) {
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

      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Engine"
          placeholderTextColor="#0000008F"
        />
        <Ionicons name="search-outline" size={24} color="#0000008F" />
      </View>

      <View style={styles.servicesContainer}>
        <ServiceCard
          icon="car"
          title="Engine Repair"
          onPress={() => navigation.navigate('EngineRepairDetail')}
        />
        <ServiceCard
          icon="construct"
          title="Engine Customization"
          onPress={() => navigation.navigate('EngineRepairDetail')}
        />
        <ServiceCard
          icon="cart"
          title="Buy Engine"
          onPress={() => navigation.navigate('EngineRepairDetail')}
        />
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
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E2E2E2',
    borderRadius: 37,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#0000008F',
    fontWeight: '500',
    fontFamily: 'DM',
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
    borderColor: '#E2E2E2',
    borderWidth: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginBottom: 40,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'DM',
    marginBottom: 5,
  },
  description: {
    fontSize: 13,
    color: '#0000008F',
    fontWeight: '400',
    fontFamily: 'DM',
  },
});
