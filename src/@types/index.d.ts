export type User = {
  id: string;
  name: string;
  wordCount: number;
  eyecatchUrl: string;
};

export type Book = {
  userId: string;
  wordList: {
    id: string;
    name: string;
    date: Date;
  }[];
};

export type Word = {
  id: string;
  name: string;
  mean: string;
  collectedAt: Date;
};
