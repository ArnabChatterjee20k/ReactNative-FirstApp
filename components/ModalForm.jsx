//@ts-nocheck
import React from "react";
import { Button, Modal, FormControl, Input, Center } from "native-base";
import { useModalContext } from "../context/ModalContextProvider";
import { useGoalContext } from "../context/GoalContext";

const ModalForm = () => {
  const { open, toggleModal } = useModalContext();

  const { goals, setGoals, input, setInput } = useGoalContext();

  const saveData = () => {
    setGoals((prev) => {
      return [
        ...prev,
        { title: input["title"], description: input["description"] },
      ];
    });
  };
  return (
    <Center>
      <Modal
        isOpen={open}
        onClose={toggleModal}
        safeAreaTop={true}
        animationPreset="slide"
      >
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Enter Your Task</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Title</FormControl.Label>
              <Input
                onChangeText={(text) =>
                  setInput((prev) => {
                    return { ...prev, title: text };
                  })
                }
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input
                onChangeText={(text) =>
                  setInput((prev) => {
                    return { ...prev, description: text };
                  })
                }
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={toggleModal}
              >
                Cancel
              </Button>
              <Button onPress={saveData}>Save</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default ModalForm;
