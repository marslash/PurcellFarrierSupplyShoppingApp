import React, { useEffect, useState, Component } from 'react';
import { ActivityIndicator, Text, FlatList, Image, StyleSheet, Dimensions, View, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
var {height, width} = Dimensions.get('window');

import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import Categories from './Categories';
import ProductList from './ProductList';
import ProductScreen from './ProductScreen';

const Stack = createStackNavigator();

function CategoryToProductHandler() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="ProductList" component={ProductList} options={({ route }) => ({title: route.params.catName})} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} options={{title: 'Product'}}/>
      </Stack.Navigator>
  );
};
export default CategoryToProductHandler;