import DaylistItem from '../components/DaylistItem';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, } from 'react-native';


const days = [...Array(24)].map((val,index) => index +1);

export default function App() {
  return (
    <View style={styles.container}>
        <FlatList 
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        showsVerticalScrollIndicator={false}
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
