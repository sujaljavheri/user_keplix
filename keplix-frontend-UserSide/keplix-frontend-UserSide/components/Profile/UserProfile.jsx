import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function UserProfile({ navigation }) {
  const [Name, setName] = useState('Nithish Kumar');
  const [Email, setEmail] = useState('nithish18012004@gmail.com');
  const [contactNumber, setContactNumber] = useState('+919123456789');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name={"arrow-back-outline"} style={styles.icon} />
              </TouchableOpacity>
            </View>

      <View style={styles.profilePicContainer}>
  <View style={styles.profilePicWrapper}>
    <Image
      source={require("../../assets/images/3.jpeg")}
      style={styles.profilePic}
    />
    <TouchableOpacity
      style={styles.iconContainer}
      onPress={() => navigation.navigate("Profile")}
    >
      <MaterialIcons name="edit" size={20} color="#fff" />
    </TouchableOpacity>
  </View>
  <TouchableOpacity>
    <View style={styles.row}>
      <Entypo name="camera" size={20} color="#4E46B4" />
      <Text style={styles.uploadText}>Edit Profile</Text>
    </View>
  </TouchableOpacity>
</View>


      <View style={styles.inputContainer}>
  <Text style={styles.label}>Name</Text>
  <View style={styles.inputWrapper}>
    <TextInput
      style={styles.input}
      value={Name}
      onChangeText={setName}
    />
    <MaterialIcons name="edit" size={20} color="#A9A9A9" style={styles.icon1} />
  </View>

  <Text style={styles.label}>Phone Number</Text>
  <View style={styles.inputWrapper}>
    <TextInput
      style={styles.input}
      value={contactNumber}
      keyboardType="phone-pad"
      onChangeText={setContactNumber}
    />
    <MaterialIcons name="edit" size={20} style={styles.icon1} />
  </View>

  <Text style={styles.label}>Email</Text>
  <View style={styles.inputWrapper}>
    <TextInput
      style={styles.input}
      value={Email}
      onChangeText={setEmail}
      
    />
    <MaterialIcons name="edit" size={20} style={styles.icon1} />
  </View>
</View>


      <View style={styles.buttoncontainer}>
  <ScrollView contentContainerStyle={styles.scrollContainer}>
  </ScrollView>
  <TouchableOpacity style={styles.saveButton} onPress={()=> navigation.navigate("ProfileVerify")}>
    <Text style={styles.saveButtonText}>Save Changes</Text>
  </TouchableOpacity>
</View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    fontSize: 30,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  text: {
    fontSize: 24,
    color: "#0000008F",
    fontFamily: "DM",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
   profilePicContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicWrapper: {
    position: 'relative',
    width: 100,
    height: 100,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, // For Android shadow
    backgroundColor: '#fff', // Fallback for shadow
  },
  profilePic: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 1)',
  },
  iconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(79, 79, 79, 0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // For Android
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  uploadText: {
    fontSize: 16,
    color: '#4E46B4',
    fontFamily: 'DM',
    fontWeight: '500',
    marginLeft: 5,
    
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.56)',
    fontFamily: 'DM',
    fontWeight: '500',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(226, 226, 226, 1)',
    marginBottom: 15,
    paddingHorizontal: 15, 
  },
  input: {
    flex: 1, 
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.56)',
    fontFamily: 'DM',
    fontWeight: '500',
    backgroundColor: 'transparent', 
    paddingVertical: 10,
  },
  icon1: {
    marginLeft: 10, 
    color: 'rgba(0, 0, 0, 0.56)', 
  },
  buttoncontainer: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 80,
  },
  saveButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(78, 70, 180, 1)',
    padding: 15,
    alignItems: 'center',
    borderRadius:70
  },
  saveButtonText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'DM',
    fontWeight: '500',
  },
});
