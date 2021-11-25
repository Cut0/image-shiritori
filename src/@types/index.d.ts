export type User = {
  id: string;
  name: string;
  wordCount: number;
  eyecatchUrl: string;
  bookList: Book[];
};

export type Book = {
  wordList: Word[];
};

export type Word = {
  name: string;
  mean: string;
  collectedAt: Date;
};
