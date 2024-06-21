import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import movies from "../../repository/movies";
import filterChevron from "../../img/moviesFilter.svg";
import { convertDate } from "../../repository/dataConvert";
import "./default.css";
import { CustomCircularProgress } from "../../repository/CircularProgress";
import { LangContext } from "../../context/Context";

function Upcoming() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate(); 
  const { lang } = useContext(LangContext);
  async function getUpcomingMovies() {
    const resp = await movies.getMoviesByName(
      `upcoming?language=${lang}-US&page=1`
    );
    setUpcomingMovies(resp.results);
    setLoader(false);
  }

  useEffect(() => {
    getUpcomingMovies();
  }, [lang]);

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

  const handleClick = (id) => {
    navigate(`/movies/${id}`); 
  };

  return (
    <div className="moviesContainer">
      <h2>{lang === "en" ? "Upcoming Movies" : "Ожидаемые фильмы"}</h2>
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
          {upcomingMovies?.map((item, index) => {
            return (
              <div
                onClick={() => {
                  handleClick(item.id);
                }}
                key={index}
                className="card"
              >
                <span className="material-symbols-outlined moreIcon">
                  more_horiz
                </span>
                <img
                  src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`}
                  alt=""
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
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
