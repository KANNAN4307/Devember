import { Link, Stack } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Day3 = () => {
  return (
    <View style={styles.container}>
        <Stack.Screen options={{title:'Day 3'}}/>
      <Link asChild href={'day3/editor'}>
       <Button 
       title='Go to Editor Page'
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

export default Day3;