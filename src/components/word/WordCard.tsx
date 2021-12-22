import { FC } from 'react';
import { Text, Box } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { Word } from '../../@types';
import { getFeatureFlag } from '../../features/featureToggle';

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
          bottom={2}
          color="text.sub"
          pos="absolute"
          right={2}
          textStyle="caption"
        >
          {dayjs(word.collectedAt).format('YYYY/MM/DD HH:mm')}
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
        {getFeatureFlag().shiritori && (
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
        )}
      </Box>
    </>
  );
};
