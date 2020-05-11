import React, { Component, useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, StyleSheet, Button, Dimensions } from 'react-native';
import ProfileScreen from './Profile';

var {height, width} = Dimensions.get('window');

export default class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        UserEmail: '',
        UserPassword: '',
        UserName: '',
        isLoading: true
      };
    }

  
    UserLogin = () => {
        const { UserEmail } = this.state
        const { UserPassword } = this.state
        const { UserName } = this.state
      fetch('http://afsshoppingapp.com/appuser/user_login.php', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: UserEmail,
              password: UserPassword,
              username: UserName
          })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if(responseJson == 'Data Matched')
          {
              Alert.alert('Success');
                this.props.navigation.navigate(ProfileScreen, {userName: UserName});
          } else {
              Alert.alert(responseJson);
          }
        })
        .catch((error) => {console.error(error)
    });
    }
  
    render() {
      
  
      return (
        <View style={styles.container}>
          <TextInput
            value={this.state.UserEmail}
            autoCapitalize={'none'}
            onChangeText={UserEmail => this.setState({ UserEmail })}
            placeholder={'Email'}
            style={styles.input}
          />
          <TextInput
            value={this.state.UserPassword}
            onChangeText={UserPassword => this.setState({ UserPassword })}
            placeholder={'Password'}
            autoCapitalize={'none'}
            secureTextEntry={true}
            style={styles.input}
          />
          
          <Button
            title={'Login'}
            style={styles.input}
            onPress={this.UserLogin}
          />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: width-40,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  });  
  