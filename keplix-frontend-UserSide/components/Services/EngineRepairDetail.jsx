import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// Billing Row Component
const BillingRow = ({ label, value }) => (
  <View style={styles.billingRow}>
    <Text style={styles.billingLabel}>{label}</Text>
    <Text style={styles.billingValue}>₹{value}/-</Text>
  </View>
);

// Rating Stars Component
const RatingStars = ({ rating }) => (
  <View style={styles.ratingContainer}>
    {[1, 2, 3, 4, 5].map((star) => (
      <Ionicons
        key={star}
        name={star <= rating ? "star" : "star-outline"}
        size={16}
        color="#D10000"
        style={styles.star}
      />
    ))}
  </View>
);

// Shop Card Component
const ShopCard = ({ name, rating, distance, image }) => (
  <View style={styles.shopCard}>
    <Image source={image} style={styles.shopImage} />
    <Text style={styles.shopName}>{name}</Text>
    <View style={styles.shopDetails}>
      <View style={styles.ratingRow}>
        <Text style={styles.ratingText}>{rating}</Text>
        <RatingStars rating={rating} />
      </View>
      <View style={styles.distanceContainer}>
        <Ionicons name="location" size={12} color="#666" />
        <Text style={styles.distanceText}>{distance} km away...</Text>
      </View>
    </View>
  </View>
);

