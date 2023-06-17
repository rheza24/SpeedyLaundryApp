import React from 'react';
import { StyleSheet, View, FlatList, Image, TouchableOpacity, Text, ImageBackground, Dimensions } from 'react-native';

const Homepage = ({ navigation }) => {
  const images = [
    require('./Images/Deals.png'),
    require('./Images/Bersih.png'),
    require('./Images/Berkualitas.png'),
  ];

  const handlePesan = () => {
    navigation.navigate('Pemesanan');
  };

  const handleRiwayatPemesanan = () => {
    navigation.navigate('Riwayat');
  };

  return (
    <ImageBackground source={require('./Images/Background.png')} resizeMode="cover" style={styles.imagebg}>
      <View style={styles.container}>
        <Text style={styles.headingText}>Beranda</Text> 
        <FlatList
          data={images}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.image} resizeMode="cover" />
          )}
        />
        <View style={styles.midContainer}>
          <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
              <Image source={require('./Images/MesinCuci.png')} style={styles.bottomImage} resizeMode="cover" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.labelText}>Pakaian Kotor</Text>
              <TouchableOpacity style={styles.button} onPress={handlePesan}>
                <Text style={styles.buttonText}>Pesan</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleRiwayatPemesanan}>
                <Text style={styles.buttonText}>Riwayat Pemesanan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>{}</View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  headingText: { 
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    backgroundColor: 'white',
  },
  image: {
    width: 300,
    height: 190,
    marginTop: 30,
    flex: 1,
    alignItems: 'center',
    marginRight: 7,
    marginLeft: 7,
    borderRadius: 20,
    marginBottom: 10,
  },
  midContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 7,
    marginBottom: 80,
    marginRight: 10,
    marginLeft: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomImage: {
    width: 107,
    height: 72,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginRight:6,
    marginLeft:5,

  },
  imagebg: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Homepage;