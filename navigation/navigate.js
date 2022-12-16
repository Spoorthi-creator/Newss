import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';

import Loading from '../screens/Loading';
import Entertainment from '../screens/Entertainment';
import Business from '../screens/Business';
import Sports from '../screens/Sports';
import Login from '../screens/Login';
import { Ionicons,MaterialIcons,MaterialCommunityIcons,FontAwesome,Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import SignUp from '../screens/SignUp';





const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




function MyBottonTab()
{
return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {backgroundColor: ''},
        tabBarInactiveTintColor: '#0096FF',
        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor:'#A7C7E7'
        
      }}>
      <Tab.Screen
        name="Headlines"
        component={Home}
        options={({route}) => ({
          tabBarStyle: {
           
            backgroundColor: '',
          },
          
          tabBarIcon: ({color, size}) => (
            <Entypo name="news" size={color} color="#0096FF" />
          ),
        })}
      />
        <Tab.Screen
        name="Sports"
        component={Sports}
        options={({route}) => ({
          tabBarStyle: {
           
            backgroundColor: '',
          },
          headerShown: true ,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="sports-handball" size={24} color="#0096FF" />
            
          ),headerShown:false
        })}
      />

<Tab.Screen
        name="Entertainment"
        component={Entertainment}
        options={({route}) => ({
          tabBarStyle: {
           
            backgroundColor: '',
          },
          headerShown: true ,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="party-popper" size={size} color="#0096FF" />
            
          ),headerShown:false
        })}
      />

<Tab.Screen
        name="Business"
        component={Business}
        options={({route}) => ({
          tabBarStyle: {
           
            backgroundColor: '',
          },
          headerShown: true ,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="newspaper-o" size={size} color="#0096FF" />
            
          ),headerShown:false
        })}
      />
      
      </Tab.Navigator>

      
)
}




function MyStack() {
    return (

        <Stack.Navigator>

 <Stack.Screen
                name="Loading"
                component={Loading}
                options={{headerShown:false}}

                


            />  

 <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown:false}}

                


            /> 

<Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown:true
                  
                }}

                


            /> 
<Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{headerShown:true
                  
                }}

                


            /> 

<Stack.Screen
               name="Home"
                component={MyBottonTab} 
                options={{headerShown:false
                }}
            />



           

        </Stack.Navigator>

    

    );
}
export default MyStack;
