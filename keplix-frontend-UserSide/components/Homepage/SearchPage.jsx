import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchPage ({navigation}) {
  const [recentSearches, setRecentSearches] = useState([
    'Gearbox Repair',
    'Styling',
  ]);
  const [searchInput, setSearchInput] = useState('');

  const removeSearchItem = (item) => {
    setRecentSearches(recentSearches.filter((search) => search !== item));
  };

  const handleSearch = () => {
    if (searchInput.trim().toLowerCase() === 'engine repair') {
      navigation.navigate('ProviderList');
    }
  };
  
  const featuredCategories = [
    { name: 'Detailing', icon: 'brush-outline' },
    { name: 'Repairs', icon: 'construct-outline' },
    { name: 'Car wash', icon: 'car-outline' },
    { name: 'Accessories', icon: 'sparkles-outline' },
    { name: 'Inspection', icon: 'search-outline' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="search any service"
          placeholderTextColor="#888"
          value={searchInput}
          onChangeText={setSearchInput}
          onSubmitEditing={handleSearch}
        />
        <Ionicons name="search-outline" size={22} color="#888" style={styles.searchIcon} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured</Text>
          <View style={styles.categoryContainer}>
            {featuredCategories.slice(0, 3).map((category, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.categoryPill}
                onPress={() => navigation.navigate('ProviderList')}
              >
                <Ionicons name={category.icon} size={16} color="#000" />
                <Text style={styles.categoryText}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.categoryContainer}>
            {featuredCategories.slice(3).map((category, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.categoryPill}
                onPress={() => navigation.navigate('ProviderList')}
              >
                <Ionicons name={category.icon} size={20} color="#000" />
                <Text style={styles.categoryText}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.recentSearchesSection}>
          <Text style={styles.sectionTitle}>Recent searches</Text>
          
          {recentSearches.map((item, index) => (
            <View key={index} style={styles.searchItem}>
              <View style={styles.searchItemLeft}>
                <Ionicons name="time-outline" size={24} color="#000" />
                <Text style={styles.searchText}>{item}</Text>
              </View>
              <TouchableOpacity onPress={() => removeSearchItem(item)}>
                <Text style={styles.removeText}>remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
   marginTop:10,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor:"#E2E2E2",
    borderWidth:2,
    borderRadius: 70,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontFamily: "DM",
  },
  searchIcon: {
    marginLeft: 10,
  },
  featuredSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 15,
    color: '#333',
    fontFamily: "DM",
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E2E2E2',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
    color: '#000',
    fontFamily: "DM",
  },
  recentSearchesSection: {
    marginBottom: 20,
  },
  searchItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    marginLeft: 15,
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
    fontFamily: "DM",
  },
  removeText: {
    fontSize: 14,
    color: '#634dd9',
    fontFamily: "DM",
  },
});