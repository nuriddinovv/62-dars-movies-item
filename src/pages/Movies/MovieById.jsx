import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movies from "../../repository/movies";

function MovieById() {
  const [selectedMovie, setSelectedMovie] = useState({});

  const params = useParams();

  const getMovieById = async () => {
    const response = await movies.getMoviesByName(
      `${params.id}?language=en-US`
    );
    console.log(response);
    setSelectedMovie(response);
  };

  useEffect(() => {
    getMovieById();
  }, []);

  return (
    <div>
      Thi is Movie by id page
      <h1>{selectedMovie?.id}</h1>
      {selectedMovie && selectedMovie?.poster_path && (
        <img
          src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${selectedMovie?.poster_path}`}
          alt=""
        />
      )}
    </div>
  );
}

export default MovieById;
