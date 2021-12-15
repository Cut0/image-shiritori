import { FC } from 'react';
import { Word } from '../../@types';
import { Text, Box } from '@chakra-ui/react';

type WordCardProps = {
  isLast: boolean;
  word: Word;
};

export const WordCard: FC<WordCardProps> = ({ word, isLast }) => {
  return (
    <>
      <Box
        color="text.main"
        py={8}
        borderRadius="16px 32px 16px 32px"
        textStyle="display2"
        textAlign="center"
        pos="relative"
        bgColor="success"
      >
        {word.name}
        <Text
          color="text.sub"
          textStyle="caption"
          pos="absolute"
          right={0}
          bottom={0}
        >
          {word.collectedAt.toString()}
        </Text>
      </Box>
      <Box
        pos="relative"
        my={2}
        mx="auto"
        h={16}
        w={2}
        bgColor={isLast ? 'primary' : 'success'}
      >
        <Text
          pos="absolute"
          left={4}
          top="50%"
          transform="translate(0, -50%)"
          textStyle="display2"
          color={isLast ? 'primary' : 'success'}
        >
          {word.name.slice(-1).toUpperCase()}
        </Text>
      </Box>
    </>
  );
};
