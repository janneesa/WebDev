// src/Book.jsx
const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className="bg-[#fff] rounded-2xl p-8 text-center">
      <img src={img} alt={title} className="w-full object-cover" />
      <h2 className="mt-4 text-base">{title}</h2>
      <h4 className="text-gray-500 text-xs mt-2 tracking-[2px]">{author}</h4>
    </article>
  );
};

export default Book;
