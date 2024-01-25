import { Link, Stack } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Day4 = () => {
  return (
    <View style={styles.container}>
    <Stack.Screen options={{title:'Day 4'}}/>
    <Link asChild href={'day4/SplashAnimation'}>
      <Button 
       title='Go to Splash screen page'
      />
   </Link>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Day4;