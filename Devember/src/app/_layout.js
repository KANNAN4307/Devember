import { Stack } from "expo-router";
import {
   useFonts,
    Inter_900Black, 
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_400Regular
  } from '@expo-google-fonts/inter';
import { AmaticSC_400Regular,AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export default function Rootlayout(){

    let [fontsLoaded, fontError] = useFonts({
        Inter: Inter_400Regular,
        InterSemi:Inter_600SemiBold,
        InterBold:Inter_700Bold,
        Interblack:Inter_900Black,
        AmaticR:AmaticSC_400Regular,
        AmaticB:AmaticSC_700Bold
      });

    useEffect(() =>{
        if (fontsLoaded || fontError) {
          // console.log('inside effect')
          SplashScreen.hideAsync()
        }
       
      },[fontsLoaded,fontError])
     
      if (!fontsLoaded && !fontError) {
    
     return null;
      }

    return(
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack 
             screenOptions={{
              headerStyle:{backgroundColor:'#CCCCFF'}
               }}>
          <Stack.Screen name="index" options={{title:'Days'}}/>
      </Stack>
    </GestureHandlerRootView>
    )
    
    
   
};

