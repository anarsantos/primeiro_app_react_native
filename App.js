import React, {useState, useEffect} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { css } from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home,Login,Rastreio } from './assets/views';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            title:"WEFLOG",
            headerStyle:{backgroundColor:"#F58634"},
            headerTintColor:'#333',
            headerTitleStyle:{fontWeight:'bold'},
            headerTitleAlign:"center"
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Rastreio" component={Rastreio} />
       {/*<Stack.Screen name="AreaRestrita" component={AreaRestrita} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}