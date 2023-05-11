import { React } from "react";
import ReactDOM from "react-dom/client";
import './index.css'


const books = [
  {
  author: 'Napoleon Hill',
  title: 'Think and Grow Rich!',
  img: './img/book-NH.jpeg',
  id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
];


function BookList2() {
    return (
      <section className='booklist'>
        {books.map((book) => {
          console.log(book);
          return <Book book={book} key={book.id} />;   /// is the BookList1 but have just the  key={book.id}
        })}
      </section>
    );
  }
  
  const Book2 = (props) => {
    const { img, title, author } = props.book;
  
    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author} </h4>
      </article>
    );
  };



function BookList1() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        console.log(book);
        const { img, title, author } = book;
        return <Book book={book} />;
      })}
    </section>
  );
}

const Book1 = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

// seconda funzione //

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        console.log(book);
        return <Book {...book} key={book.id} />;    /// senza id in console ricevo un errore ///
      })}
    </section>
  );
}

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

// Entrambe le funzioni, BookList1() e BookList(), generano una lista di libri e passano le proprietà dei singoli libri al componente Book.

// La principale differenza tra le due funzioni è la forma in cui le proprietà vengono passate al componente Book. In BookList1(), le proprietà vengono passate come oggetto unico chiamato book, mentre in BookList() le proprietà vengono passate utilizzando lo spread operator {...book}.

// In BookList1(), all'interno del map, viene distrutto l'oggetto book e le proprietà img, title e author vengono passate al componente Book tramite props. In questo modo, il componente Book riceve un oggetto props chiamato book che contiene tutte le proprietà del libro.

// In BookList(), invece, le proprietà vengono passate utilizzando lo spread operator {...book}. Ciò significa che le proprietà dell'oggetto book vengono esplose in singole proprietà e passate al componente Book. In questo modo, il componente Book riceve singole proprietà come img, title e author.

// Entrambi gli approcci sono validi e dipende dalle esigenze specifiche del progetto scegliere quale utilizzare. L'approccio con lo spread operator può essere più conciso e leggibile, ma l'approccio con l'oggetto book può rendere più chiaro il contenuto del componente Book e rendere più semplice l'aggiunta di nuove proprietà in futuro.