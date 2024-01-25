import { Stack } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Day1 = () => {
  return (
    <View style={styles.container}>
        <Stack.Screen options={{title:'Day 1'}}/>
      <Text style={{fontFamily:'AmaticR', fontSize:50}}>This is day 1</Text>
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

export default Day1;