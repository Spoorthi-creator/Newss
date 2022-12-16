import React from "react"
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


import { Octicons } from '@expo/vector-icons';
import firebase from "firebase";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    signIn = () => {
        this.props.navigation.navigate('SignIn');
    }

    signUp = () => {
        this.props.navigation.navigate('SignUp');
    }

    signInGoogle = () => {
        // const auth = getAuth(db);

        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {


                alert('Successfully logged in');
                this.props.navigation.replace('Home');

            }).catch((error) => {

                var errorMessage = error.message;
                alert(errorMessage);
            });


       
    }


    sendEmail = () => {
        if (this.state.email != "") {
            firebase.auth().sendPasswordResetEmail(this.state.email)
                .then(() => {
                    alert('Email sent')
                })

                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage)
                    // ..
                });
        }
        else {
            alert("Please enter the email id")
        }

    }
    render() {
        return (
           
            <View style={{ flex: 1}}>
           
                <ScrollView>
              

                    <Image source={require('../assets/Login.jpeg')} style={{ width: "100%", height: 330, marginTop: '3%', alignSelf: 'center', resizeMode: 'cover',borderRadius:10}}></Image>

                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: '5%', marginTop: '10%', color: '#0F52BA' , alignSelf:'center',alignItems:'center'}}>Get The Latest And Updated News</Text>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: '5%', color: '#0F52BA' , alignSelf:'center',alignItems:'center'}}>With Us</Text>

                    <Text style={{ fontSize: 13, fontWeight: 'bold', marginLeft: '5%', color: '#708090' , alignSelf:'center',alignItems:'center',marginTop:20}}>Get The Latest Updates On Most Popular News With Us</Text>
                    


                    <View style={{alignSelf:'center',fontWeight:'bold'}}>
                    <Octicons name="dash" size={70} color="black" />
                    </View>
                    
                    <TouchableOpacity style={{ width: '80%', height: 40, backgroundColor: '#4169E1', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: '3%',borderRadius:10 }} onPress={() => { this.signIn() }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20,borderRadius:10 }} >Already an user? Sign in</Text>
                    </TouchableOpacity>
                    


          

                    <TouchableOpacity style={{ width: '90%', height: 40, justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}} onPress={() => { this.signUp() }}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }} >New User?Sign up</Text>
                    </TouchableOpacity>

                   

                   






              </ScrollView>
               
            </View>
   
        )
    }
}