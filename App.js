import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    alert("mouted")
    const timerID = setInterval(() => {
      setCounter(counter=>counter+1);
    }, 1000);
  
    return () => {
      alert("unmounted")
      clearInterval(timerID);
    }
  }, [])
  
  
  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <StatusBar style="auto" />
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
