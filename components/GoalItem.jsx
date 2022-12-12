import { Text , Alert} from "react-native";
import styles from "../styles/style";
export default function GoalItem({goal}) {
  const showAlert = (data) => {
    Alert.alert("Message", data);
  };
  return (
    <Text
      onPress={() => {
        showAlert(goal);
      }}
      style={styles.goalItem}
    >
      {goal}
    </Text>
  );
}
