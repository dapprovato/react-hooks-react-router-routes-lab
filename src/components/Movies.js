import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie) =>
      <div key={movie.title}>
      <div>{movie.title}, {movie.time}</div>
      <ul>{movie.genres.map((genre) =>
        <li key={genre}>{genre}</li>
      )}</ul>
      </div>
    )}
  </div>;
}

export default Movies;
