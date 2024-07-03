import React, { useContext, useEffect, useState } from "react";
import movies from "../../repository/movies";
import "./default.css";
import filterChevron from "../../img/moviesFilter.svg";
import { SpinnerCircular } from "spinners-react";
import { LangContext } from "../../context/Context";
import CardComponent from "../../components/Card/CardComponent";
function NowPlaying() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const { lang } = useContext(LangContext);

  async function getNowPlayingMovies() {
    const resp = await movies.getMoviesByName(
      `now_playing?language=${lang}-US&page=1`
    );
    setNowPlayingMovies(resp.results);
    setLoader(false);
  }

  useEffect(() => {
    getNowPlayingMovies();
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
      <h2>{lang === "en" ? "Now Playing" : "Сейчас смотрят фильмы"}</h2>
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
          {nowPlayingMovies?.map((item, index) => {
            return (
              <CardComponent
                key={index}
                item={item}
                id={item.id}
                image={item.poster_path}
                title={item.title}
                rating={item.vote_average}
                date={item.release_date}
                toid={"movies"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NowPlaying;
