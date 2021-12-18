import firebase from 'firebase/app';
import 'firebase/auth';
import { useEffect, useContext } from 'react';
import { userModel } from '../users/model';
import { AuthContext } from './store';

export const useSubscribeAuthStateChanged = () => {
  const [, dispatch] = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        dispatch({ type: 'REMOVE_USER' });
        return;
      }
      dispatch({ type: 'FETCH_MYSELF_START' });

      const createNewUser = async () => {
        const newUserData = {
          id: user.uid,
          name: user.displayName ?? '',
          eyecatchUrl: user.photoURL ?? '',
          wordCount: 0,
        };
        const response = await userModel().create(newUserData);
        if (response instanceof Error) {
          dispatch({ type: 'FETCH_MYSELF_FAILED', payload: response });
          return;
        }
        dispatch({
          type: 'FETCH_MYSELF_SUCCESS',
          payload: newUserData,
        });
      };

      const fetchUser = async () => {
        const userData = await userModel().get(user.uid);
        if (userData instanceof Error) {
          if (userData.message === '404') {
            createNewUser();
            return;
          }
          dispatch({ type: 'FETCH_MYSELF_FAILED', payload: userData });
          return;
        }
        dispatch({
          type: 'FETCH_MYSELF_SUCCESS',
          payload: userData,
        });
      };

      fetchUser();
    });

    return () => {
      unsubscribe();
    };
  });
};
