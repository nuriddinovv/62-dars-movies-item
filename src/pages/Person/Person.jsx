import React, { useContext } from "react";
import "./person.css";
import { SpinnerCircular } from "spinners-react";
import person from "../../repository/person";
import { useState, useEffect } from "react";
import { LangContext } from "../../context/Context";

function Person() {
  const [personMovies, setpersonMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const { lang } = useContext(LangContext);
  async function getpersonMovies() {
    const resp = await person.getMoviesByName(`popular?language=${lang}-US&page=1`);
    setpersonMovies(resp.results);
    setLoader(false);
  }

  useEffect(() => {
    getpersonMovies();
  }, []);

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
    <div className="personContainer">
      <h2>{lang === "en" ? "Popular Peoples" : "Популярные люди"}</h2>
      <div className="cardWrapper">
        {personMovies.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="cardImg">
                <img
                  src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${item.profile_path}`}
                />
              </div>
              <div className="cardPersonBody">
                <h3>{item.name}</h3>
                {/* <p>{item.}</p> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Person;
