import * as Types from "./schemas";

export type GetAllBooksQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetAllBooksQuery = {
  __typename?: "Query";
  GetAllBooks: Array<{
    __typename?: "Book";
    id: number;
    title: string;
    author: string;
  }>;
};
