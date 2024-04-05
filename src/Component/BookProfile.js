import React, { useState, useEffect } from "react";
import axios from "axios";

function BookProfile({ bookKey }) {
  const [bookDetails, setBookDetails] = useState(null);
  const [error, setError] = useState("");
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          CORS_PROXY + `https://openlibrary.org/works/${bookKey}.json`
        );
        console.log(response.data);
        setBookDetails(response.data);
      } catch (error) {
        setError("An error occurred. Please try again later.");
      }
    };
    fetchBookDetails();
  }, [bookKey]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!bookDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">{bookDetails.title}</h2>
      <p>
        Author(s): {bookDetails.authors.map((author) => author.name).join(", ")}
      </p>
      <p>First Published: {bookDetails.first_publish_year}</p>
      <p>ISBN: {bookDetails.identifiers.isbn_10}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default BookProfile;
