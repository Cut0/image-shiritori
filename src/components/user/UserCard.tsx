import { FC } from 'react';
import { Image, Flex, Text } from '@chakra-ui/react';
import { User } from '../../@types';

type UserCardProps = {
  showRanking: boolean;
  user: User;
  ranking: number;
};

export const UserCard: FC<UserCardProps> = ({ user, ranking, showRanking }) => {
  return (
    <Flex
      align="center"
      bgColor="whiteBackground"
      borderRadius="8px"
      direction="column"
      position="relative"
      px={6}
      py={8}
    >
      {showRanking && (
        <Text
          backgroundColor="primary"
          borderBottomRightRadius="8px"
          borderTopLeftRadius="8px"
          color="text.inverse"
          left={0}
          position="absolute"
          px={2}
          textStyle="title"
          top={0}
        >
          {ranking}
        </Text>
      )}
      <Image
        alt="ユーザーアイコン"
        bgColor="primary"
        borderRadius="full"
        boxSize={16}
        src={user.eyecatchUrl}
      />
      <Text color="text.main" mt={2} textStyle="subheading">
        {user.name}
      </Text>
      <Text color="text.main" textStyle="caption">
        {user.wordList.length} words
      </Text>
    </Flex>
  );
};
