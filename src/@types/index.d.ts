export type User = {
  id: string;
  name: string;
  eyecatchUrl: string;
  wordList: {
    id: string;
    name: string;
    collectedAt: Date;
  }[];
};

export type Book = {
  id: string;
  userId: string;
  wordList: {
    id: string;
    name: string;
    collectedAt: Date;
  }[];
};

export type Word = {
  id: string;
  name: string;
  mean: string;
  collectedAt: Date;
};
