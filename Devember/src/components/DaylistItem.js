import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const DaylistItem = ({day}) => {
  return (
    <Link href={`(days)/day${day}`} asChild>
    <Pressable style={styles.box}>
    <Text style={styles.textStyle}>{day}</Text>
    </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
    box: {
        flex:1,
        aspectRatio:1,
        backgroundColor:'#FDF2E9',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#480449',
        borderWidth:StyleSheet.hairlineWidth
        // margin:10
      },  
      textStyle: {
        fontSize:35,
        color:'black',
        fontFamily:'AmaticR'
      }
});

export default DaylistItem;