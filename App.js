import { StatusBar } from "expo-status-bar";
import GoalContainer from "./components/GoalContainer";
import GoalInput from "./components/GoalInput";
import GoalContext from "./context/GoalContext";
import { View } from "react-native";
import styles from "./styles/style";
export default function App() {
  return (
    <GoalContext>
      <View style={styles.appContainer}>
        <GoalInput/>
        <GoalContainer/>
      </View>
    </GoalContext>
  );
}
