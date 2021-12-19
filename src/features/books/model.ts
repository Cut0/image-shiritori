import firebase from 'firebase/app';
import { Book } from '../../@types';
import 'firebase/firestore';

export const bookModel = () => {
  const db = firebase.firestore();

  const create = async (userId: string, initialWord: Book['wordList']) => {
    try {
      await db.collection('books').add({ userId, wordList: initialWord });
    } catch (e) {
      console.error(e);
      throw new Error('500');
    }
  };

  const get = async (userId: string) => {
    try {
      let res: undefined | Book = undefined;
      await db
        .collection('books')
        .where('userId', '==', userId)
        .limit(1)
        .get()
        .then((snapShot) => {
          snapShot.forEach((doc) => {
            res = { id: doc.id, ...doc.data() } as Book;
          });
        });
      return res;
    } catch (e) {
      console.error(e);
      throw new Error('500');
    }
  };

  const update = async (bookId: string, wordList: Book['wordList']) => {
    try {
      await db
        .collection('books')
        .doc(bookId)
        .update({
          wordList: firebase.firestore.FieldValue.arrayUnion(...wordList),
        });
    } catch (e) {
      console.error(e);
      throw new Error('500');
    }
  };

  return {
    create,
    get,
    update,
  };
};
