import { useCallback, useContext } from 'react';
import { Book } from '../../@types';
import { AuthContext } from '../auth/store';
import { userModel } from '../users/model';

export const useBook = () => {
  const [authState, dispatch] = useContext(AuthContext);

  /**
   * 状態を更新し、再レンダリングを引き起こすため useEffect で利用しない。
   */
  const updateBook = useCallback(
    async (wordList: Book['wordList']) => {
      if (authState.status !== 'success') return;
      dispatch({ type: 'FETCH_MYSELF_START' });
      return await userModel()
        .updateBook(authState.user.id, wordList)
        .then(() => {
          dispatch({
            type: 'FETCH_MYSELF_SUCCESS',
            payload: {
              ...authState.user,
              wordCount: authState.user.wordCount + 1,
              wordList: [...authState.user.wordList, ...wordList],
            },
          });
        });
    },
    [authState, dispatch],
  );

  return [updateBook] as const;
};
