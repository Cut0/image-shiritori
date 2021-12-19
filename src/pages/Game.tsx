import { FC, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import { useBook } from '../features/books/bookHooks';
import { AuthContext } from '../features/auth/store';
import { Dialog } from '../components/common/Dialog';

export const GamePage: FC<{}> = () => {
  const [update] = useBook();
  const [state] = useContext(AuthContext);
  const { isOpen, onOpen } = useDisclosure();
  const navigate = useNavigate();

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
      <p
        onClick={() => {
          update([{ id: '1', name: 'apple', collectedAt: new Date() }]);
        }}
      >
        GamePage
      </p>
    </>
  );
};
