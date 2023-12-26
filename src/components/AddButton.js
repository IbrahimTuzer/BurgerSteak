import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const AddButton = (props) => {
  const [count, setCount] = useState(0);
 

  

  const handlePress = (increment) => {
    setCount((prevCount) => (increment ? prevCount + 1 : prevCount - 1));
  };

 



  return (
    <View style={styles.container}>
      <Pressable onPress={() => handlePress(false)} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>

      <Text style={styles.counter}>{count}</Text>

      <Pressable onPress={() => handlePress(true)} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    width: 115,
    height: 39,
    borderRadius: 20,
    backgroundColor: "#D9D9D9",
    overflow: 'hidden',
  },
  button: {
    paddingHorizontal: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
  counter: {
    fontSize: 18,
    marginHorizontal: 5,
  },
});
