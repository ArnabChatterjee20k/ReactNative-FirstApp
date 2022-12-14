import { ToastAndroid } from "react-native";
import { AddIcon, HStack, IconButton } from "native-base";
import { useGoalContext } from "../context/GoalContext";
import { useModalContext } from "../context/ModalContextProvider";

export default function GoalInput() {
  const { setInput, input, setGoals } = useGoalContext();
  const { toggleModal } = useModalContext();
  const showToast = () => {
    ToastAndroid.show("Task Added..", ToastAndroid.LONG);
  };

  return (
    <HStack
      justifyContent="flex-end"
      position="absolute"
      bottom="0"
      right="0"
      width="100%"
      padding="6"
      zIndex={1}
    >
      <IconButton
        onPress={toggleModal}
        rounded="full"
        variant="solid"
        colorScheme="success"
        shadow="7"
        icon={<AddIcon size="7" mt="0.5" color="white" />}
      />
    </HStack>
  );
}
