"use client";

import { useState } from "react";
import { filters, genres } from "./data";
import Button from "./components/Button";
import Movie from "./components/Movie";
import Footer from "./components/Footer";
import SortByFilter from "./components/SortByFilter";
import SortByGenre from "./components/SortByGenre";

export default function Home() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [displayCooldown, setDisplayCooldown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(filters.all);
  const [selectedGenre, setSelectedGenre] = useState("0");

  const cooldownComplete = () => {
    setDisplayCooldown(false);
    setCooldown(false);
  };

  const generateMovie = () => {
    if (cooldown) {
      setDisplayCooldown(true);
      return;
    }

    setCooldown(true);
    setLoading(true);

    const randomPage = Math.floor(Math.random() * selectedFilter.pages) + 1;
    const fetchUrl = `/api?filterUrl=${encodeURIComponent(
      selectedFilter.url
    )}&genre=${selectedGenre}&page=${randomPage}`;

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        const filteredMovies = data.results.filter((movie) => !movie.adult);
        const randomMovie =
          filteredMovies[Math.floor(Math.random() * filteredMovies.length)];

        setMovie(randomMovie);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    setTimeout(() => cooldownComplete(), 1000);
  };

  const handleFilterChange = (newFilter) => {
    setSelectedFilter(newFilter);
  };

  const handleGenreChange = (genreId) => {
    setSelectedGenre(genreId);
    setSelectedFilter(filters.all);
  };

  return (
    <div className="flex flex-col px-3">
      <div className="flex flex-col gap-10 p-14">
        <h1 className="self-center text-6xl font-semibold text-white text-center">
          Don't Know What To Watch?
        </h1>
        <Button onClick={generateMovie} />
        <div className="self-center flex flex-row gap-3">
          <SortByFilter onFilterChange={handleFilterChange} />
          <SortByGenre onGenreChange={handleGenreChange} />
        </div>
      </div>

      <div className="max-w-[64rem] self-center">
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          movie && <Movie movie={movie} genres={genres} />
        )}
        {displayCooldown && (
          <p className="text-white font-semibold text-xl">Slow down!</p>
        )}
      </div>

      <Footer />
    </div>
  );
}
