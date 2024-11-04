// src/BookList.jsx
import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <div>
      <h1>Amazon Best Sellers</h1>
      <section className="w-11/12 max-w-screen-xl m-20 m-auto grid gap-8">
        {books.map((book) => {
          return <Book key={book.id} book={book} />;
        })}
      </section>
    </div>
  );
}

export default BookList;
