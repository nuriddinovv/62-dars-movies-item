import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Oscar from "../../img/homeOscars.svg";
import ToggleButton from "../../repository/btn/toggleBtn";
import homeTrending from "../../repository/homeTrending";
import "./home.css";
import { CustomCircularProgress } from "../../repository/CircularProgress";
import { LangContext } from "../../context/Context";

function Home() {
  const [trendData, setTrendData] = useState([]);
  const searchRef = useRef();
  const router = useNavigate();
  const { lang } = useContext(LangContext);
  async function getPopularMovies(searchWord = "day") {
    const resp = await homeTrending.getMoviesByName(
      `movie/${searchWord}?language=${lang}-US`
    );
    setTrendData(resp.results);
  }
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };
  useEffect(() => {
    getPopularMovies();
  }, [lang]);

  const handleSearch = () => {
    router(`/search?query=${searchRef?.current.value}`);
  };

  const handleToggle = (value) => {
    getPopularMovies(value === "today" ? "day" : "week");
  };

  return (
    <div>
      <div className="sectOne">
        <div className="texts">
          {lang === "ru" ? <h2>Добро пожаловать.</h2> : <h2>Welcome</h2>}
          {lang === "ru" ? (
            <h3>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>
          ) : (
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          )}
          <div className="search">
            <input
              type="search"
              placeholder={
                lang === "ru"
                  ? "Найти фильм, сериал, персону......."
                  : "Search for a movie, tv show, person......"
              }
              name=""
              id=""
              ref={searchRef}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className="oscars">
          <img src={Oscar} alt="" />
          <button>
            {lang === "ru" ? "Посмотреть победителей" : "View the winners"} →
          </button>
        </div>
      </div>
      <div className="trendingMovies">
        <div className="trendingMoviesToggle">
          <h2>{lang == "ru" ? "В тренде" : "Trending"}</h2>
          <ToggleButton onToggle={handleToggle} />
        </div>

        <div className="homeCardWrapper">
          {trendData.map((item, index) => {
            return (
              <div
                onClick={() => {
                  handleClick(item.id);
                }}
                className="card"
                key={index}
                s
              >
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
