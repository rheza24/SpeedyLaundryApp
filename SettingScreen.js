import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingScreen = () => {
  const toggleSwitch = (value) => {
    // Logika
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan</Text>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Mode Gelap</Text>
        <Switch onValueChange={toggleSwitch} value={false} />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Notifikasi</Text>
        <Switch onValueChange={toggleSwitch} value={true} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  settingLabel: {
    fontSize: 16,
  },
});

export default SettingScreen;
