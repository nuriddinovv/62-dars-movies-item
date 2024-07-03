import React from "react";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../app/slice/FavoriteSlice";
import { CustomCircularProgress } from "../../repository/CircularProgress";
import { convertDate } from "../../repository/dataConvert";
import { useNavigate } from "react-router-dom";

export default function CardComponent({
  item,
  id,
  image,
  title,
  rating,
  date,
  toid,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/${toid}/${id}`);
  };
  return (
    <div className="card">
      <div
        onClick={() => {
          dispatch(addFavorite(item));
        }}
        className="material-symbols-outlined moreIcon"
      >
        favorite
      </div>

      <img
        onClick={() => handleClick(id)}
        src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${image}`}
        alt={title}
      />
      <div className="cardBody">
        <span>
          <CustomCircularProgress value={Math.round(rating * 10)} />
        </span>
        <h1>{title}</h1>
        <p>{convertDate(date)}</p>
      </div>
    </div>
  );
}
