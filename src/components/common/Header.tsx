import { Flex, Text } from '@chakra-ui/react';
import { useLocationInfo } from '../../features/routes/locationInfoHooks';

export const Header = () => {
  const locationInfo = useLocationInfo();

  return (
    <Flex
      align="center"
      bgColor="background"
      h={16}
      p={4}
      pos="fixed"
      w="100%"
      zIndex="1"
    >
      <locationInfo.icon />
      <Text color="primary" ml={4} textStyle="heading">
        {locationInfo.name}
      </Text>
    </Flex>
  );
};
