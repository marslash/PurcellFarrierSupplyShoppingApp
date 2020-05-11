import React, { Component, useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, StyleSheet, Button, Dimensions } from 'react-native';

var {height, width} = Dimensions.get('window');

function Login() {

  const [textEmail, UserEmail] = useState('');
  const [textPass, UserPassword] = useState('');
  const UserName = useState('User');

  function UserLogin(UserEmail, UserPassword) {
        // const { UserEmail } = this.state
        // const { UserPassword } = this.state
        // const { UserName } = this.state
      fetch('http://afsshoppingapp.com/appuser/user_login.php', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: UserEmail,
              password: UserPassword,
              
          })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if(responseJson == 'Data Matched')
          {
              Alert.alert("Success");
              // this.navigation.navigate('ProfileScreen');
          } else {
              Alert.alert(responseJson);
          }
        })
        .catch((error) => {console.error(error)
    });
    }


return(
        <View style={styles.container}>
          <TextInput
            value={textEmail}
            onChangeText={text => UserEmail(text)}
            placeholder={'Email'}
            style={styles.input}
          />
          <TextInput
            value={textPass}
            onChangeText={text => UserPassword(text)}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
          />
          
          <Button
            title={'Login'}
            style={styles.input}
            onPress={() => UserLogin(UserEmail, UserPassword)}
          />
        </View>
);
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
export default Login;



// export default class Login extends Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         UserEmail: '',
//         UserPassword: '',
//         UserName: '',
//         isLoading: true
//       };
//     }

  

  
//     render() {
      
  
//       return (

//       );
//     }
//   }
  
  