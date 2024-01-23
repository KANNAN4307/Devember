import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import DaylistItem from './src/core/DaylistItem';

export default function App() {

  const days = [...Array(24)].map((val,index) => index +1)

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
