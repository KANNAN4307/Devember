import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

const Day2 = () => {
  return (
    <View style={styles.container}>
       <Stack.Screen options={{title:'Day 2'}}/>
      <Text>thsi is day 2</Text>
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

export default Day2;