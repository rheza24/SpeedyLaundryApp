import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,ImageBackground } from 'react-native';
import LoginScreen from './LoginScreen';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Nama, setNama] = useState('');

  const handleSignup = () => {
    //logika pendaftaran 
    // Misal diberi validasi email dan password
    if (email && password && Nama) {
      alert('Akun berhasil dibuat!');
      setEmail('');
      setPassword('');
      setNama('');
    } else {
      alert('Mohon isi semua field.');
    }
    
  };
  const SudahadaAkun = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
            <ImageBackground
      source={require('./Images/Background.png')}
      style={styles.OuterCountainer}>
      <Text style={styles.title}>Daftar Akun</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama"
        value={Nama}
        onChangeText={setNama}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Daftar" onPress={handleSignup} />
      <Button title="Sudah Punya Akun?" onPress={SudahadaAkun} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
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
  OuterCountainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    
  },
});

export default SignupScreen;
