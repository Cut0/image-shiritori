import firebase from 'firebase/app';
import 'firebase/firestore';

export const userModel = () => {
  const db = firebase.firestore();

  const create = async (id: string) => {
    try {
      await db.collection('users').doc(id).set({ wordCount: 0 });
    } catch (e) {
      return new Error('500');
    }
  };

  const get = async (id: string) => {
    try {
      const doc = await db.collection('users').doc(id).get();
      if (doc.exists) {
        return doc.data() as { wordCount: number };
      } else {
        return new Error('404');
      }
    } catch (e) {
      console.error(e);
      return new Error('500');
    }
  };

  return {
    create,
    get,
  };
};
