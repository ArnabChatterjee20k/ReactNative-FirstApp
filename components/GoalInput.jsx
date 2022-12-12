import { TextInput, View, Button, ToastAndroid } from "react-native";
import { useGoalContext } from "../context/GoalContext";
import styles from "../styles/style";

export default function GoalInput() {
    const {setInput,input,setGoals} = useGoalContext();
    const showToast = () => {
    ToastAndroid.show("Task Added..", ToastAndroid.LONG);
  };

  const addGoal = () => {
    setGoals((prev) => [...prev, input]);
    showToast();
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={input}
        onChangeText={(text) => setInput(text)}
        placeholder="enter your goal..."
      />
      <Button color="red" title="add goal" onPress={addGoal} />
    </View>
  );
}
