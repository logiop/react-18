import { React } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

function BookList() {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const EventExamples = () => {
  const handleFormInput = () => {
    console.log("handle form input");
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

///Event Object and Form Submission
const EventExamples1 = () => {
  // delete 1 so that get EventExamples
  const handleFormInput = (e) => {
    console.log(e);
    // e.target - element
    console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
    // console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        {/* add button with type='submit' */}
        <button type="submit">submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

const EventExaples2 = () => {
  //delete 2 so that get EventExamples

  const handleFormInput = (e) => {
    // console.log(e.target)  /// in questo caso e.target rappresenta l'elemento 'input' stesso
    console.log(e.target.value); /// funziona grazie a onChange={handleFormInput}, e con value prende línput e lo fa vedere nel clg
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault(); // Quando questo evento viene attivato, la funzione handleFormSubmission viene chiamata con l'oggetto evento e come argomento. L'istruzione e.preventDefault() viene utilizzata per prevenire il comportamento predefinito del form, che in genere provocherebbe il ricaricamento della pagina.
    console.log("submitted");
  };
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Tipical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
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
