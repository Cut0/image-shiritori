export type User = {
  id: string;
  name: string;
  wordCount: number;
  eyecatchUrl: string;
};

export type Book = {
  userId: string;
  wordList: Word[];
};

export type Word = {
  bookId: string;
  name: string;
  mean: string;
  collectedAt: Date;
};
