import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ToastAndroid,
  Alert,
  FlatList,
  ScrollView,
} from "react-native";
export default function App() {
  const [goals, setGoals] = useState([]);
  const [input, setInput] = useState("");

  const showToast = () => {
    ToastAndroid.show("Task Added..", ToastAndroid.LONG);
  };

  const showAlert = (data) => {
    Alert.alert("Message", data);
  };
  const addGoal = () => {
    setGoals((prev) => [...prev, input]);
    showToast();
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="enter your goal..."
        />
        <Button color="red" title="add goal" onPress={addGoal} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            const { index, item: goal } = itemData;
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
          }}
          keyExtractor={(goals,index)=>{return index}}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 10,
  },
  goalItem: {
    padding: 5,
    margin: 4,
    borderRadius: 3,
    backgroundColor: "#add",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
