import { Word } from '../@types';

export const dummyWord: Word = {
  id: '1',
  name: 'Apple',
  mean: '赤い果実です',
  collectedAt: new Date(),
};

export const dummyWordList: Word[] = [
  { id: '1', name: 'Apple', mean: '赤い果実です', collectedAt: new Date() },
  { id: '2', name: 'Eglish', mean: '英語です', collectedAt: new Date() },
  { id: '3', name: 'Hero', mean: 'ヒーローです', collectedAt: new Date() },
  {
    id: '4',
    name: 'Orange',
    mean: 'オレンジです',
    collectedAt: new Date(),
  },
];
