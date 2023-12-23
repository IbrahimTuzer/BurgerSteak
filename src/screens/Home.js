import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import {ScroolFood, FlatBurger} from "../components";
import burgerData from '../components/data';


const Home = () => {

    const [burger, setBurger] = useState([...burgerData])
    const [searchText, setSearchText] = useState('');

    const filterBurgers = () => {
        return burger.filter(item =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        );
      };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topBarContainer}>
        <Image style={styles.menuImage}
               source={require("../../assets/menu.png")}/>
        <Text style={styles.burgerText}>BURGER STEAK HOUSE</Text>
        <Image style={styles.menuImage}
               source={require("../../assets/user.png")}/>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.topText} >Find and order</Text>
        <View style={styles.textAndIconContainer}>
        <Text style={styles.bottomText}>burger for you  </Text>
        <Image style={styles.burgerIcon}
               source={require("../../assets/register.png")}/>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput
         style={styles.searchInput}
         placeholder="Find your burger"
         value={searchText}
         onChangeText={text => setSearchText(text)}/>
      </View>

      <View style={styles.classContainer}>
       <ScroolFood/>
      </View>

      <View style={styles.FlatListContainer}>
        <Text style={styles.mostText}>Most Popular</Text>
        <FlatList 
        data={filterBurgers()}
        numColumns={2}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=>{
            return(
            
            <FlatBurger data={item} />
                
            )
        }}/>
      </View>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    topBarContainer:{
        flex: 1,
        width: "95%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    menuImage:{
        width: 52,
        height: 51,
    },
    burgerText:{
        color: "#9B5A27",
        fontWeight: "bold",
        fontSize: 16,
    },
    titleContainer:{
        justifyContent: "center",
        flex: 2,
        paddingLeft: 10,
        width: "95%",
    },
    burgerIcon:{
        width: 37,
        height: 37,
        
    },
    textAndIconContainer:{
        flexDirection: "row",
    },
    topText:{
        fontSize: 32,
    },
    bottomText:{
        fontSize: 36,
        fontWeight: "bold",
    },
    searchContainer:{
        flex: 1,
        flexDirection: "row",
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
    },
    searchInput:{
        marginVertical: 10,
        width: "90%",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#D9D9D9"
    },
    classContainer:{
        flex:1,
        width: "95%",

    },
    FlatListContainer:{
        flex: 5,
        width: "95%",
    },
    mostText:{
        fontSize: 16,
        fontWeight: "bold",
    }
    
})