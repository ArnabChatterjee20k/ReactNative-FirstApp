import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text , TextInput, Vibration, View , Pressable,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='enter your goal...'/>
        <Button title='add goal'/>
      </View>
      <View>
        <Text>List of goals....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding:50
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:"space-between"
  },
  textInput:{
    borderWidth:1,
    borderColor:"#cccccc",
    width:"80%",
    marginRight:8,
    paddingHorizontal:8
  }
});