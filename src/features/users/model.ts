import firebase from 'firebase/app';
import { User } from '../../@types';
import 'firebase/firestore';

export const userModel = () => {
  const db = firebase.firestore();

  const create = async (user: User) => {
    try {
      await db.collection('users').doc(user.id).set(user);
    } catch (e) {
      console.error(e);
      throw new Error('500');
    }
  };

  const get = async (id: string) => {
    try {
      const doc = await db.collection('users').doc(id).get();
      if (doc.exists) {
        const user = { id: doc.id, ...doc.data() } as User;
        user.wordList = user.wordList.map((word) => {
          return {
            ...word,
            collectedAt: (
              word.collectedAt as unknown as firebase.firestore.Timestamp
            ).toDate(),
          };
        });
        return user;
      } else {
      }
    } catch (e) {
      console.error(e);
      throw new Error('500');
    }
  };

  const getList = async (sortkey: string) => {
    try {
      const docs = await db.collection('users').orderBy(sortkey, 'desc').get();
      const res: User[] = [];
      docs.forEach((doc) => {
        const user = { id: doc.id, ...doc.data() } as User;
        user.wordList = user.wordList.map((word) => {
          return {
            ...word,
            collectedAt: (
              word.collectedAt as unknown as firebase.firestore.Timestamp
            ).toDate(),
          };
        });
        res.push(user);
      });
      return res;
    } catch (e) {
      console.error(e);
      throw new Error('500');
    }
  };

  const updateBook = async (id: string, wordList: User['wordList']) => {
    try {
      await db
        .collection('users')
        .doc(id)
        .update({
          wordList: firebase.firestore.FieldValue.arrayUnion(...wordList),
        });
    } catch (e) {
      console.error(e);
      throw new Error('500');
    }
  };

  const deleteUser = async (id: string) => {
    try {
      await db.collection('users').doc(id).delete();
    } catch (e) {
      console.error(e);
      throw new Error('500');
    }
  };

  return {
    create,
    get,
    getList,
    updateBook,
    deleteUser,
  };
};
