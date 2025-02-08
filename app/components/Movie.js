"use client";

import Image from "next/image";
import MovieInfo from "./MovieInfo";

export default function Movie({ movie, genres }) {
  return (
    <div className="flex flex-col">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        width={780}
        height={439}
        draggable="false"
        priority
        className="rounded-3xl"
      />
      <h1 className="font-semibold text-6xl text-white mb-5 mt-5">
        {movie.title}
      </h1>

      <div className="flex flex-col gap-3 max-w-[38rem]">
        <MovieInfo
          title="Rating"
          content={`${movie.vote_average.toFixed(1)}/10`}
        />
        <MovieInfo title="Overview" content={movie.overview} />
        <MovieInfo title="Release Date" content={movie.release_date} />
        <MovieInfo
          title="Language"
          content={movie.original_language.toUpperCase()}
        />
        <MovieInfo
          title="Genres"
          content={movie.genre_ids
            ?.map((id) => genres[id] || "Unknown")
            .join(", ")}
        />
      </div>
    </div>
  );
}
