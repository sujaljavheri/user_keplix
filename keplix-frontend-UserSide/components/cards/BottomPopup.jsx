import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const BottomPopup = ({ onClose, navigation }) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.popup}>
        <Text style={styles.popupText}>1 Item added</Text>
        <TouchableOpacity
          onPress={() => {
            onClose?.();
            navigation.navigate("cart");
          }}
        >
          <Text style={styles.viewCart}>View Cart ➝</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomPopup;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    width: width,
    alignItems: "center",
    zIndex: 9999, // 👈 VERY IMPORTANT to stay on top
    elevation: 9999, // 👈 for Android
  },
  popup: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    width: width - 32,
    maxWidth: 420,
  },
  popupText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  viewCart: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
