import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
// Mock API endpoints (replace these with your real backend URLs)
const API_FETCH_CART = "https://yourapi.com/cart";
const API_UPDATE_CART = "https://yourapi.com/cart/update";

const CartItem = ({ item, onRemove }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cartItem}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
      </View>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.itemPrice}>₹{item.price.toLocaleString()}</Text>
          {item.originalPrice && item.originalPrice !== item.price && (
            <Text style={styles.originalPrice}>
              ₹{item.originalPrice.toLocaleString()}
            </Text>
          )}
        </View>
      </View>
      <TouchableOpacity onPress={onRemove} style={styles.removeBtn}>
        <Ionicons name="close" size={20} color="#555" />
      </TouchableOpacity>
    </View>
  );
};

const CartScreen = ({navigation}) => {
  const [cartItems, setCartItems] = useState([]);
  const [requirements, setRequirements] = useState("");
  const [mode, setMode] = useState("walkin"); // "walkin" or "pickup"
  const [loading, setLoading] = useState(true);

  // Dummy data to simulate backend response while backend is in development
  const dummyCartData = {
    items: [
      {
        id: "1",
        name: "Deep Cleaning",
        price: 1500,
        originalPrice: 1800,
        image: "https://via.placeholder.com/60x60.png?text=Clean",
      },
      {
        id: "2",
        name: "Window Washing",
        price: 800,
        originalPrice: 800,
        image: "https://via.placeholder.com/60x60.png?text=Window",
      },
    ],
    requirements: "Please use eco-friendly products.",
    mode: "walkin",
  };

  // Simulate fetching cart from backend (use dummy data for now)
  useEffect(() => {
    const fetchCart = async () => {
      try {
        // Uncomment below to fetch from backend when ready
        /*
        const response = await fetch(API_FETCH_CART);
        const data = await response.json();
        setCartItems(data.items || []);
        setRequirements(data.requirements || "");
        setMode(data.mode || "walkin");
        */

        // Using dummy data for now
        setCartItems(dummyCartData.items);
        setRequirements(dummyCartData.requirements);
        setMode(dummyCartData.mode);
      } catch (error) {
        console.error("Failed to fetch cart", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  // Save cart updates to backend - currently dummy, uncomment when backend ready
  const saveCart = async (updatedFields) => {
    try {
      // Uncomment below to save to backend when ready
      /*
      await fetch(API_UPDATE_CART, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartItems,
          requirements,
          mode,
          ...updatedFields,
        }),
      });
      */
      console.log("Saving cart with updates:", updatedFields);
    } catch (error) {
      console.error("Failed to save cart", error);
    }
  };

  // Remove item handler
  const removeItem = (id) => {
    const newItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newItems);
    saveCart({ items: newItems });
  };

  // Handle mode toggle
  const toggleMode = (selectedMode) => {
    setMode(selectedMode);
    saveCart({ mode: selectedMode });
  };

  // Handle requirements change
  const onChangeRequirements = (text) => {
    setRequirements(text);
  };

  // Save requirements on blur
  const onRequirementsBlur = () => {
    saveCart({ requirements });
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discount = 0; // can be fetched from backend later
  const additionalFees = 0; // can be fetched from backend later
  const totalAmount = totalPrice - discount + additionalFees;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Cart</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Ionicons name="share-social" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={{ paddingBottom: 140 }}
      >
        {/* Cart Items */}
        <View style={styles.cartList}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={() => removeItem(item.id)}
            />
          ))}
        </View>
      </ScrollView>

      {/* Sticky Bottom */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}
        style={styles.bottomContainer}
      >
        {/* Requirements Input */}
        <View style={styles.requirementsBox}>
          <TextInput
            placeholder="Any other requirements"
            value={requirements}
            onChangeText={onChangeRequirements}
            onBlur={onRequirementsBlur}
            multiline
            style={styles.requirementsInput}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="create-outline" size={20} color="#D10000" />
          </TouchableOpacity>
        </View>

        {/* Modes of Service */}
        <View style={styles.modeContainer}>
          <Text style={styles.modeTitle}>Modes of Service</Text>
          <View style={styles.modeOptions}>
            <TouchableOpacity
              style={styles.modeOption}
              onPress={() => toggleMode("walkin")}
            >
              <View
                style={[
                  styles.radioCircle,
                  mode === "walkin" && styles.radioSelected,
                ]}
              />
              <Text
                style={[
                  styles.modeLabel,
                  mode === "walkin" && styles.modeSelected,
                ]}
              >
                Walk In
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modeOption}
              onPress={() => toggleMode("pickup")}
            >
              <View
                style={[
                  styles.radioCircle,
                  mode === "pickup" && styles.radioSelected,
                ]}
              />
              <Text
                style={[
                  styles.modeLabel,
                  mode === "pickup" && styles.modeSelected,
                ]}
              >
                Pick Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bill Summary */}
        <View style={styles.billSummary}>
          <Text style={styles.billTitle}>Bill Summary</Text>
          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Price</Text>
            <Text style={styles.billValue}>₹{totalPrice.toLocaleString()}</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Discount</Text>
            <Text style={styles.billValue}>-₹{discount.toLocaleString()}</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Additional fees</Text>
            <Text style={styles.billValue}>
              ₹{additionalFees.toLocaleString()}
            </Text>
          </View>
          <View style={styles.billRow}>
            <Text style={[styles.billLabel, styles.totalLabel]}>
              Total Amount
            </Text>
            <Text style={[styles.billValue, styles.totalValue]}>
              ₹{totalAmount.toLocaleString()}
            </Text>
          </View>
        </View>

        {/* Proceed Button */}
        <TouchableOpacity onPress={()=> navigation.navigate("Payment1")} style={styles.proceedBtn}>
          <Text style={styles.proceedBtnText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerBtn: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  icon: {
    fontSize: 30,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },

  scrollArea: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  cartList: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 15,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 6,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  imageWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  itemImage: {
    width: 35,
    height: 40,
    resizeMode: "contain",
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "500",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e62e2e",
  },
  originalPrice: {
    fontSize: 14,
    color: "#999",
    textDecorationLine: "line-through",
    marginLeft: 8,
  },
  removeBtn: {
    padding: 8,
  },
  requirementsBox: {
    backgroundColor: "#ffe4e4",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 15,
  },
  requirementsInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 6,
    paddingHorizontal: 10,
    color: "#333",
  },
  editIcon: {
    paddingHorizontal: 10,
  },
  modeContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
  },
  modeTitle: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 8,
  },
  modeOptions: {
    flexDirection: "row",
    alignItems: "center",
  },
  modeOption: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 30,
  },
  radioCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#e62e2e",
    marginRight: 8,
  },
  radioSelected: {
    backgroundColor: "#e62e2e",
  },
  modeLabel: {
    fontSize: 14,
    color: "#555",
  },
  modeSelected: {
    color: "#e62e2e",
    fontWeight: "600",
  },
  billSummary: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    marginBottom: 30,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 1 },
  },
  billTitle: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 10,
  },
  billRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
  },
  billLabel: {
    fontSize: 14,
    color: "#333",
  },
  billValue: {
    fontSize: 14,
    color: "#333",
  },
  totalLabel: {
    fontWeight: "700",
  },
  totalValue: {
    fontWeight: "700",
    color: "#e62e2e",
  },
  proceedBtn: {
    backgroundColor: "#e62e2e",
    paddingVertical: 14,
    borderRadius: 25,
    marginHorizontal: 15,
    marginBottom: 50,
  },
  proceedBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
  },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default CartScreen;
