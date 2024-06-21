import React, { useContext, useEffect, useState } from "react";
import tvShow from "../../repository/tvShow";
import "./default.css";
import filterChevron from "../../img/moviesFilter.svg";
import { convertDate } from "../../repository/dataConvert";
import { SpinnerCircular } from "spinners-react";
import { useNavigate } from "react-router-dom";
import { CustomCircularProgress } from "../../repository/CircularProgress";
import { LangContext } from "../../context/Context";

function Tv() {
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [loader, setLoader] = useState(true);
  const { lang } = useContext(LangContext);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/tv/${id}`);
  };

  async function getPopularTvShows() {
    const resp = await tvShow.getMoviesByName(
      `popular?language=${lang}-US&page=1`
    );
    setPopularTvShows(resp.results);
    setLoader(false);
  }

  useEffect(() => {
    getPopularTvShows();
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
  return (
    <div className="moviesContainer">
      <h2>{lang === "en" ? "Popular TV Shows" : "Популярные сериалы"}</h2>
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
          {popularTvShows?.map((item, index) => {
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
                  <h1>{item.name}</h1>
                  <p>{convertDate(item.first_air_date)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tv;
