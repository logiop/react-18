import { React } from "react";
import ReactDOM from "react-dom/client";
import './index.css'

/////     le const posso essere sia fuori che dentro le funzioni/component    /////
const author = 'Napoleon Hill '
const Book = () => {
  const title = 'Think and Grow Rich!'
  return (
    <article className='book'>
      <img
        src='./img/book-NH.jpeg'
        alt='Think and Grow Rich!'
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<BookList />);