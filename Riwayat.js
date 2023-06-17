import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

const RiwayatPemesananScreen = ({ navigation }) => {
  const renderRiwayatContainer = (index) => {
    return (
      <View style={styles.container} key={index}>
        <Text style={styles.title}>Pemesanan {index + 1}</Text>
        <Text style={styles.info}>Biaya: 20.000</Text>
        <Text style={styles.info}>Status: Selesai</Text>
        <Text style={styles.info}>Tanggal: 15 Juni 2023</Text>
        <Text style={styles.info}>Jam: 10:00 AM</Text>
      </View>
    );
  };

  const navigateToHome = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <ImageBackground
      source={require('./Images/Background.png')} 
      style={styles.background}
    >
      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Riwayat Pemesanan</Text>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {[...Array(5)].map((_, index) => renderRiwayatContainer(index))}
        </ScrollView>
        <View style={styles.navigationContainer}>
          <TouchableOpacity style={styles.navigationButton} onPress={navigateToHome}>
            <Text style={styles.navigationButtonText}>Beranda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigationButton}>
            <Text style={styles.navigationButtonText}>Riwayat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigationButton}>
            <Text style={styles.navigationButtonText}>Profil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Warna latar belakang kontainer utama
  },
  background: {
    flex: 1,
    resizeMode: 'cover', //  tipe redimensi gambar
  },
  headerContainer: {
    backgroundColor: '#fff', // Warna latar belakang kontainer header
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Warna teks header
  },
  contentContainer: {
    marginBottom: 20,
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Warna latar belakang kontainer pemesanan 
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Warna teks judul pemesanan
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333', // Warna teks informasi pemesanan
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  navigationButton: {
    backgroundColor: '#c0c0c0',
    padding: 10,
    borderRadius: 8,
    width: '30%',
    alignItems: 'center',
  },
  navigationButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default RiwayatPemesananScreen;
