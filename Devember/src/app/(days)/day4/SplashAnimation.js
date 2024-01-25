import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { Stack } from 'expo-router';



const SplashAnimation = () => {
  return (
    <View style={styles.container}>
        <Stack.Screen options={{headerShown:false}}/>
    <LottieView
        autoPlay
       
        style={{
          width: '80%',
          maxWidth:400,
        //   height: 200,
        //   backgroundColor: 'red',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../../../assets/Netflix.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black'
  }
});

export default SplashAnimation;