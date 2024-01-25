import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Link, Stack } from 'expo-router';

const Day2 = () => {
  return (
    <View style={styles.container}>
       <Stack.Screen options={{title:'Day 2'}}/>
      <Text>thsi is day 2</Text>
      <Link href={'day2/onboarding'} asChild>
       <Button title='Go to Onboarding'/>
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

export default Day2;