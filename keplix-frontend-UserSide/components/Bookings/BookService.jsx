import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

export default function BookService({ navigation }) {
  const [service] = useState({
    id: "svc_engine_repair",
    title: "Engine Repair",
    price: 9499,
    rating: 4.0,
    image: "https://i.ibb.co/rwGpQ7y/car-service.jpg",
  });

  const handleAddService = () => {
    // Navigate to MoreServices with flag (addedBooking)
    navigation.navigate("MoreServices", { addedBooking: service });
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.heroWrap}>
        <Image source={{ uri: service.image }} style={styles.hero} />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>{service.title}</Text>
        <Text style={styles.price}>₹{service.price.toLocaleString()}</Text>
        <Text style={styles.rating}>⭐ {service.rating}</Text>

        <Text style={styles.about}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a dummy service description.
        </Text>

        <TouchableOpacity style={styles.btn} onPress={handleAddService}>
          <Text style={styles.btnText}>Add Service</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heroWrap: { height: 200, width: "100%" },
  hero: { width: "100%", height: "100%" },
  card: { padding: 16 },
  title: { fontSize: 18, fontWeight: "600" },
  price: { fontSize: 16, color: "#e53935", marginTop: 6 },
  rating: { fontSize: 14, marginVertical: 6 },
  about: { fontSize: 13, color: "#555", marginVertical: 10 },
  btn: {
    backgroundColor: "#e53935",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontWeight: "700", fontSize: 15 },
});
