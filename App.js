import * as React from 'react';
import { View, Text, Button, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// import Components
import Cart from './src/Cart'
// unable console yellow
console.disableYellowBox = true;
// import icons
import Icon from 'react-native-vector-icons/Entypo';
import Shop from './src/Shop';
import Account from './src/Account';
import CategoryList from './src/CategoryToProductHandler';
import Chat from './src/Chat';

Icon.loadFont();

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Shop" component={Shop} options={{
                    tabBarLabel: 'Shop',
                    tabBarIcon: ({color}) => {
                        return <Icon name="shop" color={color} size={26} />
                      },
                    }}
          />
        <Tab.Screen name="Categories" component={CategoryList} options={{
                    tabBarLabel: 'Categories',
                    tabBarIcon: ({color}) => {
                        return <Icon name="menu" color={color} size={26} />
                      },
                    }}
          />
        <Tab.Screen name="Chat" component={Chat} options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({color}) => {
                        return <Icon name="chat" color={color} size={26} />
                      },
                    }}
          />
        <Tab.Screen name="Cart" component={Cart} options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({color}) => {
                        return <Icon name="shopping-cart" color={color} size={26} />
                      },
                    }}
          />
        <Tab.Screen name="Account" component={Account} options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({color}) => {
                        return <Icon name="user" color={color} size={26} />
                      },
                    }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

export default App;