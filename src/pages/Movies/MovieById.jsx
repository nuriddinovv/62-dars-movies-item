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
  const [modal, setModal] = useState(false);
  const { lang } = useContext(LangContext);

  const getMovieById = async () => {
    try {
      const response = await selectedMovieId.getMoviesById(
        `${params.id}?language=${lang === "ru" ? "ru-RU" : "en-US"}`,
        "movie"
      );
      setSelectedMovie(response);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    } finally {
      setLoader(false);
      if (selectedMovie) {
        console.log(selectedMovie);
      }
    }
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
      {modal && (
        <div className="modal">
          <div className="modalContent">
            <img
              src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
            />
            <div className="movieInfo">
              <span
                onClick={() => {
                  setModal(false);
                }}
              >
                ❌
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="selectedMovieContainer">
        <div className="content">
          <img
            onClick={() => {
              setModal(true);
            }}
            src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
          />
          <div className="text">
            <h1>
              {selectedMovie.title}{" "}
              <span style={{ fontWeight: "400" }}>
                ({new Date(selectedMovie.release_date).getFullYear()})
              </span>
            </h1>
            <div className="rate">
              <span style={{ display: "flex", gap: "10px", justifyContent: 'center', alignItems:'center'}}>
                <CustomCircularProgress
                  value={Math.round(selectedMovie.vote_average * 10)}
                />

                {lang === "en"
                  ? `Score`
                  : "Рейтинг"}
              </span>
              <div className="smile">
                <img
                  src="https://www.themoviedb.org/assets/2/v8/1f92f-a18cb233c7639241a00dd2fea97c74a12765c05a55b881653868dad147165eda.svg"
                  alt=""
                />
                <img
                  src="https://www.themoviedb.org/assets/2/v8/1f600-f53b445a86235a4ef54899ad2f1a936e3ff6d1dcdaafc9ed63d6a6070491c0a1.svg"
                  alt=""
                />
                <img
                  src="https://www.themoviedb.org/assets/2/v8/1f60d-f12478ffe50d98da9d6cafbf29ef1777b8d1d2bb123224c978ca9ba4e6e6159b.svg"
                  alt=""
                />
              </div>
              <div className="vibe">
                <button>What's your Vibe ?</button>
              </div>
            </div>
            <div className="desc">
              <h2>{lang === "en" ? "Overview" : "Обзор"}</h2>
              <p style={{ width: "700px" }}>
                {selectedMovie.overview ? selectedMovie.overview : "Not found"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieById;
