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
          wordList: [],
        };
        userModel()
          .create(newUserData)
          .then(() => {
            dispatch({
              type: 'FETCH_MYSELF_SUCCESS',
              payload: newUserData,
            });
          })
          .catch((e) => {
            dispatch({ type: 'FETCH_MYSELF_FAILED', payload: e });
          });
      };

      userModel()
        .get(user.uid)
        .then((userData) => {
          if (userData === undefined) {
            createNewUser();
            return;
          }
          dispatch({
            type: 'FETCH_MYSELF_SUCCESS',
            payload: userData,
          });
        })
        .catch((e) => {
          dispatch({ type: 'FETCH_MYSELF_FAILED', payload: e });
        });
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
};
