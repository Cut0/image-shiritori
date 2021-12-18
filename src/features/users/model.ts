import firebase from 'firebase/app';
import { User } from '../../@types';
import 'firebase/firestore';

export const userModel = () => {
  const db = firebase.firestore();

  const create = async (user: User) => {
    try {
      await db.collection('users').doc(user.id).set(user);
    } catch (e) {
      return new Error('500');
    }
  };

  const get = async (id: string) => {
    try {
      const doc = await db.collection('users').doc(id).get();
      if (doc.exists) {
        return doc.data() as User;
      } else {
        return new Error('404');
      }
    } catch (e) {
      console.error(e);
      return new Error('500');
    }
  };

  const getList = async (sortkey: string) => {
    const docs = await db.collection('users').orderBy(sortkey, 'desc').get();
    const res: User[] = [];
    docs.forEach((doc) => {
      res.push({ id: doc.id, ...doc.data } as User);
    });
    return res;
  };

  return {
    create,
    get,
    getList,
  };
};
