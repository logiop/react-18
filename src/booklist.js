import React from 'react';
import ReactDOM from 'react-dom/client';

const Image = () => <h2>image placeholder</h2>;
const Title = () => <h2>Book Title</h2>;
const Author = () => <h5>Author name</h5>;

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Booklist = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist />);
