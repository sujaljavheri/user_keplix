import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StarRating = ({ rating, onRatingChange }) => {
  return (
    <View style={styles.starContainer}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity
          key={star}
          onPress={() => onRatingChange(star)}
        >
          <Ionicons
            name={star <= rating ? 'star' : 'star-outline'}
            size={32}
            color="#4E46B4"
            style={styles.star}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default function Review({ navigation }) {
  const [rating, setRating] = useState(3);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    // Handle the submission of feedback
    console.log({ rating, feedback });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.skipText}>Skip</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Your Feedback</Text>
        <Text style={styles.subtitle}>will matter a lot.</Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.serviceDetails}>
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>Dwarka mor service</Text>
            <Text style={styles.serviceAddress}>B1-41, Chandan park,{'\n'}Dwarka mor - 110059</Text>
            
            <View style={styles.serviceType}>
              <Text style={styles.serviceLabel}>Service: </Text>
              <Text style={styles.serviceValue}>Engine Repair</Text>
            </View>
          </View>
          
          <Image
            source={require('../../assets/images/p1.png')}
            style={styles.serviceImage}
          />
        </View>

        <View style={styles.ratingSection}>
          <Text style={styles.ratingLabel}>Rating:</Text>
          <StarRating rating={rating} onRatingChange={setRating} />
        </View>

        <View style={styles.feedbackSection}>
          <Text style={styles.feedbackLabel}>How satisfied was our service?</Text>
          <TextInput
            style={styles.feedbackInput}
            placeholder="Type here...."
            multiline
            numberOfLines={4}
            value={feedback}
            onChangeText={setFeedback}
            placeholderTextColor="#666"
          />
        </View>
      </View>

      <TouchableOpacity 
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>Publish Review</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
  },
  skipText: {
    fontSize: 16,
    marginRight: 4,
    color: '#000',
  },
  titleContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'DM',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'DM',
  },
  cardContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
  serviceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 4,
    fontFamily: 'DM',
  },
  serviceAddress: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontFamily: 'DM',
  },
  serviceType: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceLabel: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'DM',
  },
  serviceValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    fontFamily: 'DM',
  },
  serviceImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  ratingSection: {
    marginBottom: 20,
  },
  ratingLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontFamily: 'DM',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginRight: 8,
  },
  feedbackSection: {
    marginBottom: 20,
  },
  feedbackLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontFamily: 'DM',
  },
  feedbackInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
    height: 120,
    textAlignVertical: 'top',
    fontSize: 16,
    fontFamily: 'DM',
  },
  submitButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#4E46B4',
    borderRadius: 25,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
  },
});