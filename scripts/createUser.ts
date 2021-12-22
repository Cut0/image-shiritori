const admin = require('firebase-admin');

const serviceAccount = require('../image-shiritori-firebase-adminsdk-m5yje-ae4c0bf3e2.json');

const dummyUserList = [
  {
    id: '1',
    name: 'A太郎',
    eyecatchUrl: 'https://picsum.photos/200/300',
    wordList: [
      {
        id: '1',
        name: 'Apple',
        // mean: '赤い果実です',
        collectedAt: new Date(),
      },
      {
        id: '2',
        name: 'Eglish',
        //mean: '英語です',
        collectedAt: new Date(),
      },
      {
        id: '3',
        name: 'Hero',
        //mean: 'ヒーローです',
        collectedAt: new Date(),
      },
      {
        id: '4',
        name: 'Orange',
        //mean: 'オレンジです',
        collectedAt: new Date(),
      },
    ],
    wordCount: 4,
  },
  {
    id: '2',
    name: 'B太郎',
    eyecatchUrl: 'https://picsum.photos/200/300',
    wordList: [
      {
        id: '1',
        name: 'Apple',
        // mean: '赤い果実です',
        collectedAt: new Date(),
      },
      {
        id: '2',
        name: 'Eglish',
        //mean: '英語です',
        collectedAt: new Date(),
      },
      {
        id: '3',
        name: 'Hero',
        //mean: 'ヒーローです',
        collectedAt: new Date(),
      },
    ],
    wordCount: 3,
  },
  {
    id: '3',
    name: 'C太郎',
    eyecatchUrl: 'https://picsum.photos/200/300',
    wordList: [
      {
        id: '1',
        name: 'Apple',
        // mean: '赤い果実です',
        collectedAt: new Date(),
      },
      {
        id: '2',
        name: 'Eglish',
        //mean: '英語です',
        collectedAt: new Date(),
      },
    ],
    wordCount: 2,
  },
  {
    id: '4',
    name: 'D太郎',
    eyecatchUrl: 'https://picsum.photos/200/300',
    wordList: [
      {
        id: '1',
        name: 'Apple',
        // mean: '赤い果実です',
        collectedAt: new Date(),
      },
    ],
    wordCount: 1,
  },
  {
    id: '5',
    name: 'E太郎',
    eyecatchUrl: 'https://picsum.photos/200/300',
    wordList: [
      {
        id: '2',
        name: 'Eglish',
        //mean: '英語です',
        collectedAt: new Date(),
      },
    ],
    wordCount: 1,
  },
  {
    id: '6',
    name: 'F太郎',
    eyecatchUrl: 'https://picsum.photos/200/300',
    wordList: [
      {
        id: '3',
        name: 'Hero',
        //mean: 'ヒーローです',
        collectedAt: new Date(),
      },
    ],
    wordCount: 1,
  },
  {
    id: '7',
    name: 'G太郎',
    eyecatchUrl: 'https://picsum.photos/200/300',
    wordList: [
      {
        id: '4',
        name: 'Orange',
        //mean: 'オレンジです',
        collectedAt: new Date(),
      },
    ],
    wordCount: 1,
  },
  {
    id: '8',
    name: 'H太郎',
    eyecatchUrl: 'https://picsum.photos/200/300',
    wordList: [],
    wordCount: 0,
  },
  {
    id: '9',
    name: 'I太郎',
    eyecatchUrl: 'https://picsum.photos/200/300',
    wordList: [],
    wordCount: 0,
  },
  {
    id: '10',
    name: 'J太郎',
    eyecatchUrl: 'https://picsum.photos/200/300',
    wordList: [],
    wordCount: 0,
  },
];

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
dummyUserList.forEach((user) => {
  db.collection('users').doc(user.id).set(user);
});
