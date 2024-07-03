import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

  const moviesToggleDataRu = [
    { text: "Популярные", path: "/movies" },
    { text: "Смотрят сейчас", path: "/movies/now_playing" },
    { text: "Ожидаемые", path: "/movies/upcoming" },
    { text: "Лучшие", path: "/movies/top_rated" },
  ];

  const tvShowToggleDataRu = [
    { text: "Популярные", path: "/tv" },
    { text: "В эфире сегодня", path: "/tv/airing-today" },
    { text: "В телевидению", path: "/tv/on-the-air" },
    { text: "Лучшие ", path: "/tv/top-rated" },
  ];

  const peopleToggleDataRu = [{ text: "Популярные люди", path: "/person" }];

  const { lang, setLang } = useContext(LangContext);

  const renderToggleMenu = (path, toggleData) => (
    <div className="moviesToggle">
      <ul>
        {toggleData.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            className="nav_toggle"
            style={{ color: "white" }}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? "✖" : "☰"}
          </div>
          <ul className={`navbar-wrapper-menu ${menuOpen ? "open" : ""}`}>
            {(lang === "en" ? navbarMenuData : navbarMenuDataRu).map(
              (nav_menu, index) => (
                <li className="navbar-wrapper-menu-item" key={index}>
                  <Link
                    to={nav_menu.path}
                    className="navbar-wrapper-menu-item-link"
                  >
                    {nav_menu.text}
                  </Link>
                  {nav_menu.path === "/movies" &&
                    renderToggleMenu(
                      nav_menu.path,
                      lang === "en" ? moviesToggleData : moviesToggleDataRu
                    )}
                  {nav_menu.path === "/tv" &&
                    renderToggleMenu(
                      nav_menu.path,
                      lang === "en" ? tvShowToggleData : tvShowToggleDataRu
                    )}
                  {nav_menu.path === "/person" &&
                    renderToggleMenu(
                      nav_menu.path,
                      lang === "en" ? peopleToggleData : peopleToggleDataRu
                    )}
                </li>
              )
            )}
          </ul>
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
            <NavLink to={"/favorite"}>
              <span className="material-symbols-outlined">favorite</span>
            </NavLink>
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
