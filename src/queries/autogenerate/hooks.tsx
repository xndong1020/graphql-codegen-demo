import * as Types from "./operations";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;

export const GetAllBooksDocument = gql`
  query GetAllBooks {
    GetAllBooks {
      id
      title
      author
    }
  }
`;

/**
 * __useGetAllBooksQuery__
 *
 * To run a query within a React component, call `useGetAllBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBooksQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetAllBooksQuery,
    Types.GetAllBooksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    Types.GetAllBooksQuery,
    Types.GetAllBooksQueryVariables
  >(GetAllBooksDocument, options);
}
export function useGetAllBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetAllBooksQuery,
    Types.GetAllBooksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    Types.GetAllBooksQuery,
    Types.GetAllBooksQueryVariables
  >(GetAllBooksDocument, options);
}
export type GetAllBooksQueryHookResult = ReturnType<typeof useGetAllBooksQuery>;
export type GetAllBooksLazyQueryHookResult = ReturnType<
  typeof useGetAllBooksLazyQuery
>;
export type GetAllBooksQueryResult = Apollo.QueryResult<
  Types.GetAllBooksQuery,
  Types.GetAllBooksQueryVariables
>;
export const OnMessageAddedDocument = gql`
  subscription OnMessageAdded {
    messages {
      id
      content
      user
    }
  }
`;

/**
 * __useOnMessageAddedSubscription__
 *
 * To run a query within a React component, call `useOnMessageAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnMessageAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnMessageAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnMessageAddedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    Types.OnMessageAddedSubscription,
    Types.OnMessageAddedSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    Types.OnMessageAddedSubscription,
    Types.OnMessageAddedSubscriptionVariables
  >(OnMessageAddedDocument, options);
}
export type OnMessageAddedSubscriptionHookResult = ReturnType<
  typeof useOnMessageAddedSubscription
>;
export type OnMessageAddedSubscriptionResult =
  Apollo.SubscriptionResult<Types.OnMessageAddedSubscription>;
