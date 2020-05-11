import React, { Component, useState } from 'react';
import { Button, View, Text, Image, StyleSheet, Dimensions, SafeAreaView, Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ImageView from 'react-native-image-view';

var {height, width} = Dimensions.get('window');

function ProductScreen({ route, navigation }) {
    const { itemName, itemPrice, itemShippingFee, itemPhoto } = route.params;
    const prodImageLink = 'http://afsshoppingapp.com/products/images/';
    const frieghtAndHandling = updateFrieghtAndHandling(itemShippingFee);
    const imageURI = prodImageLink.concat(itemPhoto);
    const images = [{
      source: { uri: {imageURI}}
    }];
    
    const [ currentCart, setCount ] = useState(0);
    const addToCart = () => setCount(myCart = myCart + 1);
    const addToCartAlert = () => 
      Alert.alert(
        "Successfully added to your Cart.");

    function updateFrieghtAndHandling(itemShippingFee) {
      if (itemShippingFee == 0) {
          return 'Regular Shipping Rates'
      } else {
        return 'Additional Freight and Handling cost: $'+JSON.stringify(itemShippingFee).concat('.00')
      }
    }

    return (
      <View style={{height:height}}>
        <ScrollView>
           <View style={{marginTop: 5}}> 
              <Image
                                    style={styles.imageProduct}
                                    resizeMode="contain"
                                    source={{uri : prodImageLink.concat(itemPhoto)}} />
            </View>
            <View style={{alignItems: "flex-start", width: width-10, marginLeft: 20}}>
              <Text style={styles.productName}>{itemName}</Text>
            </View>
            <View style={{marginLeft: 20}}>
              <Text style={styles.productPrice}>$ {itemPrice}</Text>
            </View>
            <View style={{marginTop: 5, marginLeft: 20, marginBottom: 20}}>
              <Text style={{color: '#F00'}}>{frieghtAndHandling}</Text>
            </View>
            </ScrollView>
            
            <View style={{position: 'absolute', justifyContent: 'flex-end', bottom:170, alignItems: 'flex-end', flex: 1}}>
              <TouchableOpacity style={{backgroundColor: '#fc0', width: width, height: 70, position: 'relative', alignItems: 'center', justifyContent: 'center',}} onPress={addToCartAlert} >
                <Button color='#000' title='Add to Cart' />
              </TouchableOpacity>
            </View>
            
            </View>
        
        
    );
  }

  

  const styles = StyleSheet.create({
    container: {
      height: height
    },
    imageProduct:{
      width: width,
      height: height/2,
      backgroundColor:'transparent',
      marginBottom: 10,
      justifyContent: 'flex-start',
      marginTop: 5
    },
    productName: {
      fontSize: 32,
      marginTop: 20,
      marginRight: 10
    },
    productPrice: {
      fontSize: 28,
      fontWeight: "bold"
    }
  });

  export default ProductScreen;