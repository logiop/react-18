import { React } from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const Image = () => <img src="./img/book-NH.jpeg" alt="Think and Grow Rich!"/>
const Title = () => <h2>Think and Grow Rich!</h2>;
const Author = () => <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem'}}>Napoleon Hill</h4>;

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
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


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
