import { FC } from 'react';
import { Text, Box, Flex } from '@chakra-ui/react';
import {
  ExitIcon,
  FacebookIcon,
  GoogleIcon,
  LogoutIcon,
  TwitterIcon,
} from '../icons';

export const SettingPage: FC<{}> = () => {
  return (
    <Box maxW="720px" mx="auto">
      <Flex
        _hover={{ bgColor: 'focusLightBackground' }}
        alignItems="center"
        color="text.main"
        cursor="pointer"
        p={4}
      >
        <GoogleIcon />
        <Text ml={2} textStyle="title">
          Sign in with Google
        </Text>
      </Flex>
      <Flex
        _hover={{ bgColor: 'focusLightBackground' }}
        alignItems="center"
        color="text.main"
        cursor="pointer"
        p={4}
      >
        <TwitterIcon />
        <Text ml={2} textStyle="title">
          Sign in with Twitter
        </Text>
      </Flex>
      <Flex
        _hover={{ bgColor: 'focusLightBackground' }}
        alignItems="center"
        color="text.main"
        cursor="pointer"
        p={4}
      >
        <FacebookIcon />
        <Text ml={2} textStyle="title">
          Sign in with Facebook
        </Text>
      </Flex>
      <Flex
        _hover={{ bgColor: 'focusLightBackground' }}
        alignItems="center"
        borderBottom="2px"
        borderColor="text.main"
        color="text.main"
        cursor="pointer"
        p={4}
      >
        <LogoutIcon />
        <Text ml={2} textStyle="title">
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
        <Text ml={2} textStyle="title">
          Withdrawal
        </Text>
      </Flex>
    </Box>
  );
};
