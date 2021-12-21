import firebase from 'firebase/app';
import { Word } from '../../@types';
import 'firebase/firestore';

export const wordModel = () => {
  const db = firebase.firestore();

  const create = async (word: Word) => {
    try {
      await db.collection('words').doc(word.id).set(word);
    } catch (e) {
      console.error(e);
      throw new Error('500');
    }
  };

  const get = async (wordId: string) => {
    try {
      const doc = await db.collection('words').doc(wordId).get();
      if (doc.exists) {
        return doc.data() as Word;
      } else {
        return undefined;
      }
    } catch (e) {
      console.error(e);
      throw new Error('500');
    }
  };
  return { create, get };
};
