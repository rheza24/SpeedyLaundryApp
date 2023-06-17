import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Background Gambar */}
      <Image
        style={styles.backgroundImage}
        source={require('./assets/Frame 144.png')}
        resizeMode="cover"
      />
      {/* Header Bar */}
      <View style={styles.headerBar}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      {/* Header Profil */}
      <View style={styles.profileHeader}>
        {/* Profile Image */}
        <Image
          style={styles.backgroundImage1}
          source={require('./assets/mesimiskin.png')}
          resizeMode="cover"
        />
        <Image
          style={styles.profileImage}
          source={require('./assets/messi.jpeg')}
        />
        {/* Nama */}
        <Text style={styles.name}>Lionel Messi</Text>
      </View>
      
      {/* Kolom Data Diri */}
      <View style={styles.profileData}>
        {/* Isi Kolom Data Diri */}
        <Text style={styles.email}>lionel.messi@example.com</Text>
        <Text style={styles.phone}>+1 1234567890</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  backgroundImage1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '70%',
    zIndex: -1,
  },
  headerBar: {
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 1)', // warna latar belakang 
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // warna teks 
  },
  profileHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    marginTop: 120,
    borderWidth: 2, // Lebar garis tepi 
    borderColor: '#ffffff', // Warna garis tepi 
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff', // warna teks 
  },
  profileData: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // warna latar belakang 
  },
  email: {
    fontSize: 16,
    marginBottom: 5,
  },
  phone: {
    fontSize: 16,
  },
});

export default Profile;