import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { LangContext } from "../../context/Context";

function Navbar() {
  const moviesToggleData = [
    { text: "Popular", path: "/movies" },
    { text: "Now playing", path: "/movies/now_playing" },
    { text: "Upcoming", path: "/movies/upcoming" },
    { text: "Top Rated", path: "/movies/top_rated" },
  ];
  const tvShowToggleData = [
    { text: "Popular", path: "/tv" },
    { text: "Airing today", path: "/tv/airing-today" },
    { text: "On TV", path: "/tv/on-the-air" },
    { text: "Top Rated", path: "/tv/top-rated" },
  ];
  const peopleToggleData = [{ text: "Popular people", path: "/person" }];

  const navbarMenuData = [
    {
      text: (
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt=""
        />
      ),
      path: "/",
    },
    { text: "Movies", path: "/movies" },
    { text: "TV Shows", path: "/tv" },
    { text: "People", path: "/person" },
    { text: "More", path: "/more" },
  ];
  //    - - - - - -  - - - - RU data - - - - - - - - -
  const navbarMenuDataRu = [
    {
      text: (
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt=""
        />
      ),
      path: "/",
    },
    { text: "Фильмы", path: "/movies" },
    { text: "Сериалы", path: "/tv" },
    { text: "Люди", path: "/person" },
    { text: "Ещё", path: "/more" },
  ];
  const peopleToggleDataRu = [{ text: "Популярные люди", path: "/person" }];
  const tvShowToggleDataRu = [
    { text: "Популярные", path: "/tv" },
    { text: "В эфире сегодня", path: "/tv/airing-today" },
    { text: "В телевидению", path: "/tv/on-the-air" },
    { text: "Лучшие ", path: "/tv/top-rated" },
  ];
  const moviesToggleDataRu = [
    { text: "Популярные", path: "/movies" },
    { text: "Смотрят сейчас", path: "/movies/now_playing" },
    { text: "Ожидаемые", path: "/movies/upcoming" },
    { text: "Лучшие", path: "/movies/top_rated" },
  ];

  const { lang, setLang } = useContext(LangContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          {lang === "en" ? (
            <ul className="navbar-wrapper-menu">
              {navbarMenuData.map((nav_menu, index) => (
                <li className="navbar-wrapper-menu-item" key={index}>
                  <Link
                    to={nav_menu.path}
                    className="navbar-wrapper-menu-item-link"
                  >
                    {nav_menu.text}
                  </Link>
                  {nav_menu.path === "/movies" && (
                    <div className="moviesToggle">
                      <ul>
                        {moviesToggleData.map((item, index) => (
                          <li key={index}>
                            <Link to={item.path} className="">
                              {item.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {nav_menu.path === "/tv" && (
                    <div className="moviesToggle">
                      <ul>
                        {tvShowToggleData.map((item, index) => (
                          <li key={index}>
                            <Link to={item.path} className="">
                              {item.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {nav_menu.path === "/person" && (
                    <div className="moviesToggle">
                      <ul>
                        {peopleToggleData.map((item, index) => (
                          <li key={index}>
                            <Link to={item.path} className="">
                              {item.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <ul className="navbar-wrapper-menu">
              {navbarMenuDataRu.map((nav_menu, index) => (
                <li className="navbar-wrapper-menu-item" key={index}>
                  <Link
                    to={nav_menu.path}
                    className="navbar-wrapper-menu-item-link"
                  >
                    {nav_menu.text}
                  </Link>
                  {nav_menu.path === "/movies" && (
                    <div className="moviesToggle">
                      <ul>
                        {moviesToggleDataRu.map((item, index) => (
                          <li key={index}>
                            <Link to={item.path} className="">
                              {item.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {nav_menu.path === "/tv" && (
                    <div className="moviesToggle">
                      <ul>
                        {tvShowToggleDataRu.map((item, index) => (
                          <li key={index}>
                            <Link to={item.path} className="">
                              {item.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {nav_menu.path === "/person" && (
                    <div className="moviesToggle">
                      <ul>
                        {peopleToggleDataRu.map((item, index) => (
                          <li key={index}>
                            <Link to={item.path} className="">
                              {item.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
          <div className="rightUser">
            <span className="material-symbols-outlined">add</span>
            <div
              className="lang"
              onClick={() => {
                setLang(lang === "en" ? "ru" : "en");
              }}
            >
              {lang === "ru" ? "EN" : "RU"}
            </div>
            <span className="material-symbols-outlined">notifications</span>
            <span className="profile">N</span>
            <span
              className="material-symbols-outlined"
              style={{ color: "#01B4E4" }}
            >
              search
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
