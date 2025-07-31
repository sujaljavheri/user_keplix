import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FAQScreen({ navigation }) {
  const faqs = [
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit',
    'Lorem ipsum dolor',
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit',
    'Lorem ipsum dolor',
    'Lorem ipsum dolor sit amet',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back-outline" size={30} color="#000" />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>FAQ's</Text>

        {faqs.map((item, index) => (
          <View key={index}>
            <TouchableOpacity style={styles.faqRow}>
              <Text style={styles.faqText}>{item}</Text>
              <Ionicons name="chevron-forward-outline" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
  },
  backButton: {
    marginTop:10,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 20,
    fontFamily: 'DM',
    color: '#0000008F',
  },
  faqRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
  },
  faqText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'DM',
    color: '#000',
  },
  separator: {
    height: 2,
    backgroundColor: '#E2E2E2',
  },
});
