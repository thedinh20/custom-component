import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {styles.square}>
        <Text style={styles.text}>Hello, world</Text>
      </View>
      
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBlockColor: '#cccc',
  },

  square: {
    width: 150,
    height: 150,
    backgroundColor: 'red', 
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  text: {
    color: 'white',
    fontSize: 16,
  }
});
