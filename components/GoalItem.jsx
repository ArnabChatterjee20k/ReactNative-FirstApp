import { Text, Alert, Pressable, Vibration } from "react-native";
import { useGoalContext } from "../context/GoalContext";
import { TextArea, Input, VStack } from "native-base";

import styles from "../styles/style";
import { View } from "react-native";
export default function GoalItem({ goal, id, title, description }) {
  const { setGoals } = useGoalContext();
  return (
    <VStack justifyContent="center" backgroundColor="warmGray.100" shadow="2" marginY="5">
      <Input
        placeholder="tilte"
        variant="underlined"
        paddingLeft={3}
        value={title}
        fontWeight="bold"
      />
      <TextArea
        h={20}
        placeholder="Your Task"
        border="none"
        variant="unstyled"
        value={description}
      />
    </VStack>
  );
}
