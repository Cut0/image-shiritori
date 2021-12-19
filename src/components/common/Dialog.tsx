import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';

type DialogProps = {
  isOpenDialog: boolean;
  content: string;
  onOk?: () => Promise<void> | void;
  onCloseDialog: () => void;
};

export const Dialog: FC<DialogProps> = ({
  isOpenDialog,
  content,
  onCloseDialog,
  onOk,
}) => {
  return (
    <Modal isOpen={isOpenDialog} onClose={onCloseDialog}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>確認</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{content}</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onCloseDialog}>
            Cancel
          </Button>
          <Button
            variant="ghost"
            onClick={async () => {
              try {
                onOk && (await onOk());
              } finally {
                onCloseDialog();
              }
            }}
          >
            Ok
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
