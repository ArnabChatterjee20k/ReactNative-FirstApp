import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text , Vibration, View , Pressable,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{borderWidth:2 , borderColor:"red" , padding:16}}>Open up App.js teo start working on your app!</Text>
      <Pressable style={styles.button} android_ripple={{ color: 'cyan' }}><Text style={{fontSize:16,padding:5}}>Button</Text></Pressable>
      <Button title='Vibrate' style={styles.button}  color="#f194ff" onPress={()=>Vibration.vibrate()}/>
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
  button:{
    borderColor: 'red',
    borderWidth: 10,
    borderRadius: 15 ,
    width:100,
    padding:10
  }
});