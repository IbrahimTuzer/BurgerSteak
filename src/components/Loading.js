import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Image } from 'react-native';

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fadeIn = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, 
      useNativeDriver: false,
    });

    const fadeOut = Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000, 
      useNativeDriver: false,
    });

    const sequenceAnimation = Animated.sequence([fadeIn, fadeOut]);

    const loop = () => {
      Animated.loop(sequenceAnimation).start(() => {
        
      });
    };

    if (loading) {
      loop();
    }

    return () => {
      fadeAnim.removeAllListeners();
    };
  }, [fadeAnim, loading]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.loadingContainer, { opacity: fadeAnim }]}>
        <Image style={styles.image} source={require('../../assets/burger.png')}/>
        <Text>Loading...</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    padding: 20,
    borderRadius: 10,
    alignItems:'center',
  },
  image:{
    width:150,
    height:150,
    resizeMode:'contain'
  }
});

export default LoadingPage;