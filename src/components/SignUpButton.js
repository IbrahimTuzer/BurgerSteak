import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const SignUpButton = (props) => {

const title = props.title
const handleSignUp = props.handleSignUpButton
const isDisable = props.isDisable

  return (
    <Pressable 
    style={({pressed})=> [{backgroundColor: props.isDisable ? "#D9D9D9" : (pressed ? "gray" : "#FFC90B")},styles.otherButtonContainer]}
    onPress={handleSignUp}
    disabled={isDisable}>
        <Text style={styles.signUpText}>{title}</Text>
    </Pressable>
  )
}

export default SignUpButton

const styles = StyleSheet.create({
    otherButtonContainer: {
      borderWidth: 1,
      borderColor:"white",
      width:"70%",
      alignItems:"center",
      justifyContent:"center", 
      paddingVertical:10,
      borderRadius:30,
      marginBottom: 30,
    },
    signUpText: {
        fontSize:20,
        fontWeight:"bold",
        color:"black",
        
    }
})