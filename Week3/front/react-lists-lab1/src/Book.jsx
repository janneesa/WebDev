function Book({ book }) {
  return (
    <div className="bg-[#f9f9f9] border-solid border-[1px] border-gray-300 p-4 m-2.5 rounded-md">
      <h2 className="text-xl m-0 text-gray-800">{book.title}</h2>
      <p>
        <strong>Author: {book.author}</strong>
      </p>
      <p>
        <strong>Genre: {book.genre}</strong>
      </p>
      <p>
        <strong>Year: {book.year}</strong>
      </p>
    </div>
  );
}

export default Book;
