import {Link} from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/bookshelf">Bookshelf</Link>
      </nav>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />}/>;
      <Route path="boogit skshelft" element={<Bookshelf/>} />
      <Route path="*" element={<NoMatch />}/>
    </div>
  );
}

const Bookshelf = () =>{
  const books = [
    {title: "Title Road to Rust"},
    {title: "The road to react",
    isCompleted: true},
  ];

return(
  <>
  <h2>Bookshelft</h2>
  <ul>{books.map((book)=>(
    <li key={book.title}>{book.title}</li>
  ))}
    </ul>
  </>
)
  }
