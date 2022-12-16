import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import firebase from 'firebase';

export default class Loading extends React.Component {
    componentDidMount()
    {

       
        firebase.auth().onAuthStateChanged((user) => {
          
            if (user) {
              
              this.props.navigation.navigate('Home')
              var uid = user.uid;
              // ...
            }
            else{
              this.props.navigation.navigate('Login')
            } 
          });
    }
    render() {
  return (
    <View>
      <Text>LoadingScreen</Text>
    </View>
  )
}
}



const styles = StyleSheet.create({})