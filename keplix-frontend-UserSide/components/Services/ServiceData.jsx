import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // ✅ for arrow & icons
import { SafeAreaView } from "react-native-safe-area-context";

export default function ServiceData({ route, navigation }) {
  const { service } = route.params;
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("top");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        // 🔗 Replace with backend when ready
        // const response = await fetch(
        //   `https://your-api.com/providers?serviceId=${service.id}`
        // );
        // const text = await response.text();
        // let data;
        setProviders([
            {
              id: "101",
              name: "Dwarka Mor Service",
              rating: 4.8,
              reviews: 120,
              distance: "7 km",
              price: "₹4,900",
              image:
                "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg",
            },
            {
              id: "102",
              name: "Karol Bagh Motors",
              rating: 4.6,
              reviews: 90,
              distance: "5 km",
              price: "₹3,200",
              image:
                "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg",
            },
            {
              id: "103",
              name: "Rohini Auto Care",
              rating: 4.7,
              reviews: 140,
              distance: "9 km",
              price: "₹5,500",
              image:
                "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg",
            },
            {
              id: "104",
              name: "South Ex Motors",
              rating: 4.5,
              reviews: 80,
              distance: "4 km",
              price: "₹2,800",
              image:
                "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg",
            },
            {
              id: "105",
              name: "Rajouri Garden Auto",
              rating: 4.9,
              reviews: 200,
              distance: "10 km",
              price: "₹6,200",
              image:
                "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg",
            },
          ]);

        try {
          data = JSON.parse(text);
        } catch (err) {
          console.warn("⚠️ Response not JSON, using dummy data");
          data = null;
        }

        if (data && data.providers) {
          setProviders(data.providers);
        } else {
          // ✅ Extended dummy data with multiple services
          setProviders([
            {
              id: "101",
              name: "Dwarka Mor Service",
              rating: 4.8,
              reviews: 120,
              distance: "7 km",
              price: "₹4,900",
              image:
                "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg",
            },
            {
              id: "102",
              name: "Karol Bagh Motors",
              rating: 4.6,
              reviews: 90,
              distance: "5 km",
              price: "₹3,200",
              image:
                "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg",
            },
            {
              id: "103",
              name: "Rohini Auto Care",
              rating: 4.7,
              reviews: 140,
              distance: "9 km",
              price: "₹5,500",
              image:
                "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg",
            },
            {
              id: "104",
              name: "South Ex Motors",
              rating: 4.5,
              reviews: 80,
              distance: "4 km",
              price: "₹2,800",
              image:
                "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg",
            },
            {
              id: "105",
              name: "Rajouri Garden Auto",
              rating: 4.9,
              reviews: 200,
              distance: "10 km",
              price: "₹6,200",
              image:
                "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg",
            },
          ]);
        }
      } catch (error) {
        console.error("Error fetching providers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, [service]);

  // ✅ Sorting + Search
  const getFilteredProviders = () => {
    let sorted = [...providers];

    if (filter === "top") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (filter === "low") {
      sorted.sort(
        (a, b) =>
          parseInt(a.price.replace(/\D/g, "")) -
          parseInt(b.price.replace(/\D/g, ""))
      );
    } else if (filter === "near") {
      sorted.sort(
        (a, b) =>
          parseInt(a.distance.replace(/\D/g, "")) -
          parseInt(b.distance.replace(/\D/g, ""))
      );
    }

    if (search.trim() !== "") {
      sorted = sorted.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return sorted;
  };

  const renderProvider = ({ item }) => (
    <View style={styles.card}>
      {/* Service Image */}
      <Image source={{ uri: item.image }} style={styles.image} />

      {/* Discount Badge */}
      <View style={styles.discountTag}>
        <Ionicons name="pricetag" size={12} color="#fff" />
        <Text style={styles.discountText}>30% offer upto 1000</Text>
      </View>

      {/* Details */}
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subText}>Deep clean services</Text>

        {/* Rating + Reviews */}
        <View style={styles.row}>
          <Ionicons name="star" size={14} color="#D10000" />
          <Text style={styles.ratingText}>
            {item.rating} ({item.reviews})
          </Text>
        </View>

        {/* Distance */}
        <View style={styles.row}>
          <Ionicons name="location-outline" size={14} color="#555" />
          <Text style={styles.distance}>
            {item.distance}, Location address…
          </Text>
        </View>

        {/* Price */}
        <Text style={styles.price}>{item.price}</Text>
      </View>

      {/* Book Now full-width button */}
      <TouchableOpacity
        style={styles.bookBtn}
        onPress={() =>
          navigation.navigate("EngineRepairDetail", { provider: item })
        }
      >
        <Text style={styles.bookBtnText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#D10000" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ marginTop: 20 }}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name={"arrow-back-outline"} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.header}>{service.name} Services</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={18} color="#555" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Filter Bar */}
        <View style={styles.filterBar}>
          {["top", "low", "near"].map((f, idx) => (
            <TouchableOpacity
              key={idx}
              style={[styles.filterBtn, filter === f && styles.activeFilter]}
              onPress={() => setFilter(f)}
            >
              <Text
                style={{
                  color: filter === f ? "#fff" : "#000",
                  fontWeight: "600",
                }}
              >
                {f === "top"
                  ? "Top Rated"
                  : f === "low"
                  ? "Low Price"
                  : "Nearby"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Provider List */}
        <FlatList
          data={getFilteredProviders()}
          renderItem={renderProvider}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {},
  icon: {
    fontSize: 30,
    color: "#494747ff",
    borderColor: "#aba3a3",
    borderWidth: 2,
    borderRadius: 50,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 12,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    backgroundColor: "#f9f9f9",
  },
  searchInput: {
    flex: 1,
    marginLeft: 6,
    fontSize: 14,
  },
  filterBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 12,
    marginHorizontal: 8,
  },
  filterBtn: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  activeFilter: {
    backgroundColor: "#D10000",
    borderColor: "#D10000",
  },
  card: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: "hidden",
  },
  image: { width: "100%", height: 160 },
  discountTag: {
    position: "absolute",
    top: 8,
    left: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D10000",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  discountText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 4,
  },
  details: { padding: 12 },
  name: { fontSize: 16, fontWeight: "bold" },
  subText: { fontSize: 12, color: "#555", marginVertical: 2 },
  row: { flexDirection: "row", alignItems: "center", marginTop: 2 },
  ratingText: { fontSize: 12, marginLeft: 4, color: "#333" },
  distance: { fontSize: 12, marginLeft: 4, color: "#555" },
  price: { fontSize: 16, fontWeight: "600", color: "#D10000", marginTop: 6 },
  bookBtn: {
    backgroundColor: "#D10000",
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  bookBtnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },

  icon: {
    fontSize: 30,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 12,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  filterBar: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    marginHorizontal: 16,
  },
  filterBtn: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginLeft: 8,
  },
  activeFilter: {
    backgroundColor: "#D10000",
    borderColor: "#D10000",
  },
});
