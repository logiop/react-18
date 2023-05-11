import { React } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/// actually this guy is amazing. do the challenge ///
// - initial setup
// - create getBook function in booklist
// - accepts id as an argument and finds the book
// - [Javascript Nuggets - Filter and Find](https://www.youtube.com/watch?v=KeYxsev737s&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=4)
// - pass the function down to Book Component and invoke on the button click
// - in the Book Component destructure id and function
// - invoke the function when user clicks the button, pass the id
// - the goal : you should see the same book in the console


const books = [
  {
    author: "Napoleon Hill",
    title: "Think and Grow Rich!",
    img: "./img/book-NH.jpeg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};



const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  // console.log(props);
  const getSingleBook = () => {  // ho dovuto creare una const poiche onClick={getBook(id)} run la mia funzione e mi da un errore. io invece devo invocarla con una const
    getBook(id)  // getSingleBook invoca getBook(id) dentro la funzione
  } /// la seconda opzione onClick={() = getBook(id)} // la passo in una anonima funziona e dopo la invoco
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* this is not going to work */}
      <button onClick={getSingleBook}>display title</button>  
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

//  author: 'Napoleon Hill',
// title: 'Think and Grow Rich!',
// img: './img/book-NH.jpeg',
import { React } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/// actually this guy is amazing. do the challenge ///
// - initial setup
// - create getBook function in booklist
// - accepts id as an argument and finds the book
// - [Javascript Nuggets - Filter and Find](https://www.youtube.com/watch?v=KeYxsev737s&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=4)
// - pass the function down to Book Component and invoke on the button click
// - in the Book Component destructure id and function
// - invoke the function when user clicks the button, pass the id
// - the goal : you should see the same book in the console


const books = [
  {
    author: "Napoleon Hill",
    title: "Think and Grow Rich!",
    img: "./img/book-NH.jpeg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};



const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  // console.log(props);
  const getSingleBook = () => {  // ho dovuto creare una const poiche onClick={getBook(id)} run la mia funzione e mi da un errore. io invece devo invocarla con una const
    getBook(id)  // getSingleBook invoca getBook(id) dentro la funzione
  } /// la seconda opzione onClick={() = getBook(id)} // la passo in una anonima funziona e dopo la invoco
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* this is not going to work */}
      <button onClick={getSingleBook}>display title</button>  
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

//  author: 'Napoleon Hill',
// title: 'Think and Grow Rich!',
// img: './img/book-NH.jpeg',
import { React } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/// actually this guy is amazing. do the challenge ///
// - initial setup
// - create getBook function in booklist
// - accepts id as an argument and finds the book
// - [Javascript Nuggets - Filter and Find](https://www.youtube.com/watch?v=KeYxsev737s&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=4)
// - pass the function down to Book Component and invoke on the button click
// - in the Book Component destructure id and function
// - invoke the function when user clicks the button, pass the id
// - the goal : you should see the same book in the console


const books = [
  {
    author: "Napoleon Hill",
    title: "Think and Grow Rich!",
    img: "./img/book-NH.jpeg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};



const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  // console.log(props);
  const getSingleBook = () => {  // ho dovuto creare una const poiche onClick={getBook(id)} run la mia funzione e mi da un errore. io invece devo invocarla con una const
    getBook(id)  // getSingleBook invoca getBook(id) dentro la funzione
  } /// la seconda opzione onClick={() = getBook(id)} // la passo in una anonima funziona e dopo la invoco
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* this is not going to work */}
      <button onClick={getSingleBook}>display title</button>  
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

//  author: 'Napoleon Hill',
// title: 'Think and Grow Rich!',
// img: './img/book-NH.jpeg',
