export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: "Book";
  author: Scalars["String"];
  id: Scalars["Int"];
  publisher: Scalars["String"];
  title: Scalars["String"];
};

export type BookInput = {
  author: Scalars["String"];
  publisher: Scalars["String"];
  title: Scalars["String"];
};

export type Message = {
  __typename?: "Message";
  content: Scalars["String"];
  id: Scalars["ID"];
  user: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  CreateBook: Book;
  DeleteBook: Scalars["String"];
  PostMessage: Scalars["ID"];
  UpdateBook: Scalars["String"];
};

export type MutationCreateBookArgs = {
  input: BookInput;
};

export type MutationDeleteBookArgs = {
  id: Scalars["Int"];
};

export type MutationPostMessageArgs = {
  content: Scalars["String"];
  user: Scalars["String"];
};

export type MutationUpdateBookArgs = {
  id: Scalars["Int"];
  input: BookInput;
};

export type Query = {
  __typename?: "Query";
  GetAllBooks: Array<Book>;
  GetOneBook: Book;
};

export type QueryGetOneBookArgs = {
  id: Scalars["Int"];
};

export type Subscription = {
  __typename?: "Subscription";
  messages?: Maybe<Array<Message>>;
};
