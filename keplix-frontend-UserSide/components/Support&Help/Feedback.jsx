import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// FeedbackSuccess Component
function FeedbackSuccess({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Feedback"); // Navigate back after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={successStyles.container}>
      <View style={successStyles.imagePlaceholder}>
        {/* Place your image inside this View later if needed */}
        <View style={successStyles.iconWrapper}>
          <Ionicons name="checkmark" size={40} color="white" />
        </View>
      </View>
      <Text style={successStyles.text}>
        Your Feedback has been submitted successfully.
      </Text>
    </View>
  );
}

// FeedbackScreen Component
function FeedbackScreen({ navigation }) {
  const [rating, setRating] = useState(3);
  const [selectedTags, setSelectedTags] = useState([]);
  const [textFeedback, setTextFeedback] = useState("");

  const improvementTags = [
    "Overall Service",
    "Customer Support",
    "Speed & Efficiency",
    "Repair Quality",
    "Pickup & Delivery Service",
  ];

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = () => {
    const feedbackData = {
      rating,
      selectedTags,
      textFeedback,
    };

    console.log("Submitted Feedback:", feedbackData);
    navigation.navigate("FeedbackSuccess");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Feedback & Suggestion</Text>
        <Text style={styles.description}>
          Provide feedback to tell us how we can improve....
        </Text>

        <Text style={styles.sectionTitle}>Rate Your Experience:</Text>
        <Text style={styles.subtitle}>Are you satisfied with service?</Text>

        <View style={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map((i) => (
            <TouchableOpacity key={i} onPress={() => setRating(i)}>
              <MaterialCommunityIcons
                name={i <= rating ? "star" : "star-outline"}
                size={42}
                color="#D91E18"
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
              style={[
                styles.tag,
                selectedTags.includes(tag) && styles.tagSelected,
              ]}
              onPress={() => toggleTag(tag)}
            >
              <Text
                style={
                  selectedTags.includes(tag)
                    ? styles.tagTextSelected
                    : styles.tagText
                }
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
          value={textFeedback}
          onChangeText={setTextFeedback}
        />
      </ScrollView>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// --- Styles ---

// FeedbackSuccess styles
const successStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imagePlaceholder: {
    width: 260,
    height: 200,
    backgroundColor: "#ededed",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#D91E18",
    justifyContent: "center",
    alignItems: "center",
    marginTop:10,
     bottom: -80, // Half outside the placeholder
  },
  text: {
    fontSize: 20,
    color: "#555",
    textAlign: "center",
    marginTop: 40,
    paddingHorizontal: 20,
     marginBottom:200,
  },
});

// FeedbackScreen styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 30,
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  header: {
    marginBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 8,
    fontFamily: "DM",
    color: "#000000DE",
  },
  description: {
    fontSize: 16,
    color: "#0000008F",
    marginBottom: 24,
    fontFamily: "DM",
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "500",
    color: "#000",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: "#0000008F",
    marginBottom: 14,
  },
  starsContainer: {
    padding: 5,
    columnGap: 16,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    marginVertical: 24,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  tag: {
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 26,
    marginRight: 10,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  tagSelected: {
    backgroundColor: "#D91E18",
    borderColor: "#D91E18",
  },
  tagText: {
    color: "#000",
    fontSize: 13,
    fontWeight: "500",
  },
  tagTextSelected: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 14,
    backgroundColor: "#fafafa",
    minHeight: 20,
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: "#D91E18",
    borderRadius: 70,
    paddingVertical: 18,
    alignItems: "center",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "DM",
  },
});

// Export both for navigation usage
export { FeedbackScreen, FeedbackSuccess };
