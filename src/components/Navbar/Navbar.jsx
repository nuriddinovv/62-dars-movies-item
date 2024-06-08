import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

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

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <ul className="navbar-wrapper-menu">
            {navbarMenuData.map((nav_menu, index) => (
              <li className="navbar-wrapper-menu-item" key={index}>
                <Link
                  to={nav_menu.path}
                  className="navbar-wrapper-menu-item-link"
                >
                  {nav_menu.text}
                </Link>
                {nav_menu.text === "Movies" && (
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
                {nav_menu.text === "TV Shows" && (
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
                {nav_menu.text === "People" && (
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
          <div className="rightUser">
            <span className="material-symbols-outlined">add</span>
            <div className="lang">EN</div>
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
