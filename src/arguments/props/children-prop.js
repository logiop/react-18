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
  
  function BookList() {
    return (
      <section className='booklist'>
        <Book
          author={firstBook.author}
          title={firstBook.title}
          img={firstBook.img}
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
          </p>
          <button>click me</button>
        </Book>
        <Book
          author={secondBook.author}
          title={secondBook.title}
          img={secondBook.img}
        />
      </section>
    );
  }

  ///   questo esempio serve per aiutarti a capire al meglio  ///
  ///             sia Book che Book2 sono uguali              ///

  const Book2 = ({ img, title, author, children }) => {      
    console.log(img, title, author, children);
    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author} </h4>
        {children}
      </article>
    );
  };

  
  const Book = (props) => {
    const { img, title, author, children } = props;
    console.log(props);
    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author} </h4>
        {children}
      </article>
    );
  };

  //// se rimuovo children non ottengo il <p> & il button nella mia funzione BookList, 
  //// come puoi vedere in codesta fuzione <Book> passa solo i valori : <img src={img} alt={title} />  <h2>{title}</h2>  <h4>{author} </h4>
  //// invece per prestare il {children} facciamo semplicemtente questo <Book> everything that we want to add </Book>
  //// quindi in sintesi, posso aggiungere o passare elementi e molto altro