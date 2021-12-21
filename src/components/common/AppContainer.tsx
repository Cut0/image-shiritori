import { useToast } from '@chakra-ui/react';
import { FC, useContext, useEffect } from 'react';
import { useSubscribeAuthStateChanged } from '../../features/auth/authHooks';
import { AuthContext } from '../../features/auth/store';
export const AppContainer: FC<{}> = ({ children }) => {
  useSubscribeAuthStateChanged();
  const [state] = useContext(AuthContext);
  const toast = useToast();
  useEffect(() => {
    if (state.status === 'success') {
      toast({
        description: 'ログインしました',
        status: 'success',
        isClosable: true,
        position: 'top',
      });
    }
    if (state.status === 'failed') {
      toast({
        description: 'ログインに失敗しました',
        status: 'error',
        isClosable: true,
      });
    }
  }, [state, toast]);
  return <>{children}</>;
};
