import * as React from "react";
import {
        Routes, 
        Route, 
        Link    
                  } from "react-router-dom";

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
        <Route path="bookshelf" element={<Bookshelf />} />
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

const byTitle = (title) => (book) =>
book.title.toLowerCase().includes((title || "").toLowerCase());

const Bookshelf = () => {
  const books = [
    { title: "Title Road to Rust" },
    {
      title: "The road to react",
      isCompleted: true
    },
  ];
  const [title, setTitle] = React.useState("");
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <h2>Bookshelft</h2>
      <input type="text" value={title} onChange={handleTitle} />
      <ul>{books.filter(byTitle(title)).map((book) => (
        <li key={book.title}>{book.title}</li>
      ))}
      </ul>
    </>
  )
}

export default App;
