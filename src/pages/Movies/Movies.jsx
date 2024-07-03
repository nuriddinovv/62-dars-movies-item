import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import filterChevron from "../../img/moviesFilter.svg";
import movies from "../../repository/movies";
import "./default.css";
import { LangContext } from "../../context/Context";
import CardComponent from "../../components/Card/CardComponent";

function Movies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loader, setLoader] = useState(true);
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
