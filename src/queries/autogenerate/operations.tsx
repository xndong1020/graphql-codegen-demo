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

export type OnMessageAddedSubscriptionVariables = Types.Exact<{
  [key: string]: never;
}>;

export type OnMessageAddedSubscription = {
  __typename?: "Subscription";
  messages?: Array<{
    __typename?: "Message";
    id: string;
    content: string;
    user: string;
  }> | null;
};
