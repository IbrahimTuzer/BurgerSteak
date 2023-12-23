import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FlatBurger = (props) => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
   
    navigation.navigate('DetailPage', { data: props.data });
    setIsPressed(true);
  };

  return (
    <Pressable
      onPress={handlePress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? "orange" : isPressed ? "orange" : "#D9D9D9",
        },
      ]}
    >
      <Image source={props.data.image} style={styles.image} />
      <Text>{props.data.name}</Text>
      <View style={styles.ratingContainer}>
        <Image style={styles.star} source={require("../../assets/star.png")} />
        <Text>{props.data.rating} |</Text>
        <Text> {props.data.distance}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Image style={styles.star} source={require("../../assets/dolar.png")} />
        <Text>{props.data.price}</Text>
      </View>
    </Pressable>
  );
};

export default FlatBurger;

const styles = StyleSheet.create({
  container: {
    width: 156,
    height: 208,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
    margin: 13,
  },
  image: {
    width: 137,
    height: 118,
    borderRadius: 281,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  star: {
    width: 13,
    height: 13,
  }
});
