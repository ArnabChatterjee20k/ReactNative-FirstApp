//@ts-nocheck
import React from "react";
import { Button, Modal, FormControl, Input, Center } from "native-base";
import { useModalContext } from "../context/ModalContextProvider";

const ModalForm = () => {
  const { open, toggleModal } = useModalContext();

  return (
    <Center>
      <Modal isOpen={open} onClose={toggleModal} safeAreaTop={true} animationPreset="slide">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
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
              <Button
                onPress={toggleModal}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      </Center>
  );
};

export default ModalForm;