import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import BottomPopup from "./BottomPopup"; // 👈 Adjust this if needed
import { useNavigation } from "@react-navigation/native";

const fetchServiceDetails = async () => {
  return {
    id: 1,
    title: "Dwarka mor service",
    category: "Engine Repair",
    price: 9499,
    rating: 4.0,
    reviews: 80,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    points: ["Lorem ipsum", "Lorem ipsum labore", "Lorem ipsum"],
    image: require("../../assets/images/p1.png"), // local image
    otherServices: [
      {
        id: 2,
        title: "Engine Repairs",
        price: 7499,
        rating: 4.0,
        duration: "Takes 5 hours",
        features: ["Improve Performance", "Genuine spare parts", "Service guarantee"],
        image: require("../../assets/images/p1.png"),
      },
      {
        id: 3,
        title: "Brake Check",
        price: 2499,
        rating: 4.2,
        duration: "Takes 2 hours",
        features: ["Smooth braking", "Certified parts"],
        image: require("../../assets/images/p1.png"),
      },
      {
        id: 4,
        title: "Oil Change",
        price: 1999,
        rating: 4.5,
        duration: "Takes 1 hour",
        features: ["High quality oil", "Engine smoothness"],
        image: require("../../assets/images/p1.png"),
      },
    ],
  };
};

const MoreService = () => {
  const [service, setService] = useState(null);
  const [modalVisible, setModalVisible] = useState(true);
  const [popupVisible, setPopupVisible] = useState(true);
  const slideAnim = useRef(new Animated.Value(500)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchServiceDetails();
      setService(data);
    };
    getData();
  }, []);

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 500,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [modalVisible]);

  const handleAddService = () => {
    setPopupVisible(true);
  };

  if (!service) return <Text style={styles.loading}>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Modal transparent visible={modalVisible} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <Animated.View
          style={[
            styles.modalContent,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
            <Image source={service.image} style={styles.banner} />
            <View style={styles.card}>
              <Text style={styles.title}>{service.title}</Text>
              <Text style={styles.category}>{service.category}</Text>

              <View style={styles.row}>
                <Text style={styles.price}>₹{service.price.toLocaleString()}</Text>
                <Text style={styles.rating}>⭐ {service.rating} ({service.reviews})</Text>
              </View>

              <Text style={styles.sectionTitle}>About:</Text>
              <Text style={styles.about}>{service.about}</Text>
              {service.points.map((point, index) => (
                <Text key={index} style={styles.listItem}>• {point}</Text>
              ))}

              <TouchableOpacity style={styles.addButton} onPress={handleAddService}>
                <Text style={{ color: "white", textAlign: "center" }}>Add Service</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.otherContainer}>
              <View style={styles.rowBetween}>
                <Text style={styles.sectionTitle}>Other Services:</Text>
                <TouchableOpacity onPress={() => navigation.navigate("ServicesCard")}>
                  <Text style={{ color: "red" }}>See all</Text>
                </TouchableOpacity>
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 10 }}
              >
                {service.otherServices.map((s) => (
                  <View key={s.id} style={styles.otherCard}>
                    <Image source={s.image} style={styles.otherImage} />
                    <Text style={styles.otherTitle}>{s.title}</Text>
                    <Text style={styles.otherText}>{s.duration}</Text>
                    <Text style={styles.otherText}>{s.features[0]}</Text>
                    <View style={styles.rowBetween}>
                      <Text style={styles.otherPrice}>₹{s.price.toLocaleString()}</Text>
                      <TouchableOpacity
                        style={styles.addSmallButton}
                        onPress={handleAddService}
                      >
                        <Text style={{ color: "white", fontSize: 12 }}>ADD</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </ScrollView>

          {/* ✅ Bottom Popup ABOVE content */}
          {popupVisible && (
            <BottomPopup
              onClose={() => setPopupVisible(false)}
              navigation={navigation}
            />
          )}
        </Animated.View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  loading: { textAlign: "center", marginTop: 20 },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: "100%", // ✅ allow scrolling
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
    elevation: 10,
  },
  banner: {
    width: "100%",
    height: 250,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  card: { padding: 16 },
  title: { fontSize: 18, fontWeight: "bold" },
  category: { color: "gray" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  price: { color: "red", fontSize: 18, fontWeight: "bold" },
  rating: { color: "gray" },
  sectionTitle: { fontWeight: "bold", fontSize: 16, marginTop: 10 },
  about: { marginTop: 4, color: "gray" },
  listItem: { color: "gray", marginTop: 2 },
  addButton: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 20,
    marginTop: 10,
  },
  otherContainer: { padding: 16 },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  otherCard: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12,
    marginRight: 10,
    width: 160,
    elevation: 3,
  },
  otherImage: { width: "100%", height: 100, borderRadius: 10 },
  otherTitle: { fontWeight: "bold", marginTop: 5 },
  otherText: { fontSize: 12, color: "gray" },
  otherPrice: { color: "red", fontWeight: "bold" },
  addSmallButton: {
    backgroundColor: "red",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
});

export default MoreService;
