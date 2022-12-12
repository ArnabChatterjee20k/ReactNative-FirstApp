import { Text , Alert , Pressable} from "react-native";
import { useGoalContext } from "../context/GoalContext";

import styles from "../styles/style";
export default function GoalItem({goal,id}) {
  const {setGoals} = useGoalContext()
  const showAlert = (data) => {
    Alert.alert(`ALert!`, `${data} is deleted`);
    setGoals(prev=>prev.filter((e,i)=>i!==id))
  };
  return (
    <Pressable onPress={()=>showAlert(goal)}>
      <Text
        style={styles.goalItem}
      >
        {goal}
      </Text>
    </Pressable>
  );
}
