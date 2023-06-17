import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainerRef } from '@react-navigation/native';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import RiwayatPemesananScreen from './Riwayat';
import PemesananLaundryScreen from './Pemesanan';
// import 'react-native-gesture-handler';

const Stack = createStackNavigator();
// export const navigationRef = React.createRef();

// export function navigate(name, params) {
//     navigationRef.current && navigationRef.current.navigate(name, params);
//   }

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Riwayat" component={RiwayatPemesananScreen} />
        <Stack.Screen name="Pemesanan" component={PemesananLaundryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
