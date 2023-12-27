import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import { sendData } from '../../api';

const Menu = ({navigation}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [distance, setDistance] = useState('');
  const [rating, setRating] = useState('');

  const handleData = () => {
    const data = {
      name: name,
      price: price,
      description: description,
      image: image,
      distance: distance,
      rating: rating,
    };

    sendData(data);

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text>Ürün Ekleme</Text>

      <TextInput
        style={styles.inputText}
        placeholder="Name"
        placeholderTextColor="black"
        onChangeText={setName}
        value={name}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Price"
        placeholderTextColor="black"
        onChangeText={setPrice}
        value={price}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Description"
        placeholderTextColor="black"
        onChangeText={setDescription}
        value={description}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Image URL"
        placeholderTextColor="black"
        onChangeText={setImage}
        value={image}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Distance"
        placeholderTextColor="black"
        onChangeText={setDistance}
        value={distance}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Ratıng"
        placeholderTextColor="black"
        onChangeText={setRating}
        value={rating}
      />

<Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? 'darkorange' : 'tomato',
            transform: [{ scale: pressed ? 1.1 : 1 }],
          },
        ]}
        onPress={handleData}
      >
        <Text>ADD</Text>
      </Pressable>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: 200,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'tomato',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
