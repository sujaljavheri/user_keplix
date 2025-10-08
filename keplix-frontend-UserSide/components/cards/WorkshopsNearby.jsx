import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function WorkshopsNearby({ navigation }) {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);

  const mockWorkshops = [
    {
      id: 1,
      name: "Dwarka mor service",
      rating: 4.0,
      reviews: 120,
      distance: "7 km, Location address...",
      discount: "Flat ₹100 off",
      image: "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg",
    },
    {
      id: 2,
      name: "Car Repair Hub",
      rating: 4.2,
      reviews: 95,
      distance: "5 km, Location address...",
      discount: "Flat ₹150 off",
      image: "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg",
    },
    {
      id: 3,
      name: "Auto Garage Pro",
      rating: 4.5,
      reviews: 80,
      distance: "3.5 km, Location address...",
      discount: "Flat ₹80 off",
      image: "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg",
    },
    {
      id: 4,
      name: "Metro Car Workshop",
      rating: 4.3,
      reviews: 105,
      distance: "4.2 km, Location address...",
      discount: "Flat ₹200 off",
      image: "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg",
    },
    {
      id: 5,
      name: "Perfect Auto Service",
      rating: 4.6,
      reviews: 130,
      distance: "2.5 km, Location address...",
      discount: "Flat ₹120 off",
      image: "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setWorkshops(mockWorkshops);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>

        {/* Header */}
              <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="arrow-back-outline" style={styles.icon} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 20,marginTop: 30, marginLeft:-220, color: "#111", flex: 1, fontFamily: "DM", justifyContent: "center", alignItems: "center" }}>
          Workshops Nearby
        </Text>
              </View>
      {workshops.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() =>
            navigation.navigate("EngineRepairDetail", { workshop: item })
          }
        >
          <Image source={{ uri: item.image }} style={styles.image} />

          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{item.discount}</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.name}>{item.name}</Text>

            <View style={styles.ratingRow}>
              {[...Array(4)].map((_, i) => (
                <MaterialIcons key={i} name="star" size={16} color="red" />
              ))}
              <Text style={styles.ratingText}>
                {item.rating} ({item.reviews})
              </Text>
            </View>

            <View style={styles.locationRow}>
              <MaterialIcons name="location-on" size={16} color="#777" />
              <Text style={styles.distance}>{item.distance}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
   header: { flexDirection: "row", alignItems: "center", gap: "75%" },
  icon: { fontSize: 30, borderColor: "#E2E2E2", borderWidth: 2, borderRadius: 50, padding: 5 },
  
  card: {
    borderRadius: 14,
    backgroundColor: "#fff",
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  image: {
    width: "100%",
    height: 160,
  },
  discountBadge: {
    position: "absolute",
    top: 130,
    left: 12,
    backgroundColor: "#D91E18",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  discountText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  cardContent: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#111",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  ratingText: {
    fontSize: 13,
    marginLeft: 4,
    color: "#555",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  distance: {
    fontSize: 13,
    color: "#666",
    marginLeft: 4,
  },
});
