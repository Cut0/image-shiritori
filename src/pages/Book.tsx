import { Box, useDisclosure, Spinner, Flex } from '@chakra-ui/react';
import { FC, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyWordList } from '../testdata/word';
import { WordCard } from '../components/word/WordCard';
import { Dialog } from '../components/common/Dialog';
import { AuthContext } from '../features/auth/store';

export const BookPage: FC<{}> = () => {
  const [state] = useContext(AuthContext);
  const { isOpen, onOpen } = useDisclosure();
  const navigate = useNavigate();
  const wordList = dummyWordList;

  useEffect(() => {
    if (state.status === 'none') onOpen();
  }, [state, onOpen]);

  return (
    <>
      <Dialog
        content="ログインすることで辞書機能を利用できるようになります。"
        isOpenDialog={isOpen}
        onCloseDialog={() => {}}
        onOk={() => {
          navigate('/setting');
        }}
      />
      <Box maxW="720px" mx="auto">
        <Box p={2}>
          {state.status !== 'success' && (
            <Flex justifyContent="center">
              <Spinner color="primary" />
            </Flex>
          )}
          {state.status === 'success' &&
            wordList.map((word, index) => {
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
    </>
  );
};
