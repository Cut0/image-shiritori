import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { dummyWordList } from '../testdata/word';
import { WordCard } from '../components/book/WordCard';

export const BookPage: FC<{}> = () => {
  const wordList = dummyWordList;
  return (
    <Box maxW="720px" mx="auto">
      <Box p={2}>
        {wordList.map((word, index) => {
          return (
            <WordCard
              isLast={wordList.length === index + 1}
              key={index}
              word={word}
            ></WordCard>
          );
        })}
      </Box>
    </Box>
  );
};
