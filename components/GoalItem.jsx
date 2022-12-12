import { Text, Alert, Pressable, Vibration } from "react-native";
import { useGoalContext } from "../context/GoalContext";

import styles from "../styles/style";
export default function GoalItem({ goal, id }) {
  const { setGoals } = useGoalContext();
  const showAlert = (data) => {
    Vibration.vibrate(1000 * 1);
    Alert.alert(`ALert!`, `${data} is deleted`);
    setGoals((prev) => prev.filter((e, i) => i !== id));
  };
  return (
    <Pressable
      android_ripple={{ color: "white", foreground: true }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "red" : "white",
        },
      ]}
      onPress={() => showAlert(goal)}
    >
      <Text style={styles.goalItem}>{goal}</Text>
    </Pressable>
  );
}
