import { FC } from 'react';
import { dummyUserList } from '../testdata/user';
import { UserCard } from '../components/ranking/UserCard';
import { Grid, Box } from '@chakra-ui/react';

export const RankingPage: FC<{}> = () => {
  const userList = dummyUserList;
  return (
    <Box maxW="720px" mx="auto">
      <Grid
        p={2}
        gap={2}
        templateColumns="repeat(auto-fit, minmax(112px, 1fr))"
      >
        {userList.map((user, index) => {
          return (
            <UserCard
              key={index}
              user={user}
              ranking={index + 1}
              showRanking={true}
            />
          );
        })}
      </Grid>
    </Box>
  );
};
