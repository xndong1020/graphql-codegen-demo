import { SubscriptionResult } from "@apollo/client";
import {
  useGetAllBooksQuery,
  useOnMessageAddedSubscription,
} from "./queries/autogenerate/hooks";

function App() {
  const { loading, data, error } = useGetAllBooksQuery();
  const subscriptionResponse: SubscriptionResult =
    useOnMessageAddedSubscription();

  console.log("subscriptionResponse", subscriptionResponse);

  return (
    <>
      {loading && <div>Loading content</div>}
      {error && <div>{error.message}</div>}
      {data &&
        data.GetAllBooks.map((book) => (
          <div key={book.id} className="App">
            {book.title}
          </div>
        ))}
    </>
  );
}

export default App;
