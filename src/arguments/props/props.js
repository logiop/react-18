const author = 'Napoleon Hill';
const title = 'Think and Grow Rich!';
const img = './img/book-NH.jpeg';



// parameters
const someFunc = (param1, param2) => {
    console.log(param1, param2);
  };
  // arguments
  someFunc('job', 'developer');


function BookList() {
  return (
    <section className='booklist'>
      <Book job='developer' />
      <Book title='random title' number='9'/>
    </section>
  );
}
const Book1 = (props) => {
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <p>{props.title}</p>
      <p>{props.job}</p>
      <p>{props.number}</p>
    </article>
  );
};


// #    props object, convention to call props, 'shakeAndBake' is an excellent alternative

// # pass as key/value pairs

// # if the prop exists it will return value, otherwise no value


function BookList() {
  return (
    <section className='booklist'>
      <Book author={author} title={title} img={img} />
      <Book title={title} img={img} />                
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  );
};


