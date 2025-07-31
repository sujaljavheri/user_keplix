import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PaymentSuccess({ navigation }) {
  const [scale] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();

    const timeout = setTimeout(() => {
      navigation.navigate('PaymentConfirmation'); 
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.checkContainer, { transform: [{ scale }] }]}>
        <Ionicons name="checkmark-circle" style={styles.checkIcon} />
      </Animated.View>
      <Text style={styles.message}>Payment Successful</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  checkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7F9F2',
    borderRadius: 100,
    width: 120,
    height: 120,
  },
  checkIcon: {
    fontSize: 80,
    color: '#4CAF50',
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    fontFamily:'DM',
  },
});
