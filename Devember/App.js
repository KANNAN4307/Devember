import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, ActivityIndicator, Platform } from 'react-native';
import DaylistItem from './src/core/DaylistItem';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {AmaticSC_400Regular,AmaticSC_700Bold} from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    AmaticR:AmaticSC_400Regular,
    AmaticB:AmaticSC_700Bold
  });

  const days = [...Array(24)].map((val,index) => index +1);

  useEffect(() =>{
    if (fontsLoaded || fontError) {
      // console.log('inside effect')
      SplashScreen.hideAsync()
    }
   
  },[fontsLoaded,fontError])
 
  if (!fontsLoaded && !fontError) {

 return null;
  }

  return (
    <View style={styles.container}>

        <FlatList 
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({item}) => {
          return (
            (
             <DaylistItem day={item}/>
            )
          )
        }
      }
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    gap:10,
    padding:10
  },
  column:{gap:10},



});
