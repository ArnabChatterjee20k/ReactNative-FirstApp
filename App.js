import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Pressable,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js teo start working on your app!</Text>
      <Pressable style={{backgroundColor:"red"}} android_ripple={{ color: 'cyan' }}><Text style={{fontSize:16,padding:5}}>Button</Text></Pressable>
      <Button title='hellow'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
