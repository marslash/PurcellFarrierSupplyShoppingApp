import React, { useEffect, useState, Component } from 'react';
import { ActivityIndicator, Text, FlatList, Image, StyleSheet, Dimensions, View, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
var {height, width} = Dimensions.get('window');
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton, HeaderTitle } from '@react-navigation/stack';

import LoginScreen from './Login';
import RegisterScreen from './Register';
import ProfileScreen from './Profile';

const Stack = createStackNavigator();

function Account() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Purcell Farrier Supply - Account Login'}}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
  );
};
export default Account;