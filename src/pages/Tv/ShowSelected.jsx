import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import selectedMovieId from "../../repository/selectedMovieId";
import "./selectedMovie.css";
import { CustomCircularProgress } from "../../repository/CircularProgress";
import { LangContext } from "../../context/Context";
function MovieById() {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [loader, setLoader] = useState(true);
  const params = useParams();
  const { lang } = useContext(LangContext);
  const getMovieById = async () => {
    const response = await selectedMovieId.getMoviesById(
      `${params.id}?language=${lang}-US`,
      "tv"
    );
    setSelectedMovie(response);
    setLoader(false);
    console.log(response);
  };

  useEffect(() => {
    getMovieById();
  }, [params.id, lang]);

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
        <div className="content">
          <img
            src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${selectedMovie.poster_path}`}
            alt=""
          />
          <div className="text">
            <h1>{selectedMovie.original_name}</h1>
            <span>
              <CustomCircularProgress
                value={Math.round(selectedMovie.vote_average * 10)}
              />
              <h2>{lang === "en" ? "Overwiev" : "Обзор"}</h2>
              <p style={{ width: "700px" }}>
                {selectedMovie.overview === ""
                  ? "not found"
                  : selectedMovie.overview}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieById;
