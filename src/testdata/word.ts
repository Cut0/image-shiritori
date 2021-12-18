import { Word } from '../@types';

export const dummyWord: Word = {
  bookId: '1',
  name: 'Apple',
  mean: '赤い果実です',
  collectedAt: new Date(),
};

export const dummyWordList: Word[] = [
  { bookId: '1', name: 'Apple', mean: '赤い果実です', collectedAt: new Date() },
  { bookId: '2', name: 'Eglish', mean: '英語です', collectedAt: new Date() },
  { bookId: '3', name: 'Hero', mean: 'ヒーローです', collectedAt: new Date() },
  {
    bookId: '4',
    name: 'Orange',
    mean: 'オレンジです',
    collectedAt: new Date(),
  },
];
