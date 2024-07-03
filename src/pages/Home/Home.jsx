import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Oscar from "../../img/homeOscars.svg";
import ToggleButton from "../../repository/btn/toggleBtn";
import homeTrending from "../../repository/homeTrending";
import "./home.css";
import { LangContext } from "../../context/Context";
import { Progress } from "antd";
import CardComponent from "../../components/Card/CardComponent";

function Home() {
  const [trendData, setTrendData] = useState([]);
  const searchRef = useRef();
  const { lang } = useContext(LangContext);
  const navigate = useNavigate();

  async function getPopularMovies(searchWord = "day") {
    try {
      const resp = await homeTrending.getMoviesByName(
        `movie/${searchWord}?language=${lang === "ru" ? "ru-RU" : "en-US"}`
      );
      setTrendData(resp.results);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  }

  useEffect(() => {
    getPopularMovies();
  }, [lang]);

  const handleSearch = () => {
    const searchQuery = searchRef?.current?.value;
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleToggle = (value) => {
    getPopularMovies(value === "today" ? "day" : "week");
  };

  return (
    <div>
      <div className="sectOne">
        <div className="texts">
          {lang === "ru" ? <h2>Добро пожаловать.</h2> : <h2>Welcome.</h2>}
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
              ref={searchRef}
            />
            <button onClick={handleSearch}>
              {lang === "ru" ? "Поиск" : "Search"}
            </button>
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
          <h2>{lang === "ru" ? "В тренде" : "Trending"}</h2>
          <ToggleButton onToggle={handleToggle} />
        </div>

        <div
          style={{
            background:
              "url(https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "20px 0",
          }}
          className="homeCardWrapper"
        >
          {trendData.map((item, index) => (
            <CardComponent 
              key={index}
              item={item}
              id={item.id}
              image={item.poster_path}
              title={item.title}
              rating={item.vote_average}
              date={item.release_date}
            />
          ))}
        </div>
      </div>
      <div className="leaderboard">
        <div className="leaderboardText">
          <h2>{lang === "en" ? "Leaderboard" : "Доска почёта"}</h2>
          <div className="allEdits">
            <p>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  background:
                    "linear-gradient(to right, rgb(192, 254, 207) 0%, rgb(30, 213, 169) 100%)",
                  display: "inline-block",
                  borderRadius: "50%",
                }}
              ></span>{" "}
              {lang === "en" ? "All Time Edits" : "Правки за всё время"}
            </p>
            <p>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  background:
                    "linear-gradient(to right,rgba(253, 193, 112,1) 0%,rgba(217, 59, 99,1) 100%)",
                  display: "inline-block",
                  borderRadius: "50%",
                }}
              ></span>{" "}
              {lang === "en" ? "Edits This Week" : "Правки за неделю"}
            </p>
          </div>
        </div>

        <div className="leaderboardWrapper">
          <div className="left">
            <div className="leftProgress">
              <img
                style={{ width: "56px", height: "56px", borderRadius: "50%" }}
                src="https://secure.gravatar.com/avatar/8f6f31bbc98ea54ac6d193f257020a1e.jpg?s=150"
              />
              <div className="leaderboardProgress">
                <h3>enterpr1se</h3>
                <Progress
                  strokeColor={
                    "linear-gradient(to right, rgb(192, 254, 207) 0%, rgb(30, 213, 169) 100%)"
                  }
                  percent={10}
                  showInfo={false}
                />
                <Progress
                  strokeColor={
                    "linear-gradient(to right,rgba(253, 193, 112,1) 0%,rgba(217, 59, 99,1) 100%)"
                  }
                  percent={100}
                  showInfo={false}
                />
              </div>
            </div>
            <div className="leftProgress">
              <img
                style={{ width: "56px", height: "56px", borderRadius: "50%" }}
                src="https://secure.gravatar.com/avatar/8f6f31bbc98ea54ac6d193f257020a1e.jpg?s=150"
              />
              <div className="leaderboardProgress">
                <h3>enterpr1se</h3>
                <Progress
                  strokeColor={
                    "linear-gradient(to right, rgb(192, 254, 207) 0%, rgb(30, 213, 169) 100%)"
                  }
                  percent={50}
                  showInfo={false}
                />
                <Progress
                  strokeColor={
                    "linear-gradient(to right,rgba(253, 193, 112,1) 0%,rgba(217, 59, 99,1) 100%)"
                  }
                  percent={50}
                  showInfo={false}
                />
              </div>
            </div>
            <div className="leftProgress">
              <img
                style={{ width: "56px", height: "56px", borderRadius: "50%" }}
                src="https://secure.gravatar.com/avatar/8f6f31bbc98ea54ac6d193f257020a1e.jpg?s=150"
              />
              <div className="leaderboardProgress">
                <h3>enterpr1se</h3>
                <Progress
                  strokeColor={
                    "linear-gradient(to right, rgb(192, 254, 207) 0%, rgb(30, 213, 169) 100%)"
                  }
                  percent={80}
                  showInfo={false}
                />
                <Progress
                  strokeColor={
                    "linear-gradient(to right,rgba(253, 193, 112,1) 0%,rgba(217, 59, 99,1) 100%)"
                  }
                  percent={50}
                  showInfo={false}
                />
              </div>
            </div>
            <div className="leftProgress">
              <img
                style={{ width: "56px", height: "56px", borderRadius: "50%" }}
                src="https://secure.gravatar.com/avatar/8f6f31bbc98ea54ac6d193f257020a1e.jpg?s=150"
              />
              <div className="leaderboardProgress">
                <h3>enterpr1se</h3>
                <Progress
                  strokeColor={
                    "linear-gradient(to right, rgb(192, 254, 207) 0%, rgb(30, 213, 169) 100%)"
                  }
                  percent={90}
                  showInfo={false}
                />
                <Progress
                  strokeColor={
                    "linear-gradient(to right,rgba(253, 193, 112,1) 0%,rgba(217, 59, 99,1) 100%)"
                  }
                  percent={1}
                  showInfo={false}
                />
              </div>
            </div>
            <div className="leftProgress">
              <img
                style={{ width: "56px", height: "56px", borderRadius: "50%" }}
                src="https://secure.gravatar.com/avatar/8f6f31bbc98ea54ac6d193f257020a1e.jpg?s=150"
              />
              <div className="leaderboardProgress">
                <h3>enterpr1se</h3>
                <Progress
                  strokeColor={
                    "linear-gradient(to right, rgb(192, 254, 207) 0%, rgb(30, 213, 169) 100%)"
                  }
                  percent={60}
                  showInfo={false}
                />
                <Progress
                  strokeColor={
                    "linear-gradient(to right,rgba(253, 193, 112,1) 0%,rgba(217, 59, 99,1) 100%)"
                  }
                  percent={80}
                  showInfo={false}
                />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="left">
              <div className="leftProgress">
                <img
                  style={{ width: "56px", height: "56px", borderRadius: "50%" }}
                  src="https://secure.gravatar.com/avatar/8f6f31bbc98ea54ac6d193f257020a1e.jpg?s=150"
                />
                <div className="leaderboardProgress">
                  <h3>enterpr1se</h3>
                  <Progress
                    strokeColor={
                      "linear-gradient(to right, rgb(192, 254, 207) 0%, rgb(30, 213, 169) 100%)"
                    }
                    percent={10}
                    showInfo={false}
                  />
                  <Progress
                    strokeColor={
                      "linear-gradient(to right,rgba(253, 193, 112,1) 0%,rgba(217, 59, 99,1) 100%)"
                    }
                    percent={10}
                    showInfo={false}
                  />
                </div>
              </div>
              <div className="leftProgress">
                <img
                  style={{ width: "56px", height: "56px", borderRadius: "50%" }}
                  src="https://secure.gravatar.com/avatar/8f6f31bbc98ea54ac6d193f257020a1e.jpg?s=150"
                />
                <div className="leaderboardProgress">
                  <h3>enterpr1se</h3>
                  <Progress
                    strokeColor={
                      "linear-gradient(to right, rgb(192, 254, 207) 0%, rgb(30, 213, 169) 100%)"
                    }
                    percent={75}
                    showInfo={false}
                  />
                  <Progress
                    strokeColor={
                      "linear-gradient(to right,rgba(253, 193, 112,1) 0%,rgba(217, 59, 99,1) 100%)"
                    }
                    percent={25}
                    showInfo={false}
                  />
                </div>
              </div>
              <div className="leftProgress">
                <img
                  style={{ width: "56px", height: "56px", borderRadius: "50%" }}
                  src="https://secure.gravatar.com/avatar/8f6f31bbc98ea54ac6d193f257020a1e.jpg?s=150"
                />
                <div className="leaderboardProgress">
                  <h3>enterpr1se</h3>
                  <Progress
                    strokeColor={
                      "linear-gradient(to right, rgb(192, 254, 207) 0%, rgb(30, 213, 169) 100%)"
                    }
                    percent={70}
                    showInfo={false}
                  />
                  <Progress
                    strokeColor={
                      "linear-gradient(to right,rgba(253, 193, 112,1) 0%,rgba(217, 59, 99,1) 100%)"
                    }
                    percent={50}
                    showInfo={false}
                  />
                </div>
              </div>
              <div className="leftProgress">
                <img
                  style={{ width: "56px", height: "56px", borderRadius: "50%" }}
                  src="https://secure.gravatar.com/avatar/8f6f31bbc98ea54ac6d193f257020a1e.jpg?s=150"
                />
                <div className="leaderboardProgress">
                  <h3>enterpr1se</h3>
                  <Progress
                    strokeColor={
                      "linear-gradient(to right, rgb(192, 254, 207) 0%, rgb(30, 213, 169) 100%)"
                    }
                    percent={25}
                    showInfo={false}
                  />
                  <Progress
                    strokeColor={
                      "linear-gradient(to right,rgba(253, 193, 112,1) 0%,rgba(217, 59, 99,1) 100%)"
                    }
                    percent={60}
                    showInfo={false}
                  />
                </div>
              </div>
              <div className="leftProgress">
                <img
                  style={{ width: "56px", height: "56px", borderRadius: "50%" }}
                  src="https://secure.gravatar.com/avatar/8f6f31bbc98ea54ac6d193f257020a1e.jpg?s=150"
                />
                <div className="leaderboardProgress">
                  <h3>enterpr1se</h3>
                  <Progress
                    strokeColor={
                      "linear-gradient(to right, rgb(192, 254, 207) 0%, rgb(30, 213, 169) 100%)"
                    }
                    percent={90}
                    showInfo={false}
                  />
                  <Progress
                    strokeColor={
                      "linear-gradient(to right,rgba(253, 193, 112,1) 0%,rgba(217, 59, 99,1) 100%)"
                    }
                    percent={10}
                    showInfo={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
