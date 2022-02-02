import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Movie from "./Moive";
const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=5961928c754ee1a108d4fdf52bdbf5e9&language=en-US&page=1&include_adult=false&query=${query}`
    );
    const data = await response.json();
    console.log(data);
    setMovies(data.results);
  };
  const Change = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="app">
      <div className="header">
        <h1>flixnet</h1>
        <div className="input">
          <input
            autoComplete="off"
            value={query}
            onChange={Change}
            placeholder="Search...."
            id="userInput"
          />
          <button className="btn" onClick={getData}>
            Search
          </button>
        </div>
      </div>
      <div className="spotlight"></div>
      <div className="movies">
        {movies.map((movie) => (
          <Movie
            name={movie.title}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            releaseDate={movie.release_date}
            overview={movie.overview}
          />
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
