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
  onCloseDialog?: () => void;
};

export const Dialog: FC<DialogProps> = ({
  isOpenDialog,
  content,
  onCloseDialog,
  onOk,
}) => {
  return (
    <Modal
      isOpen={isOpenDialog}
      onClose={() => {
        onCloseDialog && onCloseDialog();
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>確認</ModalHeader>
        {onCloseDialog && <ModalCloseButton />}
        <ModalBody>
          <Text>{content}</Text>
        </ModalBody>

        <ModalFooter>
          {onCloseDialog && (
            <Button mr={3} variant="primary" onClick={onCloseDialog}>
              Cancel
            </Button>
          )}
          <Button
            backgroundColor="primary"
            color="white"
            onClick={async () => {
              try {
                onOk && (await onOk());
              } finally {
                onCloseDialog && onCloseDialog();
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
