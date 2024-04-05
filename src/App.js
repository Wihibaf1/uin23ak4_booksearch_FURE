import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./Component/searchBar";
import SearchResults from "./Component/SearchResults";

function App() {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://openlibrary.org/search.json?q=james+bond"
        );
        setBooks(response.data.docs);
      } catch (error) {
        setError("An error occurred. Please try again later.");
      }
    };
    fetchBooks();
  }, []);

  const handleSearch = async (query) => {
    if (query.length >= 3) {
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${query}`
        );
        setSearchResults(response.data.docs);
      } catch (error) {
        setError("An error occurred. Please try again later.");
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">James Bond Books</h1>
      <SearchBar handleSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      {searchResults.length > 0 ? (
        <SearchResults books={searchResults} />
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {books.map((book, index) => (
            <div key={index} className="border p-4 rounded">
              <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
              <p>
                Author:{" "}
                {book.author_name ? book.author_name.join(", ") : "Unknown"}
              </p>
              <p>Published Year: {book.first_publish_year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
