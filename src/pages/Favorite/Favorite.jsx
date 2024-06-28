import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { convertDate } from "../../repository/dataConvert";
import { CustomCircularProgress } from "../../repository/CircularProgress";

export default function Favorite() {
  const favorite = useSelector((state) => state.favorite.value); // To'g'ri shakl
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };
  useEffect(() => {
    setMovie(favorite);
  }, [favorite]);

  return (
    <div
      style={{
        width: "85%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
      }}
      className="favoriteMovie"
    >
      <div
        className="moviesCards"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {movie?.map((item, index) => (
          <div key={index} className="card">
            <div className="material-symbols-outlined moreIcon">favorite</div>

            <img
              onClick={() => handleClick(item.id)}
              src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`}
              alt={item.title}
            />
            <div className="cardBody">
              <span>
                <CustomCircularProgress
                  value={Math.round(item.vote_average * 10)}
                />
              </span>
              <h1>{item.title}</h1>
              <p>{convertDate(item.release_date)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
