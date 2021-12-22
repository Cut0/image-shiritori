import { Box, Spinner, Flex } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { useMatch } from 'react-router-dom';
import { WordCard } from '../components/word/WordCard';
import { useUser } from '../features/users/userHooks';

export const UserBookPage: FC<{}> = () => {
  const [state, setState] = useUser();
  const user = useMatch('users/:id');

  useEffect(() => {
    if (user && user.params['id']) {
      setState(user.params['id']);
    }
  }, [setState, user]);

  return (
    <>
      <Box maxW="720px" mx="auto">
        <Box p={2}>
          {state === undefined && (
            <Flex justifyContent="center">
              <Spinner color="primary" />
            </Flex>
          )}
          {state !== undefined &&
            state.wordList.map((word, index) => {
              return (
                <WordCard
                  isLast={state.wordList.length === index + 1}
                  key={index}
                  word={word}
                ></WordCard>
              );
            })}
        </Box>
      </Box>
    </>
  );
};
