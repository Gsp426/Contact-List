import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "5px", width: "200px" }}
      />
    </div>
  );
}

export default SearchBar;
