import { useGetAllBooksQuery } from "./queries/autogenerate/hooks";

function App() {
  const { loading, data, error } = useGetAllBooksQuery();

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
