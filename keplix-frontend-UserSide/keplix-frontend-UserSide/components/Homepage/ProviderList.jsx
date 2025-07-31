import React, { useState,useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Modal,
  Pressable,
  PanResponder,
  Animated
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from "react-native-vector-icons/Foundation";
import Entypo from 'react-native-vector-icons/Entypo';

const CustomSlider = ({ min, max, value, step, onChange }) => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const position = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const newPosition = getPositionFromValue(value);
    position.setValue(newPosition);
  }, [value]);

  const getValueFromPosition = (pos) => {
    const range = max - min;
    const percentage = pos / sliderWidth;
    const value = min + percentage * range;
    const steppedValue = Math.round(value / step) * step;
    return Math.min(max, Math.max(min, steppedValue));
  };

  const getPositionFromValue = (value) => {
    const range = max - min;
    const percentage = (value - min) / range;
    return percentage * sliderWidth;
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const newPosition = Math.min(
        sliderWidth,
        Math.max(0, gestureState.dx + position._value)
      );
      position.setValue(newPosition);
      const newValue = getValueFromPosition(newPosition);
      onChange(newValue);
    },
    onPanResponderRelease: () => {
      const finalValue = getValueFromPosition(position._value);
      onChange(finalValue);
    },
  });

  const ProviderList = () => {
  const route = useRoute();
  const { service } = route.params;
  };

  return (
    <View
      style={styles.sliderContainer}
      onLayout={(event) => setSliderWidth(event.nativeEvent.layout.width)}
    >
      <View style={styles.sliderTrack} />
      <Animated.View
        style={[
          styles.sliderFill,
          { width: position },
        ]}
      />
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.sliderThumb,
          {
            transform: [{ translateX: position }],
          },
        ]}
      />
    </View>
  );
};


