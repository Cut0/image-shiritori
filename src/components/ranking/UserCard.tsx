import { FC } from 'react';
import { User } from '../../@types';
import { Flex, Text, Image } from '@chakra-ui/react';

type UserCardProps = {
  showRanking: boolean;
  user: User;
  ranking: number;
};

export const UserCard: FC<UserCardProps> = ({ user, ranking, showRanking }) => {
  return (
    <Flex
      px={6}
      py={8}
      bgColor="whiteBackground"
      align="center"
      direction="column"
      borderRadius="8px"
      position="relative"
    >
      {showRanking && (
        <Text
          textStyle="title"
          position="absolute"
          top={0}
          left={0}
          backgroundColor="primary"
          color="text.inverse"
          px={2}
          borderBottomRightRadius="8px"
          borderTopLeftRadius="8px"
        >
          {ranking}
        </Text>
      )}
      <Image
        borderRadius="full"
        boxSize={16}
        src={user.eyecatchUrl}
        alt="ユーザーアイコン"
        bgColor="primary"
      />
      <Text textStyle="subheading" color="text.main" mt={2}>
        {user.name}
      </Text>
      <Text textStyle="caption" color="text.main">
        {user.wordCount} words
      </Text>
    </Flex>
  );
};
