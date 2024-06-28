import { configureStore } from "@reduxjs/toolkit";
import FavoriteReducer from "./slice/FavoriteSlice";

export default configureStore({
  reducer: {
    favorite: FavoriteReducer,
  },
});