export default function ProviderList({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [distance, setDistance] = useState(10);
  const [price, setPrice] = useState(25000);
  const [rating, setRating] = useState(4);
  const [activeFilters, setActiveFilters] = useState([]);

  const providers = [
    {
      id: '1',
      name: 'Dwarka mor service',
      rating: 4.0,
      price: '₹9,499',
      distance: '7 km',
      image: require('../../assets/images/p1.png'),
    },
    {
      id: '2',
      name: 'Shreeji Automotives',
      rating: 3.0,
      price: '₹8,499',
      distance: '14 km',
      image: require('../../assets/images/p2.png'),
    },
    {
      id: '3',
      name: 'Fix My Cars',
      rating: 4.0,
      price: '₹9,799',
      distance: '12 km',
      image: require('../../assets/images/p3.png'),
    },
  ];

  const applyFilters = () => {
    const newFilters = [];
    
    newFilters.push(`${distance}km`);
    newFilters.push(`Below ₹${(price/1000).toFixed(0)}k`);
    newFilters.push(`${rating}.0+ rating`);
    
    setActiveFilters(newFilters);
    setModalVisible(false);
  };

  const removeFilter = (index) => {
    const newFilters = activeFilters.filter((_, i) => i !== index);
    setActiveFilters(newFilters);
  };

  const renderProvider = ({ item }) => (
    <TouchableOpacity style={styles.providerCard} onPress={()=> navigation.navigate("EngineRepairDetail")}>
      <Image source={item.image} style={styles.providerImage} />
      <View style={styles.providerDetails}>
        <Text style={styles.providerName}>{item.name}</Text>
        <View style={styles.ratingRow}>
          <Text style={styles.providerRating}>
            {item.rating}{' '}
            <MaterialIcons name="star" size={16} color="#4E46B4" />
          </Text>
          <Text style={styles.providerDistance}>• {item.distance}</Text>
          <Ionicons name="location" style={[styles.shopIcon]}/>
        </View>
        <Text style={styles.providerPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("HamburgerMenu")}>
          <Ionicons name="menu-outline" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Related Results"
          placeholderTextColor="#0000008F"
        />
        <Ionicons name="search-outline" size={24} color="#0000008F" />
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.resultsText}>
          {providers.length} results • {activeFilters.length} filters applied
        </Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Foundation name="filter" size={24} color="rgba(78, 70, 180, 1)" style={styles.icon1} />
        </TouchableOpacity>
      </View>

      <View style={styles.filtersRow}>
        {activeFilters.map((filter, index) => (
          <TouchableOpacity key={index} style={styles.filterChip}>
            <Text style={styles.filterText}>{filter}</Text>
            <TouchableOpacity onPress={() => removeFilter(index)}>
              <Entypo name="squared-cross" style={styles.icon2}/>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={providers}
        renderItem={renderProvider}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity 
              activeOpacity={1} 
              style={styles.modalContentInner}
              onPress={e => e.stopPropagation()}
            >
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Filter Options</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Ionicons name="close" size={24} color="#000" />
                </TouchableOpacity>
              </View>

              <View style={styles.filterSection}>
                <Text style={styles.filterLabel}>Distance: {distance} km</Text>
                <CustomSlider
                  min={1}
                  max={20}
                  step={1}
                  value={distance}
                  onChange={setDistance}
                />
              </View>

              <View style={styles.filterSection}>
                <Text style={styles.filterLabel}>Price: ₹{price.toLocaleString()}</Text>
                <CustomSlider
                  min={0}
                  max={50000}
                  step={1000}
                  value={price}
                  onChange={setPrice}
                />
              </View>

              <View style={styles.filterSection}>
                <Text style={styles.filterLabel}>Minimum Rating: {rating}.0</Text>
                <View style={styles.ratingContainer}>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <TouchableOpacity
                      key={value}
                      style={[
                        styles.ratingButton,
                        rating === value && styles.selectedRating
                      ]}
                      onPress={() => setRating(value)}
                    >
                      <Text style={[
                        styles.ratingButtonText,
                        rating === value && styles.selectedRatingText
                      ]}>{value}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <TouchableOpacity
                style={styles.applyButton}
                onPress={applyFilters}
              >
                <Text style={styles.applyButtonText}>Apply Filters</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap:"75%",
  },
  icon: {
    fontSize: 30,
    borderColor: "#E2E2E2",
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
    fontWeight: "500",
    fontFamily: "DM",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  icon1: {
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 6,
  },
  icon2: {
    borderRadius: 12,
    fontSize:24,
    color:'#4E46B4',
  },
  shopIcon: {
    fontSize: 20,
    color: "#000",
  },
  resultsText: {
    fontSize: 16,
    color: '#0000008F',
    fontWeight: "500",
    fontFamily: "DM",
    marginBottom: 10,
  },
  filtersRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E2E2E2',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  filterText: {
    fontSize: 16,
    color: '#000',
    fontWeight: "500",
    fontFamily: "DM",
    marginRight: 5,
  },
  listContainer: {
    paddingBottom: 10,
  },
  providerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#E2E2E2',
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#fff',
  },
  providerImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
    marginRight: 10,
  },
  providerDetails: {
    flex: 1,
  },
  providerName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    fontFamily: "DM",
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  providerRating: {
    fontSize: 16,
    color: '#0000008F',
    fontFamily: "DM",
    fontWeight: '500',
    marginRight: 4,
  },
  providerDistance: {
    fontSize: 16,
    color: '#000',
    fontFamily: "DM",
    fontWeight: '500',
  },
  providerPrice: {
    fontSize: 24,
    fontFamily: "DM",
    fontWeight: '500',
    color: '#000',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalContentInner: {
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    fontFamily: "DM",
  },
  filterSection: {
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 10,
    fontFamily: "DM",
  },
  slider: {
    width: '100%',
    height: 40,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  ratingButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E2E2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRating: {
    backgroundColor: '#4E46B4',
    borderColor: '#4E46B4',
  },
  ratingButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  selectedRatingText: {
    color: '#fff',
  },
  applyButton: {
    backgroundColor: '#4E46B4',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: "DM",
  },
  sliderContainer: {
    height: 40,
    justifyContent: 'center',
    position: 'relative',
  },
  sliderTrack: {
    height: 4,
    backgroundColor: '#E2E2E2',
    borderRadius: 2,
  },
  sliderFill: {
    height: 4,
    backgroundColor: '#4E46B4',
    borderRadius: 2,
    position: 'absolute',
  },
  sliderThumb: {
    width: 20,
    height: 20,
    backgroundColor: '#4E46B4',
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    marginLeft: -10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  }
});