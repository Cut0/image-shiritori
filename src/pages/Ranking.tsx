import { FC, useEffect } from 'react';
import { Box, Grid, Spinner, Flex } from '@chakra-ui/react';
import { UserCard } from '../components/user/UserCard';
import { useUsers } from '../features/users/usersHooks';

export const RankingPage: FC<{}> = () => {
  const [userList, setUserList] = useUsers();
  useEffect(() => {
    setUserList();
  }, [setUserList]);
  return (
    <Box maxW="720px" mx="auto">
      {userList.length === 0 && (
        <Flex justifyContent="center">
          <Spinner color="primary" />
        </Flex>
      )}
      {userList.length > 0 && (
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
      )}
    </Box>
  );
};
