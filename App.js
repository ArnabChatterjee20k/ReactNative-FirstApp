import { StatusBar } from "expo-status-bar";
import GoalContainer from "./components/GoalContainer";
import GoalInput from "./components/GoalInput";
import GoalContext from "./context/GoalContext";
import { View } from "react-native";
import styles from "./styles/style";
import { NativeBaseProvider } from "native-base";
import ModalContextProvider from "./context/ModalContextProvider";
import ModalForm from "./components/ModalForm";

export default function App() {
  return (
    <NativeBaseProvider>
      <ModalContextProvider>
        <GoalContext>
          <View style={styles.appContainer}>
            <ModalForm/>
            <GoalInput />
            <GoalContainer />
          </View>
        </GoalContext>
      </ModalContextProvider>
    </NativeBaseProvider>
  );
}
