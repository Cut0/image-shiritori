import { FC } from 'react';
import { Text, Box } from '@chakra-ui/react';
import { Word } from '../../@types';

type WordCardProps = {
  isLast: boolean;
  word: Word;
};

export const WordCard: FC<WordCardProps> = ({ word, isLast }) => {
  return (
    <>
      <Box
        bgColor="success"
        borderRadius="16px 32px 16px 32px"
        color="text.main"
        pos="relative"
        py={8}
        textAlign="center"
        textStyle="display2"
      >
        {word.name}
        <Text
          bottom={0}
          color="text.sub"
          pos="absolute"
          right={0}
          textStyle="caption"
        >
          {word.collectedAt.toString()}
        </Text>
      </Box>
      <Box
        bgColor={isLast ? 'primary' : 'success'}
        h={16}
        mx="auto"
        my={2}
        pos="relative"
        w={2}
      >
        <Text
          color={isLast ? 'primary' : 'success'}
          left={4}
          pos="absolute"
          textStyle="display2"
          top="50%"
          transform="translate(0, -50%)"
        >
          {word.name.slice(-1).toUpperCase()}
        </Text>
      </Box>
    </>
  );
};
