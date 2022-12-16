import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MyStack from './navigation/navigate'


import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component{
 render(){
  return(
<NavigationContainer>
    <MyStack/>
    </NavigationContainer>
  );
 }
}

const styles = StyleSheet.create({
 
});
