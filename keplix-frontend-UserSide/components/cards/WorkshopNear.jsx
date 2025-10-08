import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default function WorkshopNear({ navigation }) {
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
      image:
        "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg",
    },
    {
      id: 2,
      name: "Car Repair Hub",
      rating: 4.2,
      reviews: 95,
      distance: "5 km, Location address...",
      discount: "Flat ₹150 off",
      image:
        "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg",
    },
    {
      id: 3,
      name: "Auto Garage Pro",
      rating: 4.5,
      reviews: 80,
      distance: "3.5 km, Location address...",
      discount: "Flat ₹80 off",
      image:
        "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg",
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setWorkshops(mockWorkshops);
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <ActivityIndicator size="large" color="red" />;
  }
  return (
    <View style={styles.container}>
      {" "}
      <FlatList
        data={workshops}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("WorkshopDetails", { workshop: item })
            }
          >
            {" "}
            <Image source={{ uri: item.image }} style={styles.image} />{" "}
            <View style={styles.discountBadge}>
              {" "}
              <Text style={styles.discountText}>{item.discount}</Text>{" "}
            </View>{" "}
            <View style={styles.cardContent}>
              {" "}
              <Text style={styles.name}>{item.name}</Text>{" "}
              <View style={styles.ratingRow}>
                {" "}
                <MaterialIcons name="star" size={16} color="red" />{" "}
                <MaterialIcons name="star" size={16} color="red" />{" "}
                <MaterialIcons name="star" size={16} color="red" />{" "}
                <MaterialIcons name="star" size={16} color="red" />{" "}
                <Text style={styles.ratingText}>
                  {" "}
                  {item.rating} ({item.reviews}){" "}
                </Text>{" "}
              </View>{" "}
              <Text style={styles.distance}>{item.distance}</Text>{" "}
            </View>{" "}
          </TouchableOpacity>
        )}
      />{" "}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, marginBottom: 20 },
  card: {
    width: 220,
    borderRadius: 16,
    backgroundColor: "#fff",
    marginRight: 16,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    position: "relative",
  },
  image: { width: "100%", height: 120 },
  discountBadge: {
    position: "absolute",
    top: 100,
    left: 10,
    width: 110,
    backgroundColor: "red",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 10,
  },
  discountText: { color: "#fff", fontSize: 12, fontWeight: "600" },
  cardContent: { padding: 10 },
  name: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  ratingRow: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
  ratingText: { fontSize: 13, marginLeft: 4, color: "#555" },
  distance: { fontSize: 12, color: "#666" },
});
