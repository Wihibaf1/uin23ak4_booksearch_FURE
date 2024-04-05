import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search James Bond Books..."
        value={query}
        onChange={handleChange}
        className="border p-2 w-full"
      />
    </div>
  );
};

export default SearchBar;
