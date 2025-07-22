import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const ServiceCard = ({ icon, title, price }) => (
  <View style={styles.serviceCard}>
    <View style={styles.iconAndTitle}>
    <MaterialCommunityIcons name={icon} size={30} color="#000" />
    <Text style={styles.serviceTitle}>{title}</Text>
    </View>
    <Text style={styles.servicePrice}>₹{price}</Text>
  </View>
);

const RatingStars = ({ rating, count }) => {
  return (
    <View style={styles.ratingContainer}>
      <Text style={styles.ratingText}>Ratings: </Text>  
      <Text style={styles.ratingText}>{rating}</Text>
      {[1, 2, 3, 4, 5].map((star) => (
        <AntDesign
          key={star}
          name={star <= Math.floor(rating) ? 'star' : 'staro'}
          size={20}
          color="#6B4EFF"
        />
      ))}
      <Text style={styles.ratingCount}>({count})</Text>
    </View>
  );
};

export default function ProviderDetails ({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name={"arrow-back-outline"} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("HamburgerMenu")}>
                <Ionicons name="menu-outline" style={styles.icon} />
                </TouchableOpacity>
              </View>

        <Image
          source={require('../../assets/images/p1.png')}
          style={styles.heroImage}
        />

        <View style={styles.content}>
          <Text style={styles.title}>Dwarka mor service</Text>
          
          <View style={styles.serviceType}>
            <Text style={styles.serviceTypeText}>Engine Repair</Text>
            <Text style={styles.price}>₹9,499</Text>
          </View>

          <RatingStars rating={4.0} count={60} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About:</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Location:</Text>
            <TouchableOpacity style={styles.locationButton}>
              <Text style={styles.locationText}>B1-41, Chandan park,{'\n'}Dwarka mor - 110059</Text>
              <View style={styles.seeLocation}>
                <Ionicons name="location" size={20} color="white" />
                <Text style={styles.seeLocationText}>See location</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Shop Hours:</Text>
            <View style={styles.hoursContainer}>
              <Text style={styles.closed}>Weekends closed!</Text>
              <Text style={styles.hours}>10AM - 7:30PM</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact Us:</Text>
            <TouchableOpacity style={styles.contactButton}>
              <Ionicons name="call" size={20} color="white" />
              <Text style={styles.contactText}>+91 9123456780</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Other Services:</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See all</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ServiceCard icon="car-wash" title="Detailing" price="4,499" />
              <ServiceCard icon="wrench" title="Repairs" price="2,499" />
              <ServiceCard icon="car-cog" title="Accessories" price="999" />
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.scheduleButton} onPress={()=> navigation.navigate("BookSlot")}>
        <Text style={styles.scheduleButtonText}>Check schedule</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap:"75%",
    padding:20,
    backgroundColor:'#191919'
  },
  icon: {
    fontSize: 30,
    color:'#FFFFFF',
    borderColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
    
  },
  heroImage: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "DM",
    marginBottom: 8,
  },
  serviceType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  serviceTypeText: {
    fontSize: 20,
    color: '#0000008F',
    fontWeight: "500",
    fontFamily: "DM",
  },
  price: {
    fontSize: 20,
    color: '#4E46B4',
    fontWeight: "500",
    fontFamily: "DM",
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal:10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingText: {
    marginRight: 4,
    fontSize: 20,
    fontWeight: '600',
    fontFamily: "DM",
  },
  ratingCount: {
    marginLeft: 4,
    color: '#0000008F',
    fontFamily: "DM",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    fontFamily: "DM",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#0000008F',
    lineHeight: 24,
    fontFamily: "DM",
  },
  locationButton: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    fontFamily: "DM",
    fontWeight: "500",
    color: '#0000008F',
    flex: 1,
  },
  seeLocation: {
    backgroundColor: '#40A69F',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 70,
  },
  seeLocationText: {
    color: 'white',
    fontSize: 14,
    fontFamily: "DM",
    fontWeight: "500",
    marginLeft: 4,
  },
  hoursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hours: {
    fontSize: 20,
    fontFamily: "DM",
    fontWeight: "500",
    padding: 8,
    borderRadius: 6,
    marginLeft: 30,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 70,
  },
  closed: {
    fontSize: 16,
    fontFamily: "DM",
    fontWeight: "500",
    color: '#0000008F',
  },
  contactButton: {
    backgroundColor: '#40A69F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 70,
  },
  contactText: {
    color: 'white',
    fontSize: 16,
    fontFamily: "DM",
    fontWeight: "500",
    marginLeft: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  seeAll: {
    color: '#4E46B4',
    fontFamily: "DM",
    fontWeight: "500",
    fontSize: 16,
  },
  serviceCard: {
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginRight: 12,
    width: 180,
    height:120
  },
  iconAndTitle: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 8,
  },
  serviceTitle: {
    fontSize: 20,
    fontFamily: "DM",
    fontWeight: "500",
    marginVertical: 8,
    marginHorizontal: 5,
  },
  servicePrice: {
    backgroundColor:'#45B7B7',
    color:'#fff',
    paddingHorizontal:24,
    paddingVertical:6,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: '600',
     fontFamily: "DM",
  },
  scheduleButton: {
    backgroundColor: '#4E46B4',
    margin: 16,
    padding: 16,
    borderRadius: 70,
    alignItems: 'center',
  },
  scheduleButtonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: "DM",
    fontWeight: "500",
  },
});

