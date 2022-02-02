import React from "react";

const Movie = ({ name, image, releaseDate, overview, popularity }) => {
  return (
    <div className="movie">
      <img src={image} />
      <div className="d">
        <h3>{name}</h3>
        <h4>{releaseDate}</h4>
        <div className="overview">{overview}</div>
        <div className="popularity">{popularity}</div>
      </div>
    </div>
  );
};
export default Movie;
