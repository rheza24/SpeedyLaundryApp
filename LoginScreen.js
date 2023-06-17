import React from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, Image, navigation } from 'react-native';
// import { navigate, navigationRef } from './App';

const LoginScreen = ({navigation}) => {
  const handleLogin = () => {
    console.log('handleLogin')
    navigation.navigate('HomeScreen');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.OuterContainer}>
      
      <ImageBackground
      source={require('./Images/Background.png')}
      style={styles.container}>
      <Image source={require('./Images/Logo.png')} 
      style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        // Fungsi untuk menyimpan email yang dimasukkan
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        // Fungsi untuk menyimpan password yang dimasukkan
      />
      <Button title="Login" onPress={handleLogin} 
      style={styles.lojin} />
      <Button title="Signup" onPress={handleSignup} />

      
      </ImageBackground>
      
    </View>
  );
};

const styles = StyleSheet.create({

  OuterContainer:{
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,

  },
  logo:{
    top: '6%',
    width: '100%',
  },
  // // lojin:{
  // //   marginBottom:'100',
  // //   width: '100%',
  // //   height: 40,
  // //   borderRadius: 7,
  // //   fontWeight: 'bold',
  // //   color :'black'
  // },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 7,
    fontWeight: 'bold',
    color :'black'
  },
});

export default LoginScreen;
