import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text , TextInput, Vibration, View , Pressable,Button } from 'react-native';

export default function App() {
  return (
    <View>
      <View>
        <TextInput placeholder='enter your goal...'/>
        <Button title='add'/>
      </View>
      <View>
        <Text>List of goals....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});