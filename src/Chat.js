import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ChatScreen from './ChatMain';
import ChatHelper from './ChatHelper';

const ChatStack = createStackNavigator();

function Chat() {
  return (
      <ChatStack.Navigator>
        <ChatStack.Screen name="Customer Support Chat" component={ChatHelper} />
        <ChatStack.Screen name="ChatScreen" component={ChatScreen} />
      </ChatStack.Navigator>
  );
};
export default Chat;