export default function EngineRepairDetail({ navigation, route }) {
  // Mock Providers Data (Replace later with API)
  const providersData = [
    {
      id: 1,
      name: "Dwarka mor service",
      distance: 7,
      rating: 4,
      image: require("../../assets/images/p1.png"),
      address: "B1-41, Chandan park,\nDwarka mor - 110059",
    },
    {
      id: 2,
      name: "Decaabo cars",
      distance: 10,
      rating: 3,
      image: require("../../assets/images/p4.png"),
      address: "A-22, Sector 9, Delhi",
    },
    {
      id: 3,
      name: "Fix My Cars",
      distance: 18,
      rating: 3,
      image: require("../../assets/images/p5.png"),
      address: "Shop 5, Patel Nagar",
    },
  ];

  const { providerId } = route.params || {};
  const [providers, setProviders] = useState(providersData);
  const [selectedProvider, setSelectedProvider] = useState(
    providers.find((p) => p.id === providerId) || providers[0]
  );

  // Reorder providers when selected changes
  useEffect(() => {
    setProviders((prev) => {
      const reordered = prev.filter((p) => p.id !== selectedProvider.id);
      return [selectedProvider, ...reordered];
    });
  }, [selectedProvider]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("HamburgerMenu")}
          >
            <Ionicons name="menu-outline" style={styles.icon} />
          </TouchableOpacity>
        </View>

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Engine Repair</Text>
          <MaterialCommunityIcons name="engine" size={44} color="#000" />
        </View>

        {/* Description */}
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <View style={styles.bulletPoints}>
          <Text style={styles.bulletPoint}>• lorem ipsum</Text>
          <Text style={styles.bulletPoint}>• lorem ipsum labore et</Text>
          <Text style={styles.bulletPoint}>• lorme ipsum</Text>
        </View>

        {/* Estimated Time */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Estimated Time:</Text>
          <View style={styles.timeChip}>
            <Text style={styles.timeText}>3 Days</Text>
          </View>
        </View>

        {/* Billing Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Billing Details:</Text>
          <View style={styles.billingCard}>
            <BillingRow label="Engine Cost:" value="???" />
            <BillingRow label="Service Cost:" value="???" />
            <BillingRow label="Additional Cost:" value="???" />
            <View style={[styles.billingRow, styles.totalRow]}>
              <Text style={[styles.billingLabel, styles.totaltext]}>
                Total:
              </Text>
              <Text style={[styles.billingValue, styles.totaltext]}>
                ???/-
              </Text>
            </View>
          </View>
        </View>

        {/* Selected Provider */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Provider Information:</Text>
          <Image source={selectedProvider.image} style={styles.providerImage} />
          <View style={styles.providerHeader}>
            <Text style={styles.providerName}>{selectedProvider.name}</Text>
            <View style={styles.distanceChip}>
              <Ionicons name="location" size={12} color="#000" />
              <Text style={styles.kmText}>{selectedProvider.distance} km</Text>
            </View>
          </View>

          <View style={styles.ratingSection}>
            <Text style={styles.ratingLabel}>Ratings:</Text>
            <Text style={styles.ratingValue}>{selectedProvider.rating}</Text>
            <RatingStars rating={selectedProvider.rating} />
          </View>

          <View style={styles.locationSection}>
            <Text style={styles.locationLabel}>Location:</Text>
            <View style={styles.locationContainer}>
              <Text style={styles.address}>{selectedProvider.address}</Text>
              <TouchableOpacity style={styles.locationButton}>
                <Ionicons name="location" size={16} color="#fff" />
                <Text style={styles.locationButtonText}>See location</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.aboutTitle}>About:</Text>
          <Text style={styles.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <View style={styles.bulletPoints}>
            <Text style={styles.bulletPoint}>• lorem ipsum</Text>
            <Text style={styles.bulletPoint}>• lorem ipsum labore et</Text>
            <Text style={styles.bulletPoint}>• lorme ipsum</Text>
          </View>

          <TouchableOpacity
            style={styles.viewMoreButton}
            onPress={() => navigation.navigate("ProviderDetails")}
          >
            <Text style={styles.viewMoreText}>View more details</Text>
            <Ionicons name="arrow-forward" size={16} color="#000" />
          </TouchableOpacity>
        </View>

        {/* More Shops Section */}
        <View style={styles.section}>
          <View style={styles.shopsHeader}>
            <Text style={styles.sectionTitle}>
              More shops offering this service
            </Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {providers
              .filter((p) => p.id !== selectedProvider.id)
              .map((shop) => (
                <TouchableOpacity
                  key={shop.id}
                  onPress={() => setSelectedProvider(shop)}
                >
                  <ShopCard
                    name={shop.name}
                    rating={shop.rating}
                    distance={shop.distance}
                    image={shop.image}
                  />
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Book Service Button */}
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => navigation.navigate("BookSlot")}
      >
        <Text style={styles.bookButtonText}>Book Service</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { flexDirection: "row", alignItems: "center", gap: "75%", padding: 20 },
  icon: { fontSize: 30, borderColor: "#E2E2E2", borderWidth: 2, borderRadius: 50, padding: 5 },
  icon2: { fontSize: 30, borderColor: "#E2E2E2", borderWidth: 2, borderRadius: 50, padding: 5 },
  titleSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 15 },
  title: { fontSize: 32, fontWeight: "500", fontFamily: "DM" },
  description: { paddingHorizontal: 15, fontSize: 14, color: "#0000008F", lineHeight: 20, fontWeight: "400", fontFamily: "DM", width: "95%" },
  bulletPoints: { paddingHorizontal: 15, marginTop: 10 },
  bulletPoint: { color: "#0000008F", marginBottom: 5, fontSize: 14, fontWeight: "400", fontFamily: "DM" },
  section: { padding: 15, marginTop: 10 },
  sectionRow: { flexDirection: "row", alignItems: "center", marginTop: 10, padding: 15 },
  sectionTitle: { fontSize: 18, fontWeight: "500", fontFamily: "DM", marginRight: 10 },
  timeChip: { paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, borderColor: "#E2E2E2", borderWidth: 2, marginLeft: 150 },
  timeText: { color: "#000", fontWeight: "500", fontFamily: "DM" },
  billingCard: { borderColor: "#E2E2E2", borderWidth: 2, padding: 15, borderRadius: 24 },
  billingRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  totalRow: { borderTopWidth: 1, borderTopColor: "#ddd", paddingTop: 10 },
  totaltext: { color: "#D10000", fontWeight: "700" },
  billingLabel: { color: "#666" },
  billingValue: { fontWeight: "500" },
  providerImage: { width: "100%", height: 150, borderRadius: 10, marginBottom: 10 },
  providerHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  providerName: { fontSize: 18, fontWeight: "600", fontFamily: "DM" },
  distanceChip: { flexDirection: "row", alignItems: "center", backgroundColor: "#f5f5f5", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15 },
  kmText: { marginLeft: 5, fontFamily: "DM" },
  ratingSection: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  ratingLabel: { marginRight: 10 },
  ratingValue: { marginRight: 5, fontWeight: "500", fontFamily: "DM" },
  ratingContainer: { flexDirection: "row" },
  star: { marginRight: 2 },
  locationSection: { marginBottom: 10 },
  locationContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  address: { color: "#666", flex: 1, fontFamily: "DM" },
  locationButton: { flexDirection: "row", alignItems: "center", backgroundColor: "#D10000", paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20 },
  locationButtonText: { color: "#fff", marginLeft: 5, fontFamily: "DM" },
  aboutTitle: { fontSize: 16, fontWeight: "600", marginVertical: 10, fontFamily: "DM" },
  aboutText: { color: "#666", lineHeight: 20 },
  viewMoreButton: { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 15, marginTop: 10, marginLeft: 100, borderColor: "#E2E2E2", borderWidth: 2, borderRadius: 70, width: "50%" },
  viewMoreText: { marginRight: 5, fontFamily: "DM" },
  shopsHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15 },
  seeAllText: { color: "#D10000", fontFamily: "DM" },
  shopCard: { width: 200, marginRight: 15, backgroundColor: "#fff", borderRadius: 24, borderColor: "#E2E2E2", borderWidth: 2 },
  shopImage: { width: "100%", height: 120, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
  shopName: { fontSize: 16, fontWeight: "500", margin: 10 },
  shopDetails: { padding: 10, paddingTop: 0 },
  ratingRow: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  ratingText: { marginRight: 5, fontFamily: "DM" },
  distanceContainer: { flexDirection: "row", alignItems: "center" },
  distanceText: { marginLeft: 5, color: "#666", fontSize: 12, fontFamily: "DM" },
  bookButton: { backgroundColor: "#D10000", margin: 15, padding: 15, borderRadius: 25, alignItems: "center" },
  bookButtonText: { color: "#fff", fontSize: 16, fontWeight: "600", fontFamily: "DM" },
});
