import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {WelcomePage, Register, LoginScreen} from "../screens/"

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

      <Stack.Screen name='WelcomePage' component={WelcomePage}/>
      <Stack.Screen name='Register' component={Register}/>
      <Stack.Screen name='LoginScreen' component={LoginScreen}/>

    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})