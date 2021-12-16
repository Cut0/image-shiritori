import { FC } from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { dummyUserList } from '../testdata/user';
import { UserCard } from '../components/ranking/UserCard';

export const RankingPage: FC<{}> = () => {
  const userList = dummyUserList;
  return (
    <Box maxW="720px" mx="auto">
      <Grid
        gap={2}
        p={2}
        templateColumns="repeat(auto-fit, minmax(112px, 1fr))"
      >
        {userList.map((user, index) => {
          return (
            <UserCard
              key={index}
              ranking={index + 1}
              showRanking={true}
              user={user}
            />
          );
        })}
      </Grid>
    </Box>
  );
};
