import { StyleSheet, Text, View, ImageBackground, Pressable} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const WelcomePage = ({navigation}) => {
  return (
    <ImageBackground style={{flex:1}}
                     source={require("../../assets/welcome.jpg")}
                     resizeMode= "cover">

     <SafeAreaView style={styles.container}>
            <View style={styles.title}>
            <Text style={styles.burgerText}>BURGER </Text>
            <Text style={styles.burgerText} >STEAK HOUSE</Text>

            </View>

            <View style={styles.tastyContainer}>
            <Text style={styles.tastyText}>GOOD FOOD</Text>
            <Text style={styles.tastyText}>TASTY FOOD</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Pressable style={({pressed})=>[{transform: [{translateY: pressed ? 3 : 0}]}, styles.loginButton]}
                           onPress={()=> navigation.navigate("LoginScreen")}>
                   <Text style={styles.loginText}>Login</Text>
                </Pressable>

                <Pressable style={({pressed})=>[{transform: [{translateX: pressed ? 3 : 0}]}, styles.registerButton]}
                           onPress={()=> navigation.navigate("Register")}>
                   <Text>Don’t have an account? Sign Up</Text>
                </Pressable>

            </View>

       
     </SafeAreaView>
    </ImageBackground>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        
        
    },
    title:{
        flex:10,
        width: "60%",
    },
    
    tastyContainer:{
        flex:3,
        width: "90%",
        paddingTop:40,
    

    },
    buttonContainer:{
        flex:2,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        
    },
    burgerText: {
        fontSize: 32,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "black", 
        textShadowColor: '#E8CBBA', 
        textShadowOffset: { width: 0, height: 0 }, 
        textShadowRadius: 4, 
      },
   
    tastyText:{
        fontSize: 33,
        fontStyle:"italic",
        fontWeight: "bold",
        color: "#E8CBBA"
    },
    loginButton: {
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        paddingVertical: 15,
        borderRadius: 20,
        backgroundColor: "#FFC90B",
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 4.25, 
        shadowRadius: 5.84, 
        elevation: 5, 
      },
    loginText:{
        fontSize: 17,
        fontWeight: "bold",
        fontStyle: "italic",

    },
    registerButton:{
        marginTop: 15,
    }
  
   
})