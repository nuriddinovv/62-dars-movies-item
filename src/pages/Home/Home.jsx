import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Oscar from "../../img/homeOscars.svg";
import ToggleButton from "../../repository/btn/toggleBtn";
import homeTrending from "../../repository/homeTrending";
import "./home.css";

function Home() {
  const [trendData, setTrendData] = useState([]);
  const [newMovie, setNewMovie] = useState([]);
  const searchRef = useRef();
  const router = useNavigate();

  async function getPopularMovies(searchWord = "day") {
    const resp = await homeTrending.getMoviesByName(
      `movie/${searchWord}?language=en-US`
    );
    setTrendData(resp.results);
  }

  useEffect(() => {
    getPopularMovies();
  }, []);

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
          <h2>Welcome.</h2>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
          <div className="search">
            <input
              type="search"
              placeholder="Search for a movie, tv show, person......"
              name=""
              id=""
              ref={searchRef}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className="oscars">
          <img src={Oscar} alt="" />
          <button>View the winners →</button>
        </div>
      </div>
      <div className="trendingMovies">
        <div className="trendingMoviesToggle">
          <h2>Trending</h2>
          <ToggleButton onToggle={handleToggle} />
        </div>

        <div className="homeCardWrapper">
          {trendData.map((item, index) => {
            return (
              <div
                onClick={() => {
                  // return movie;
                  setNewMovie(item);
                  console.log(item);
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
                    {Math.round(item.vote_average * 10)}
                    <p>
                      <sup>%</sup>
                    </p>
                  </span>
                  <h1>{item.original_title}</h1>
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
