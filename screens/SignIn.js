import React from "react"
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import firebase from "firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    loginNow = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((userCredential) => {
                if (this.state.email != "" && this.state.password != "") {
                    alert('Welcome back!');
                    this.props.navigation.replace('Home');
                }
                else {
                    alert("Please fill in both email and password fields!")
                }

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }

   


    // sendEmail = () => {
    //     if (this.state.email != "") {
    //         firebase.auth().sendPasswordResetEmail(this.state.email)
    //             .then(() => {
    //                 alert('Email sent')
    //             })

    //             .catch((error) => {
    //                 var errorCode = error.code;
    //                 var errorMessage = error.message;
    //                 alert(errorMessage)
    //                 // ..
    //             });
    //     }
    //     else {
    //         alert("Please enter the email id")
    //     }

    // }
    render() {
        return (
            <View style={{ flex: 1}}>
             {/* <ImageBackground source={require('../assets/1.png')} style={{ flex: 1}}> */}
                <KeyboardAwareScrollView>
                    

                    <Image source={require('../assets/NewsLogin.jpg')} style={{ width: "100%", height: 300, alignSelf: 'center', resizeMode: 'cover', borderRadius:10 }}></Image>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft:'5%', color: '#000080' , marginTop:'3%' }}>Sign in</Text>

                    <View style={{ flexDirection: 'row', marginTop: '5%', alignSelf: 'center', width: '90%', justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome5 name="at" size={24} color="#D3D3D3" />

                        <TextInput style={{ width: '90%', height: 30, borderBottomWidth: 2, borderBottomColor: '#0F52BA', border: 2, marginLeft: '5%', paddingLeft: 20 }} placeholder='Enter Email Id' onChangeText={(val) => { this.setState({ email: val }); }} />
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: '5%', alignSelf: 'center', width: '95%', justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="lock-open" size={24} color="#D3D3D3" />

                        <TextInput style={{ width: '85%', height: 30, borderBottomWidth: 2, borderBottomColor: '#0F52BA', border: 2, marginLeft: '5%', paddingLeft: 20 }}  placeholder='Password' onChangeText={(val) => { this.setState({ password: val }); }} />


                       
                    </View>

                    {/* <Text style={{ fontSize: 10, fontWeight: 'bold', alignSelf: 'flex-end', marginRight: '5%', marginTop: '5%', color: '#1F51FF' }} onPress={() => { this.sendEmail() }}>Forgot password?</Text> */}

                    <TouchableOpacity style={{ width: '90%', height: 40, backgroundColor: '#0F52BA', justifyContent: 'center', alignItems: 'center', borderRadius: 10, alignSelf: 'center', marginTop: '10%' }} onPress={() => { this.loginNow() }}>
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }} >Login</Text>
                    </TouchableOpacity>

                   







                </KeyboardAwareScrollView>
            </View>
        )
    }
}