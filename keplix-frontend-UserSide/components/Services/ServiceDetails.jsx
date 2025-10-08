// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   ImageBackground,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
// } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import { useIsFocused, useRoute } from "@react-navigation/native";
// import BottomPopup from "../cards/BottomPopup";

// // Dummy Data
// const initialMainService = {
//   id: 1,
//   name: "Dwarka mor service",
//   type: "Engine Repair",
//   price: "₹9,499",
//   rating: "4",
//   ratingCount: "80",
//   about:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   points: ["Lorem ipsum", "Lorem ipsum labore", "Lorem ipsum"],
// };

// const initialOtherServices = [
//   {
//     id: 2,
//     name: "Engine Repairs",
//     time: "Takes 5 hours",
//     desc: "Improve Performance",
//     image: require("../../assets/p1.jpg"),
//   },
//   {
//     id: 3,
//     name: "Brake Check",
//     time: "Takes 2 hours",
//     desc: "Smooth braking",
//     image: require("../../assets/p1.jpg"),
//   },
//   {
//     id: 4,
//     name: "Oil Change",
//     time: "Takes 1 hour",
//     desc: "High performance",
//     image: require("../../assets/p1.jpg"),
//   },
// ];

// export default function ServiceDetails({ navigation }) {
//   const isFocused = useIsFocused();
//   const route = useRoute();

//   const [mainService, setMainService] = useState(initialMainService);
//   const [otherServices, setOtherServices] = useState(initialOtherServices);
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   useEffect(() => {
//     if (isFocused && route.params?.bookingAdded) {
//       setIsPopupVisible(true);
//       navigation.setParams({ bookingAdded: false });
//     }
//   }, [isFocused, route.params?.bookingAdded]);

//   const renderOtherService = ({ item }) => (
//     <View style={styles.serviceCard}>
//       <ImageBackground source={item.image} style={styles.serviceImage} />
//       <Text style={styles.serviceName}>{item.name}</Text>
//       <Text style={styles.serviceTime}>{item.time}</Text>
//       <Text style={styles.serviceDesc}>{item.desc}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Service Image */}
//       <ImageBackground
//         source={require("../../assets/car.jpg")}
//         style={styles.mainImage}
//       />

//       {/* Title Section */}
//       <View style={styles.titleSection}>
//         <Text style={styles.serviceNameMain}>{mainService.name}</Text>
//         <Text style={styles.serviceType}>{mainService.type}</Text>
//         <View style={styles.row}>
//           <Text style={styles.servicePrice}>{mainService.price}</Text>
//           <View style={styles.rating}>
//             <Ionicons name="star" size={16} color="gold" />
//             <Text style={styles.ratingText}>
//               {mainService.rating} ({mainService.ratingCount})
//             </Text>
//           </View>
//         </View>
//       </View>

//       {/* About */}
//       <View style={styles.aboutSection}>
//         <Text style={styles.sectionTitle}>About:</Text>
//         <Text style={styles.aboutText}>{mainService.about}</Text>
//         {mainService.points.map((point, index) => (
//           <Text key={index} style={styles.aboutText}>
//             • {point}
//           </Text>
//         ))}
//       </View>

//       {/* Add Service Button */}
//       <TouchableOpacity
//         style={styles.addButton}
//         onPress={() => setIsPopupVisible(true)}
//       >
//         <Text style={styles.addButtonText}>Add Service</Text>
//       </TouchableOpacity>

//       {/* Other Services */}
//       <View style={styles.otherServicesSection}>
//         <View style={styles.rowBetween}>
//           <Text style={styles.sectionTitle}>Other Services:</Text>
//           <Text style={styles.seeAll}>See all</Text>
//         </View>
//         <FlatList
//           data={otherServices}
//           horizontal
//           renderItem={renderOtherService}
//           keyExtractor={(item) => item.id.toString()}
//           showsHorizontalScrollIndicator={false}
//         />
//       </View>

//       {/* Bottom Popup */}
//       <BottomPopup
//         visible={isPopupVisible}
//         onClose={() => setIsPopupVisible(false)}
//         service={mainService}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   mainImage: {
//     width: "100%",
//     height: 200,
//   },
//   titleSection: {
//     padding: 15,
//   },
//   serviceNameMain: {
//     fontSize: 22,
//     fontWeight: "bold",
//   },
//   serviceType: {
//     fontSize: 16,
//     color: "gray",
//     marginVertical: 5,
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   servicePrice: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "red",
//   },
//   rating: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   ratingText: {
//     marginLeft: 5,
//     fontSize: 14,
//   },
//   aboutSection: {
//     paddingHorizontal: 15,
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   aboutText: {
//     fontSize: 14,
//     color: "gray",
//     marginVertical: 2,
//   },
//   addButton: {
//     backgroundColor: "red",
//     margin: 15,
//     padding: 15,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   addButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   otherServicesSection: {
//     paddingLeft: 15,
//   },
//   rowBetween: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 10,
//     marginRight: 15,
//   },
//   seeAll: {
//     color: "red",
//     fontWeight: "bold",
//   },
//   serviceCard: {
//     width: 140,
//     marginRight: 15,
//     borderRadius: 10,
//     overflow: "hidden",
//     backgroundColor: "#f9f9f9",
//   },
//   serviceImage: {
//     width: "100%",
//     height: 80,
//   },
//   serviceName: {
//     fontSize: 14,
//     fontWeight: "bold",
//     marginTop: 5,
//     paddingHorizontal: 5,
//   },
//   serviceTime: {
//     fontSize: 12,
//     color: "gray",
//     paddingHorizontal: 5,
//   },
//   serviceDesc: {
//     fontSize: 12,
//     color: "gray",
//     paddingHorizontal: 5,
//     marginBottom: 5,
//   },
// });
