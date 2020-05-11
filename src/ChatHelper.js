import React, { Component, useState } from 'react';
import { Text, View, TextInput, StyleSheet, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
var {height, width} = Dimensions.get('window');

export default ChatHelper = ({navigation}) => {

    const [ name, setName ] = useState(null);
  
    return (
      <View style={styles.container}>
         <View style={styles.circle} />
         <View style={{marginTop: 64}}>
             <Image source={require('../image/PFSAPP.png')} style={{height:60,width:width/2,margin:10, alignSelf: 'center'}} resizeMode='contain' />
         </View>
         <View style = {{marginHorizontal: 32}}>
             <Text style={styles.header}>Username</Text>
             <TextInput style={styles.input} placeholder="Enter Username" onChangeText={text => setName(text) } value={name} />
             <View style={{alignItems: 'flex-end', marginTop: 18}}>
                 <TouchableOpacity style={styles.continue} onPress={() => navigation.navigate('ChatScreen', {username: name})}>
                    <Icon name="arrow-long-right" size={32} color="#fff" />
                 </TouchableOpacity>
             </View>
         </View>
      </View>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f5f7',
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500/2,
        backgroundColor: '#fff',
        position: 'absolute',
        left: -120,
        top: -20
    },
    header: {
        fontWeight: '800',
        fontSize: 30,
        color: '#514e5a',
        marginTop: 32
    },
    input: {
        marginTop: 32,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#BAB7C3',
        borderRadius: 30,
        paddingHorizontal: 16,
        color: '#514e5a',
        fontWeight: '600'
    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 70/2,
        backgroundColor: '#9075e3',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
