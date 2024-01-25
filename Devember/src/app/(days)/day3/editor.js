import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Markdown from 'react-native-markdown-display';


const copy = `# Dummy Markdown Example

This is a **dummy** markdown document showcasing various elements.

## Lists

- Unordered List Item 1 adsjkfbjkla adfskljbhdfslk  adfsiluadfs    aesifuhadfhs fads 
- Unordered List Item 2 f deasfnkasj  ofaujaiowhf  ewfloihqw o ehkfrjbjew 
- Unordered List Item 3
 
1. Ordered List Item 1ert yewtr  ewrt t  we4tew  wt5erwt
2. Ordered List Item 2  esfgrtgewgrt  ty  rt4ert  ertewrt
3. Ordered List Item 3  ewfewfwfr  t ewtewrt  ew5tertt  wertw5ty

## Text Formatting

*Italic Text* and **Bold Text**

## Lists

- Unordered List Item 1 adsjkfbjkla adfskljbhdfslk  adfsiluadfs    aesifuhadfhs fads 
- Unordered List Item 2 f deasfnkasj  ofaujaiowhf  ewfloihqw o ehkfrjbjew 
- Unordered List Item 3
 
1. Ordered List Item 1ert yewtr  ewrt t  we4tew  wt5erwt
2. Ordered List Item 2  esfgrtgewgrt  ty  rt4ert  ertewrt
3. Ordered List Item 3  ewfewfwfr  t ewtewrt  ew5tertt  wertw5ty

![name of the image](https://cdn.nimbusthemes.com/2017/09/09233338/Free-Nature-Backgrounds-Sunset-by-Pixabay.jpg)
*<small>image caption</small>*

`;

const Editor = () => {
  return (
    <ScrollView 
    style={styles.container} 
    contentInsetAdjustmentBehavior='automatic'
    
    >
          <Markdown style={mystyles}>
            {copy}
          </Markdown>
    </ScrollView>
  );
};


const mystyles =StyleSheet.create({
    heading1: {
       fontWeight:'bold',
       fontFamily:'InterBold',
       marginTop:15,
       marginBottom:10,
       color:'black',
       lineHeight:40
      },
      heading2:{
        color:'#3E3A3A',
        marginTop:10,
        marginBottom:5,
        lineHeight:40
      },
      body: {
        color:'red',
        fontSize:16,
        lineHeight:22
      }
})

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:'100%',
    padding:10
    // justifyContent: 'center',
    // alignItems: 'center',
  }
});

export default Editor;