"use client";

import { genres } from "../data";

export default function SortByGenre({ onGenreChange }) {
  const handleGenreChange = (e) => {
    const selectedGenreId = e.target.value;
    onGenreChange(selectedGenreId);
  };

  return (
    <>
      <select
        name="Genre"
        className="w-28 self-center p-1 rounded-lg"
        onChange={handleGenreChange}
      >
        <option value="">All Genres</option>
        {Object.entries(genres).map(([genreId, genreName]) => (
          <option key={genreId} value={genreId}>
            {genreName}
          </option>
        ))}
      </select>
    </>
  );
}
