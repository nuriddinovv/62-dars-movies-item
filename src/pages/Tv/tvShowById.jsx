import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import movies from "../../repository/tvShow";
import "./selectedMovie.css";
function MovieById() {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [loader, setLoader] = useState(true);
  const params = useParams();

  const getMovieById = async () => {
    const response = await movies.getMoviesByName(
      `${params.id}?language=en-US`
    );
    setSelectedMovie(response);
    setLoader(false);
  };

  useEffect(() => {
    getMovieById();
  }, [params.id]);

  if (loader) {
    return (
      <div className="loader">
        <SpinnerCircular
          size={100}
          thickness={100}
          speed={100}
          color="#000"
          secondaryColor="rgba(0, 0, 0, 0.3)"
        />
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w440_and_h660_face/${selectedMovie.backdrop_path})`,
      }}
      className="selectedMovie"
    >
      <div className="selectedMovieContainer">
        <img
          src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${selectedMovie.poster_path}`}
          alt=""
        />
        <div className="text"></div>
      </div>
    </div>
  );
}

export default MovieById;
