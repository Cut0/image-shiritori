import { Grid, GridItem, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { routeInfoList } from '../../features/routes/utils';

export const Footer = () => {
  return (
    <Grid
      bgColor="background"
      bottom={0}
      h={16}
      left={0}
      pos="fixed"
      right={0}
      templateColumns="repeat(4, 1fr)"
      w="100%"
    >
      {routeInfoList
        .filter((routeInfo) => routeInfo.showInFooter)
        .map((routeInfo, index) => (
          <GridItem key={index}>
            <Link
              _focus={{ outline: 'none' }}
              alignItems="center"
              as={ReactLink}
              display="flex"
              h="100%"
              justifyContent="center"
              to={routeInfo.path}
            >
              <routeInfo.icon />
            </Link>
          </GridItem>
        ))}
    </Grid>
  );
};
