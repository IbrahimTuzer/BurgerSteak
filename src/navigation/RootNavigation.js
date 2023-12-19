import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import AuthStack from './AuthStack'
import UserStack from './UserStack'
import app from "../../firebaseConfig"
import { useDispatch, useSelector } from 'react-redux'

const RootNavigation = () => {

const {isAuth} = useSelector((state)=> state.user)


  return (
    <NavigationContainer>
        {
            !isAuth ? <AuthStack /> : <UserStack />
        }
    </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})