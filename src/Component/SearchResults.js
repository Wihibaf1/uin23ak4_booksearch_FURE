import React, { useState } from "react";
import BookProfile from "./BookProfile";
function BookCard({ book }) {
  const [showProfile, setShowProfile] = useState(false);

  const handleShowProfile = () => {
    setShowProfile(true);
  };

  return (
    <div className="border p-4 rounded">
      <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
      <p>
        Author: {book.author_name ? book.author_name.join(", ") : "Unknown"}
      </p>
      <p>Published Year: {book.first_publish_year}</p>
      <button
        onClick={handleShowProfile}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        More about the book
      </button>
      {showProfile && <BookProfile bookKey={book.key} />}
    </div>
  );
}

function SearchResults({ books }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}

export default SearchResults;
