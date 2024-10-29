import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
  author: "Melania Trump",
  title: "Melania",
  img: "https://images-na.ssl-images-amazon.com/images/I/41e+dwz5W5L._AC_UL600_SR600,400_.jpg",
};

const secondBook = {
  author: "Rebecca Yarros",
  title: "Onyx Storm",
  img: "https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL600_SR600,400_.jpg",
};

const BookList = () => {
  return (
    <section className="bookList">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="book"></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
