import { Grid, GridItem, Link } from '@chakra-ui/react';
import { RouteInfoList } from '../../utils/routes';
import { Link as RouterLink } from 'react-router-dom';

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
      {RouteInfoList.map((routeInfo, index) => (
        <GridItem m="auto" key={index}>
          <Link as={RouterLink} to={routeInfo.path}>
            <routeInfo.icon />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
