import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DaylistItem = ({day}) => {
  return (
    <View style={styles.box}>
    <Text style={styles.textStyle}>{day}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    box: {
        flex:1,
        aspectRatio:1,
        backgroundColor:'#B4E9F8',
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