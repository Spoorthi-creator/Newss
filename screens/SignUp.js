import React from "react"
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import firebase from "firebase";
import db from "../config"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    loginNow = () => {
        if(this.state.email!="" && this.state.password!="")
        {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then((userCredential) => {
    
   db.collection('users').add({email:this.state.email,password:this.state.password})
    alert("Welcome to APT");
    this.props.navigation.replace("Home")
    
  })
  .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage);
    
  });
}
else{
    alert("Please fill in both the fields");//FormValidator
}
    }

   


    
    render() {
        return (
            <View style={{ flex: 1}}>
             {/* <ImageBackground source={require('../assets/1.png')} style={{ flex: 1}}> */}
                <KeyboardAwareScrollView>
                    

                    <Image source={require('../assets/signUpp.jpg')} style={{ width: "100%", height: 300, alignSelf: 'center', resizeMode: 'cover', borderRadius:10 }}></Image>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft:'5%', color: '#000080' , marginTop:'3%' }}>Sign up</Text>

                    <View style={{ flexDirection: 'row', marginTop: '5%', alignSelf: 'center', width: '90%', justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome5 name="at" size={24} color="#D3D3D3" />

                        <TextInput style={{ width: '90%', height: 30, borderBottomWidth: 2, borderBottomColor: '#0F52BA', border: 2, marginLeft: '5%', paddingLeft: 20 }} placeholder='Enter Email Id' onChangeText={(val) => { this.setState({ email: val }); }} />
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: '5%', alignSelf: 'center', width: '95%', justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="lock-open" size={24} color="#D3D3D3" />

                        <TextInput style={{ width: '85%', height: 30, borderBottomWidth: 2, borderBottomColor: '#0F52BA', border: 2, marginLeft: '5%', paddingLeft: 20 }}  placeholder='Password' onChangeText={(val) => { this.setState({ password: val }); }} />


                       
                    </View>

                   

                    <TouchableOpacity style={{ width: '90%', height: 40, backgroundColor: '#0F52BA', justifyContent: 'center', alignItems: 'center', borderRadius: 10, alignSelf: 'center', marginTop: '10%' }} onPress={() => { this.loginNow() }}>
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }} >Login</Text>
                    </TouchableOpacity>

                   







                </KeyboardAwareScrollView>
            </View>
        )
    }
}