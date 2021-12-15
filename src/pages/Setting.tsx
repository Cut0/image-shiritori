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
        alignItems="center"
        color="text.main"
        p={4}
        cursor="pointer"
        _hover={{ bgColor: 'focusLightBackground' }}
      >
        <GoogleIcon />
        <Text ml={2} textStyle="title">
          Sign in with Google
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        color="text.main"
        p={4}
        cursor="pointer"
        _hover={{ bgColor: 'focusLightBackground' }}
      >
        <TwitterIcon />
        <Text ml={2} textStyle="title">
          Sign in with Twitter
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        color="text.main"
        p={4}
        cursor="pointer"
        _hover={{ bgColor: 'focusLightBackground' }}
      >
        <FacebookIcon />
        <Text ml={2} textStyle="title">
          Sign in with Facebook
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        borderBottom="2px"
        borderColor="text.main"
        color="text.main"
        p={4}
        cursor="pointer"
        _hover={{ bgColor: 'focusLightBackground' }}
      >
        <LogoutIcon />
        <Text ml={2} textStyle="title">
          Sign out
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        color="text.main"
        p={4}
        cursor="pointer"
        _hover={{ bgColor: 'focusLightBackground' }}
      >
        <ExitIcon />
        <Text ml={2} textStyle="title">
          Withdrawal
        </Text>
      </Flex>
    </Box>
  );
};
