import { Stack, router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar'
const Onboardingarray = [
    {
        icon:'snowflake',
        title:'Welcome to #DEVember',
        descriptionL:'This is a tracking application and monitor to your personal info gathering options to achive money laundring'
    },
    {
        icon:'brain',
        title:'First serve First out',
        descriptionL:'This is a tracking application and monitor to your personal info gathering options to achive money laundring'
    },
    {
        icon:'money-bill-alt',
        title:'For some Fund raising',
        descriptionL:'This is a tracking application and monitor to your personal info gathering options to achive money laundring'
    },
    
]

const Onboarding = () => {

    const [selectedIndex,setselectedindex] = useState(0);
    const Listarray =Onboardingarray[selectedIndex];

    const ButoonHanlder = () => {
        if (selectedIndex ==Onboardingarray.length - 1) {
            setselectedindex(0);
            BackHandler();
        }
         else {
            setselectedindex(selectedIndex + 1)
        }
      
    }

    const BackHandler = () => {
        router.back();
    }


  return (
    <SafeAreaView style={styles.container}>
        <Stack.Screen options={{headerShown:false}}/>
        <StatusBar style='light'/>
        <View style={styles.pagecontent}>

          
                       
            <View style={styles.stepindicatorcontiner} >
            {
                Onboardingarray.map((val, index) => {
                    return (
                    <View style={{...styles.stepindicator, backgroundColor:index ==selectedIndex ? '#CEF202':'#ccc' }}/>
                    )
        })
    }
             </View>
              

        <FontAwesome5 style={styles.icon} name={Listarray.icon} size={100} color="#CEF202" />

        <View style={styles.footer}>
            <Text style={styles.title}>{Listarray.title}</Text>
            <Text style={styles.description}>{Listarray.descriptionL}</Text>
        <View style={styles.buttonrow}>    
            <Text onPress={BackHandler} style={styles.buttonText}>Skip</Text>
            
            <Pressable style={styles.button} onPress={ButoonHanlder}>
            <Text style={styles.buttonText}>Continue</Text>
            </Pressable>

        </View>
        
        </View>
        </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor:'#15141A',
  
  },
  pagecontent:{
    // backgroundColor:'red',
    padding:15,
    flex:1
  },
  icon:{
    alignSelf:'center',
    margin:10,
    marginTop:30
  },
  title:{
    fontFamily:'Interblack',
    fontSize:50,
    color:'#FDFDFD',
    fontWeight:'bold',
    letterSpacing:1.4,
    marginVertical:10
  },
  description:{
   fontFamily:'Inter',
   fontSize:20,
   color:'gray',
   lineHeight:28
  },
  footer:{
   marginTop:'auto'
  
}, 
 button:{
    backgroundColor:'#302E38',
    alignItems:'center',
    borderRadius:50,
    flex:1
 },

 buttonText:{
    color:'white',
    fontSize:16,
    fontFamily:'Interblack',
    // backgroundColor:'red',
    padding:15,
    paddingHorizontal:25
 },
 buttonrow:{
   marginTop:20,
   flexDirection:'row',
   alignItems:'center',
   gap:10
 },
 stepindicatorcontiner:{
    marginHorizontal:10,
    gap:10,
    flexDirection:'row'
 },
 stepindicator:{
    height:3,
    borderRadius:20,
    backgroundColor:'#fff',
    marginHorizontal:4,
    flex:1
 }

});

export default Onboarding;