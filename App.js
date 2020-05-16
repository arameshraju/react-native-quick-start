import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 import Home from './screens/home';
import Chapter01 from './screens/Ch-01';
import Chapter02 from './screens/Ch-02';

 


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chapter01" component={Chapter01} />
      <Stack.Screen name="Chapter02" component={Chapter02} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
