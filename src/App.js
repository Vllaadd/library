import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/bookshelf">Bookshelf</Link>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />;
        <Route path="boogit skshelft" element={<Bookshelf />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

const NoMatch = () => {
  return (<p>There's nothing here, you need to go back. </p>)
}

const Home = () => {
  return (<p>Hello, this is Home page. </p>)
}

const Bookshelf = () => {
  const books = [
    { title: "Title Road to Rust" },
    {
      title: "The road to react",
      isCompleted: true
    },
  ];

  return (
    <>
      <h2>Bookshelft</h2>
      <ul>{books.map((book) => (
        <li key={book.title}>{book.title}</li>
      ))}
      </ul>
    </>
  )
}

export default App;
