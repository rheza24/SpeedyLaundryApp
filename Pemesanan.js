import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const PemesananLaundryScreen = ({ navigation }) => {
  const [items, setItems] = useState([
    { nama: 'Sprei', harga: 6000, jumlah: 0 },
    { nama: 'Celana', harga: 2500, jumlah: 0 },
    { nama: 'Kaos Kaki', harga: 2000, jumlah: 0 },
    { nama: 'Celana Dalam', harga: 1000, jumlah: 0 },
    { nama: 'Sepatu', harga: 4000, jumlah: 0 },
    { nama: 'Selimut', harga: 15000, jumlah: 0 },
    { nama: 'Gorden', harga: 10000, jumlah: 0 },
    { nama: 'Baju', harga: 4500, jumlah: 0 },
  ]);

  const incrementItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index].jumlah++;
    setItems(updatedItems);
  };

  const decrementItem = (index) => {
    const updatedItems = [...items];
    if (updatedItems[index].jumlah > 0) {
      updatedItems[index].jumlah--;
    }
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.harga * item.jumlah;
    });
    return total;
  };

  const navigateToPembayaran = () => {
    navigation.navigate('Pembayaran');
  };

  const navigateToHome = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pemesanan Laundry</Text>
      <ScrollView style={styles.itemContainer}>
        {items.map((item, index) => (
          <View style={styles.itemRow} key={index}>
            <Text style={styles.itemName}>{item.nama}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.quantityButton} onPress={() => decrementItem(index)}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.jumlah}</Text>
              <TouchableOpacity style={styles.quantityButton} onPress={() => incrementItem(index)}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Harga:</Text>
        <Text style={styles.totalPrice}>Rp {calculateTotal()}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>Waktu:</Text>
        <Text style={styles.time}>{new Date().toLocaleString()}</Text>
      </View>
      <TouchableOpacity style={styles.navigationButton} onPress={navigateToPembayaran}>
        <Text style={styles.navigationButtonText}>Pembayaran</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navigationButton} onPress={navigateToHome}>
        <Text style={styles.navigationButtonText}>Kembali ke Beranda</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flex: 1,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemName: {
    flex: 1,
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#c0c0c0',
    borderRadius: 8,
    padding: 5,
    width: 30,
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  timeText: {
    fontSize: 16,
    marginRight: 10,
  },
  time: {
    fontSize: 16,
  },
  navigationButton: {
    backgroundColor: '#c0c0c0',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  navigationButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default PemesananLaundryScreen;
