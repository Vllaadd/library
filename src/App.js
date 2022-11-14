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
      <Route path="bookshelft" element={<Bookshelf/>} />
      <Route path="*" element={<NoMatch />}/>
    </div>
  );
}

export default App;
