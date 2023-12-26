import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AddButton from '../components/AddButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const DetailPage = ({ route}) => {
  const { data } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Pressable style={({pressed})=> [{transform: [{translateX: pressed ? -5 : 0}]}]}
                   onPress={()=> navigation.navigate("Home")}>
        <Ionicons name="arrow-back" size={34} color="black" />
        </Pressable>
        <AntDesign name="hearto" size={34} color="black" />
      </View>

      <Image source={{uri : data.image}} style={styles.image} />

      <View style={styles.ratinAndButtonContainer}>
        <View style={styles.ratingContainer}>
          <Image style={styles.star} source={require("../../assets/star.png")} />
          <Text style={styles.rating}>{data.rating}</Text>
        </View>

        <AddButton />
        
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.name}>Description</Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.priceContainer}>
          <Image style={styles.price} source={require("../../assets/dolar.png")} />
          <Text style={styles.priceText}>{data.price}</Text>
        </View>

        <TouchableOpacity style={styles.addCart} >
          <Text style={styles.addCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    flex: 1,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  image: {
    flex: 3,
    width: "95%",
    height: 256,
    borderRadius: 30,
    marginBottom: 10,
    
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 20,
  },
  ratinAndButtonContainer: {
    marginTop: 30,
    width: "95%",
    flex: 2,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  ratingContainer: {
    flexDirection: "row",
  },
  star: {
    width: 31,
    height: 31,
  },
  rating: {
    fontSize: 32,
  },
  descriptionContainer: {
    flex: 4,
    width: "95%",
  },
  bottomContainer: {
    flex: 1,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    width: 28,
    height: 32,
  },
  priceText: {
    fontSize: 32,
  },
  addCart: {
    width: 117,
    height: 30,
    backgroundColor: 'black',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCartText: {
    color: 'white',
    fontSize: 16,
  },
});
