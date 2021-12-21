import { FC, useContext, useMemo, useState } from 'react';
import { Text, Box, Flex, useDisclosure, useToast } from '@chakra-ui/react';
import {
  ExitIcon,
  FacebookIcon,
  GoogleIcon,
  LogoutIcon,
  TwitterIcon,
} from '../icons';
import { AuthContext } from '../features/auth/store';
import { Dialog } from '../components/common/Dialog';
import {
  signInWithFacebook,
  signInWithGoogle,
  signInWithTwitter,
  signOut,
} from '../features/auth/utils';
import 'firebase/auth';

type Handle = {
  text: string;
  action: () => Promise<void> | void;
};

export const SettingPage: FC<{}> = () => {
  const toast = useToast();
  const handles: Handle[] = useMemo(
    () => [
      {
        text: 'Googleアカウントでログインしますか？',
        action: signInWithGoogle,
      },
      {
        text: 'Twitterでログインしますか？',
        action: signInWithTwitter,
      },
      {
        text: 'Facebookでログインしますか？',
        action: signInWithFacebook,
      },
      {
        text: 'ログアウトしますか？',
        action: () => {
          signOut().then(() => {
            toast({
              description: 'ログアウトしました',
              status: 'success',
              isClosable: true,
              position: 'top',
            });
          });
        },
      },
    ],
    [toast],
  );
  const [state] = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [handle, setHandle] = useState<Handle>({
    text: 'Googleアカウントでログインしますか？',
    action: () => {
      signInWithGoogle();
    },
  });
  return (
    <>
      <Dialog
        content={handle?.text}
        isOpenDialog={isOpen}
        onCloseDialog={onClose}
        onOk={handle.action}
      />
      <Box maxW="720px" mx="auto">
        <Flex
          _hover={{ bgColor: 'focusLightBackground' }}
          alignItems="center"
          color="text.main"
          cursor="pointer"
          p={4}
          onClick={(e) => {
            e.preventDefault();
            setHandle(handles[0]);
            onOpen();
          }}
        >
          <GoogleIcon />
          <Text ml={2} textStyle="subheading">
            Sign in with Google
          </Text>
        </Flex>
        <Flex
          _hover={{ bgColor: 'focusLightBackground' }}
          alignItems="center"
          color="text.main"
          cursor="pointer"
          p={4}
          onClick={(e) => {
            e.preventDefault();
            setHandle(handles[1]);
            onOpen();
          }}
        >
          <TwitterIcon />
          <Text ml={2} textStyle="subheading">
            Sign in with Twitter
          </Text>
        </Flex>
        <Flex
          _hover={{ bgColor: 'focusLightBackground' }}
          alignItems="center"
          color="text.main"
          cursor="pointer"
          p={4}
          onClick={(e) => {
            e.preventDefault();
            setHandle(handles[2]);
            onOpen();
          }}
        >
          <FacebookIcon />
          <Text ml={2} textStyle="subheading">
            Sign in with Facebook
          </Text>
        </Flex>
        {state.status === 'success' && (
          <>
            <Flex
              _hover={{ bgColor: 'focusLightBackground' }}
              alignItems="center"
              borderBottom="2px"
              borderColor="text.main"
              color="text.main"
              cursor="pointer"
              p={4}
              onClick={(e) => {
                e.preventDefault();
                setHandle(handles[3]);
                onOpen();
              }}
            >
              <LogoutIcon />
              <Text ml={2} textStyle="subheading">
                Sign out
              </Text>
            </Flex>
            <Flex
              _hover={{ bgColor: 'focusLightBackground' }}
              alignItems="center"
              color="text.main"
              cursor="pointer"
              p={4}
            >
              <ExitIcon />
              <Text ml={2} textStyle="subheading">
                Withdrawal
              </Text>
            </Flex>
          </>
        )}
      </Box>
    </>
  );
};
