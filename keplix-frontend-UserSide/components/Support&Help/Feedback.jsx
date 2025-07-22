import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FeedbackScreen({ navigation }) {
  const [rating, setRating] = useState(5); // All stars full on load
  const improvementTags = [
    'Overall Service',
    'Customer Support',
    'Speed & Efficiency',
    'Repair Quality',
    'Pickup & Delivery Service',
  ];
  const [selectedTags, setSelectedTags] = useState([]); // No tags selected initially

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Feedback & Suggestion</Text>
        <Text style={styles.description}>Provide feedback to tell us how we can improve....</Text>

        <Text style={styles.sectionTitle}>Rate Your Experience:</Text>
        <Text style={styles.subtitle}>Are you satisfied with service?</Text>
        <View style={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map((i) => (
            <TouchableOpacity key={i} onPress={() => setRating(i)}>
              <MaterialCommunityIcons
                name={i <= rating ? 'star' : 'star-outline'}
                size={36}
                color="#4E46B4"
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Tell us what can be improved?</Text>
        <View style={styles.tagsContainer}>
          {improvementTags.map((tag) => (
            <TouchableOpacity
              key={tag}
              style={[styles.tag, selectedTags.includes(tag) && styles.tagSelected]}
              onPress={() => toggleTag(tag)}
            >
              <Text
                style={selectedTags.includes(tag) ? styles.tagTextSelected : styles.tagText}
              >
                {tag}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Tell us on how can we improve?</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here...."
          placeholderTextColor="#A9A9A9"
          multiline
        />
      </ScrollView>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    fontFamily: 'DM',
    color: '#0000008F',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    fontFamily: 'DM',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#0000008F',
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    marginVertical: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  tag: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  tagSelected: {
    backgroundColor: '#4E46B4',
    borderColor: '#4E46B4',
  },
  tagText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '500',
  },
  tagTextSelected: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    marginBottom: 20,
    backgroundColor: '#fafafa',
  },
  submitButton: {
    backgroundColor: '#4E46B4',
    borderRadius: 70,
    paddingVertical: 16,
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'DM',
  },
});
