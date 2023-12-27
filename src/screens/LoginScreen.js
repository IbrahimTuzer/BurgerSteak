import { StyleSheet, Text, View, Image, TextInput, Pressable} from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import {MyButton} from '../components';
import {login, autoLogin} from "../redux/userSlice/"

const LoginScreen = ({navigation}) => {

  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [handleErrorMessage, setHandleErrorMessage] = useState("")


  const dispatch = useDispatch();
  const {errorMessage} = useSelector((state)=> state.user)


  useEffect(() => {

    const trueEmail = 'Firebase: Error (auth/invalid-email)'
      if(trueEmail == errorMessage){
        setHandleErrorMessage('Invalid Email or Password! Try Again')
       
    }
  
    setHandleErrorMessage(errorMessage)
  
  }, [errorMessage])

  const handleLogin = ()=> {
    dispatch(login({email, password}))
  }
  
   useEffect(() => {
     dispatch(autoLogin())
   }, [])
   
  
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.maincontainer}>
         
        <View style={styles.backIconContainer}>
          <Pressable style={({pressed})=> [{transform: [{translateX: pressed ? -5 : 0}]}]}
                     onPress={()=> navigation.navigate("WelcomePage")}>
         <Ionicons name="arrow-back" size={36} color="black" />
         </Pressable>
        </View>

        <View style={styles.imageContainer}>
           <Image  style={styles.image}
                   source={require("../../assets/register.png")}/>
        </View>

       <View style={styles.inputContainer}>
         <TextInput
          style={styles.inputText}
          placeholder='Enter your email'
          placeholderTextColor={"black"}
          onChangeText={(text)=> setEmail(text.toLowerCase())}
          value={email}
         />
         <TextInput
          style={styles.inputText}
          placeholder='Enter your password'
          placeholderTextColor={"black"}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
         />
       </View>


       <View style={styles.errorMessageContainer}>
          <Text style={styles.errorText}>{handleErrorMessage}</Text>
       </View>

       <View style={styles.buttonContainer}>
           
           <MyButton
            title='Login'
            handleButton={handleLogin}
           />
       
          <Pressable style={styles.loginButton}
                     onPress={()=> navigation.navigate("Register")}>
            <Text style={styles.loginText}>Sign Up</Text>
          </Pressable>
       </View>
    
       
  

      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
    
  },
  maincontainer:{
    flex: 1,
    width: "100%",
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  backIconContainer:{
    flex: 1,
    width: "95%", 
  },
  imageContainer:{
    flex: 3,
    width: "95%",
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    width: 300,
    height:300,
    resizeMode: "center"
  },
  inputContainer:{
    flex: 3,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    
  },
  inputText:{
    width: "100%",
    textAlign: "center",
    marginVertical: 15,
    paddingVertical: 15,
    borderRadius: 20,
    backgroundColor: "#D9D9D9",
      
  },
  errorMessageContainer:{
    width:"95%",
    marginVertical:5,
    paddingVertical:10,
    alignItems:"center",
    justifyContent:"center",

  },
  errorText:{
    fontSize:18,
    fontWeight:"bold",
    color:"#A20040",
  },
  buttonContainer:{
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton:{
    paddingTop: 10,
  },
  loginText:{
    fontSize: 18,
  }
})