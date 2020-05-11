import React, { Component, useState } from 'react';
import { Button, View, Text, Image, StyleSheet, Dimensions, SafeAreaView, Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ImageView from 'react-native-image-view';

var {height, width} = Dimensions.get('window');

function Profile({ route, navigation }) {

    const UserName = route.params;
    
    return (
        <View style={{height:height}}>
            <Text> Hello {UserName}</Text>
            
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

  export default Profile;