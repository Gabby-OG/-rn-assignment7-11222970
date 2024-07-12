import React, { useState, useCallback, useContext } from 'react';
import { View, Text, FlatList, Image, Pressable, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Header from '../components/Header';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartContext } from '../contexts/CartContext';

const HomeScreen = ({ navigation }) => {
  const { cart, addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchProducts();
    }, [])
  );

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { item })}>
        <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
          <View style={styles.iconContainer}>
            <Icons name="plus" size={12} color="#fff" />
          </View>        
        </TouchableOpacity>
      </TouchableOpacity>
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.description} numberOfLines={3}>{item.description}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor='#fff' />
      <Header navigation={navigation} cart={cart} />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  subHeaderIcons: {
    flexDirection: 'row',
  },
  subHeaderIcon: {
    marginRight: 10,
    borderRadius: 18,
    padding: 6,
    backgroundColor: '#eee'
  },
  logo: {
    width: 180,
    height: 40,
  },
  subIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productList: {
    justifyContent: 'space-between',
  },
  productContainer: {
    flex: 1,
    margin: 8,
    marginBottom: 15,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
  iconContainer: {
    backgroundColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 14, 
  },
  productName: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    color: '#dd8661',
    marginTop: 5,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default HomeScreen;
