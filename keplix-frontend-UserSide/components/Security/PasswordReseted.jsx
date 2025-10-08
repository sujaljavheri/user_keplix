import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PasswordReseted({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Security');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagePlaceholder}>
        <View style={styles.iconWrapper}>
          <Ionicons name="checkmark" size={40} color="white" />
        </View>
      </View>
      <Text style={styles.text}>
        Your password has been changed successfully!
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imagePlaceholder: {
    width: 260,
    height: 200,
    backgroundColor: '#ededed',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D91E18',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    bottom: -80, // Positioned at bottom half
  },
  text: {
    fontSize: 20,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    fontFamily: 'DM',
  },
});
