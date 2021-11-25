import { Flex, Text } from '@chakra-ui/react';
import { useLocationInfo } from '../../hooks/routes';

export const Header = () => {
  const locationInfo = useLocationInfo();

  return (
    <Flex
      pos="fixed"
      w="100%"
      h={16}
      p={4}
      bgColor="background"
      align="center"
      z-zIndex="1"
    >
      <locationInfo.icon />
      <Text ml={4} textStyle="heading" color="primary">
        {locationInfo.name}
      </Text>
    </Flex>
  );
};
