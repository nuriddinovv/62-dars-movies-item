import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import filterChevron from "../../img/moviesFilter.svg";
import { convertDate } from "../../repository/dataConvert";
import movies from "../../repository/movies";
import "./default.css";
import { CustomCircularProgress } from "../../repository/CircularProgress";
import { LangContext } from "../../context/Context";

function Movies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const [fModal, setFModal] = useState(true);
  const navigate = useNavigate();
  const { lang } = useContext(LangContext);

  const getPopularMovies = async () => {
    try {
      const resp = await movies.getMoviesByName(
        `popular?language=${lang}-US&page=1`
      );
      setPopularMovies(resp.results);
    } catch (error) {
      console.error("Failed to fetch popular movies:", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, [lang]);

  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };

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
    <div className="moviesContainer">
      <h2>{lang === "en" ? "Popular Movies" : "Популярные фильмы"}</h2>
      <div className="moviesWrapper">
        <div className="moviesFilter">
          <div className="sort">
            <h3>{lang === "en" ? "Sort" : "Сортировать"}</h3>
            <img src={filterChevron} alt="filter chevron" />
          </div>
          <div className="sort">
            <h3>{lang === "en" ? "Filters" : "Фильтры"}</h3>
            <img src={filterChevron} alt="filter chevron" />
          </div>
          <button className="filterSearch">
            {lang === "en" ? "Search" : "Поиск"}
          </button>
        </div>
        <div className="moviesCards">
          {popularMovies?.map((item, index) => (
            <div
              onClick={() => handleClick(item.id)}
              key={index}
              className="card"
            >
              <span
                onClick={() => {
                  setFModal(true);
                }}
                className="material-symbols-outlined moreIcon"
              >
                more_horiz
              </span>
              {fModal && <div>lasdadasfa</div>}
              <img
                src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`}
                alt={item.title}
              />
              <div className="cardBody">
                <span>
                  <CustomCircularProgress
                    value={Math.round(item.vote_average * 10)}
                  />
                </span>
                <h1>{item.title}</h1>
                <p>{convertDate(item.release_date)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
