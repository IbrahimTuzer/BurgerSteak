import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import React from 'react'

const ScroolFood = () => {
  return (
    <ScrollView  horizontal>

       <View style={styles.container}>

           <View style={styles.classIcon}>
            <Image style={styles.foodIcon}
                   source={require("../../assets/cheese.png")}/>
            <Text>Cheese</Text>
           </View>

           <View style={styles.classIcon}>
            <Image style={styles.foodIcon}
                   source={require("../../assets/beef.png")}/>
            <Text>Cheese</Text>
           </View>

           <View style={styles.classIcon}>
            <Image style={styles.foodIcon}
                   source={require("../../assets/shrimp.png")}/>
            <Text>Cheese</Text>
           </View>

           <View style={styles.classIcon}>
            <Image style={styles.foodIcon}
                   source={require("../../assets/bacon.png")}/>
            <Text>Cheese</Text>
           </View>

        </View>

     </ScrollView>
  )
}

export default ScroolFood

const styles = StyleSheet.create({

    foodIcon:{
      
        width:19,
        height:19,
        
    },
    classIcon:{
        flexDirection: "row",
        borderWidth: 1,
        borderWidth: 1,
        borderRadius: 20,
        width:82,
        height:32,
        alignItems:"center",
        justifyContent: "center",
        margin: 10,
    },
    container:{
        flexDirection: "row",
    },
    container:{
        flexDirection: "row",
    }
   
    
})