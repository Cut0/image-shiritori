import { Grid, GridItem, Link } from '@chakra-ui/react';
import { routeInfoList } from '../../utils/routes';
import { Link as ReactLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <Grid
      pos="fixed"
      w="100%"
      h={16}
      bottom={0}
      left={0}
      right={0}
      bgColor="background"
      templateColumns="repeat(4, 1fr)"
    >
      {routeInfoList.map((routeInfo, index) => (
        <GridItem key={index}>
          <Link
            display="flex"
            justifyContent="center"
            alignItems="center"
            h="100%"
            as={ReactLink}
            _focus={{ outline: 'none' }}
            to={routeInfo.path}
          >
            <routeInfo.icon />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
