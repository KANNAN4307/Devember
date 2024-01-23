import { Stack } from "expo-router";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AmaticSC_400Regular,AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
SplashScreen.preventAutoHideAsync();

export default function Rootlayout(){

    let [fontsLoaded, fontError] = useFonts({
        Inter: Inter_900Black,
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

    return <Stack 
    screenOptions={{
        headerStyle:{backgroundColor:'#CCCCFF'}
    }}>
        <Stack.Screen name="index" options={{title:'Days'}}/>
        </Stack>
}