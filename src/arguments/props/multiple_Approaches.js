import { React } from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const firstBook = {
  author: 'Napoleon Hill',
  title: 'Think and Grow Rich!',
  img: './img/book-NH.jpeg',
};
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
};


const {author, img} = secondBook;
const { title } = firstBook;
console.log(author + " & " + title)


function BookList() {
  return (
    <section className='booklist'>
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
}

//  const {author, title, img} = props
const Book = (props) => {
  console.log(props);
  const {author, title, img} = props
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

//// this twin is equal to Book
const Book_Twin = ({author, title, img}) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
