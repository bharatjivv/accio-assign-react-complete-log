import React from "react";

function GenreFilter({ genres, onSelectGenre }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelectGenre(genre)}
          style={{ marginRight: "10px", padding: "8px 12px", cursor: "pointer" }}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;
