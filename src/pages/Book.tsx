import { FC } from 'react';
import { dummyWordList } from '../testdata/word';
import { WordCard } from '../components/book/WordCard';
import { Box } from '@chakra-ui/react';

export const BookPage: FC<{}> = () => {
  const wordList = dummyWordList;
  return (
    <Box maxW="720px" mx="auto">
      <Box p={2}>
        {wordList.map((word, index) => {
          return (
            <WordCard
              key={index}
              word={word}
              isLast={wordList.length === index + 1}
            ></WordCard>
          );
        })}
      </Box>
    </Box>
  );
};
