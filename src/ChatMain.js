import React, { Component, useState } from 'react';
import { Platform, KeyboardAvoidingView, SafeAreaView, View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import FireBase from './FireBaseConfig';

export default ChatMain = ({ route, navigation }) => {

        const { username } = route.params;
        const [ chats, messages ] = useState([]);

        get user() {
            return {
                _id: FireBase.uid,
                name: {username}
            };
        }


        componentDidMount() {
            FireBase.get(message => this.setState(previous => ({
                messages: GiftedChat.append(previous.message, message)
            }))
            );  
        }

        componentWillUnmount() {
            FireBase.off()
        }

  
    return (
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
         <Text>Chatting is here {username}</Text>
      </View>
    );
}