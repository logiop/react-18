import { React } from "react";
import ReactDOM from "react-dom/client";
import './index.css'


const books = [
  {
  author: 'Napoleon Hill',
  title: 'Think and Grow Rich!',
  img: './img/book-NH.jpeg',
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
  },
];



// In questo esempio, const { img, title, author } = book viene utilizzato per estrarre le proprietà img, title e author dall'oggetto book che è un elemento dell'array books.

// Una volta estratti i valori, vengono passati come proprietà (props) all'elemento <Book /> mediante la sintassi <Book img={img} title={title} author={author} />.


/// important /// In altre parole, la destructuring viene utilizzata per estrarre i valori dall'oggetto book e assegnarli a variabili separate. Queste variabili sono poi utilizzate per passare i valori come proprietà all'elemento <Book />.

// Quindi, sì, const { img, title, author } = book serve solo per estrarre le proprietà di book e assegnarle a variabili separate, che vengono poi utilizzate come proprietà dell'elemento <Book />.
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        console.log(book);
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
}

  
// function BookList() {
//   return (
//     <section className='booklist'>
//       {books.map((book) => {
//         console.log(book);

//         // return 'hello';
//         return (
//           <div>
//             <h2>{book.title}</h2>
//           </div>
//         );
//       })}
//     </section>
//   );
// }

const Book = (props) => {
  const { img, title, author } = props;

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



  //  author: 'Napoleon Hill',
  // title: 'Think and Grow Rich!',
  // img: './img/book-NH.jpeg',