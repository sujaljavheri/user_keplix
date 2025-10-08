import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ServiceDetails({ navigation }) {
  const [service, setService] = useState(null);
  const [otherServices, setOtherServices] = useState([]);
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // 🔹 Dummy Data (replace later with API call)
    const dummyData = {
      service: {
        id: 1,
        name: "Dwarka mor service near me",
        category: "Engine Repair",
        price: 9499,
        rating: 4.0,
        reviews: 60,
        image: "https://i.ibb.co/rwGpQ7y/car-service.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        points: ["lorem ipsum", "lorem ipsum labore", "lorme ipsum"],
      },
      otherServices: [
        {
          id: 2,
          name: "Engine Repairs",
          shortDesc:
            "Takes 6 hours • Improves performance • Genuine spare parts",
          price: 9499,
          image: "https://i.ibb.co/rwGpQ7y/car-service.jpg",
        },
        {
          id: 3,
          name: "Car Wash",
          shortDesc: "Complete cleaning • Interior & Exterior",
          price: 1200,
          image: "https://i.ibb.co/ypdFQyT/car-wash.jpg",
        },
      ],
    };

    setService(dummyData.service);
    setOtherServices(dummyData.otherServices);
  }, []);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setShowPopup(true);

    // Hide after 3s
    setTimeout(() => setShowPopup(false), 3000);
  };

  if (!service) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/* Header Image + Back Button */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtn}
          >
            <Ionicons name="arrow-back-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <Image source={{ uri: service.image }} style={styles.headerImage} />
        </View>

        {/* Service Card */}
        <View style={styles.card}>
          <Text style={styles.title}>{service.name}</Text>
          <Text style={styles.subtitle}>{service.category}</Text>
          <Text style={styles.price}>₹{service.price}</Text>

          {/* Ratings */}
          <View style={styles.ratingRow}>
            <Text style={styles.ratingText}>Ratings: </Text>
            <Text style={styles.ratingValue}>{service.rating} </Text>
            <Ionicons name="star" size={16} color="gold" />
            <Text style={styles.ratingCount}> ({service.reviews})</Text>
          </View>

          {/* About Section */}
          <Text style={styles.sectionTitle}>About:</Text>
          <Text style={styles.about}>{service.description}</Text>
          {service.points.map((point, idx) => (
            <Text key={idx} style={styles.listItem}>
              • {point}
            </Text>
          ))}

          {/* Add Button */}
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addToCart(service)}
          >
            <Text style={styles.addButtonText}>Add Service</Text>
          </TouchableOpacity>
        </View>

        {/* Other Services */}
        <View style={styles.otherServicesHeader}>
          <Text style={styles.sectionTitle}>Other Services:</Text>
          <TouchableOpacity onPress={() => navigation.navigate("MoreService")}>
            <Text style={styles.seeAll}>See all ›</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={otherServices}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.otherCard}>
              <Image source={{ uri: item.image }} style={styles.otherImage} />
              <Text style={styles.otherTitle}>{item.name}</Text>
              <Text style={styles.otherDesc}>{item.shortDesc}</Text>
              <Text style={styles.otherPrice}>₹{item.price}</Text>
              <TouchableOpacity
                style={styles.addSmallBtn}
                onPress={() => addToCart(item)}
              >
                <Text style={styles.addSmallBtnText}>ADD</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>

      {/* Popup when item added */}
      {showPopup && (
        <View style={styles.popup}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            {cart.length} Item added
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>View Cart ›</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },

  header: { position: "relative", height: 200 },
  backBtn: { position: "absolute", top: 40, left: 20, zIndex: 10 },
  headerImage: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  card: {
    backgroundColor: "#fff",
    marginTop: -20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  title: { fontSize: 20, fontWeight: "bold" },
  subtitle: { fontSize: 14, color: "#666", marginBottom: 5 },
  price: { fontSize: 18, fontWeight: "bold", color: "red", marginBottom: 10 },

  ratingRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  ratingText: { fontSize: 14 },
  ratingValue: { fontSize: 14, fontWeight: "bold" },
  ratingCount: { fontSize: 12, color: "#777" },

  sectionTitle: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  about: { fontSize: 13, color: "#666", marginVertical: 5 },
  listItem: { fontSize: 13, color: "#444", marginLeft: 10 },

  addButton: {
    marginTop: 15,
    backgroundColor: "red",
    padding: 12,
    borderRadius: 24,
    alignItems: "center",
  },
  addButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  otherServicesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 20,
  },
  seeAll: { color: "red", fontSize: 13, fontWeight: "600" },

  otherCard: {
    width: 160,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  otherImage: { width: "100%", height: 90, borderRadius: 12, marginBottom: 8 },
  otherTitle: { fontSize: 14, fontWeight: "bold" },
  otherDesc: { fontSize: 12, color: "#555", marginVertical: 4 },
  otherPrice: { fontSize: 14, fontWeight: "bold", color: "red" },
  addSmallBtn: {
    marginTop: 6,
    backgroundColor: "red",
    borderRadius: 12,
    paddingVertical: 6,
    alignItems: "center",
  },
  addSmallBtnText: { color: "#fff", fontWeight: "bold", fontSize: 12 },

  popup: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 24,
    elevation: 5,
  },
});
