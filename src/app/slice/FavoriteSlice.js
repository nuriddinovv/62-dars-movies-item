import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("favorite")) || [],
};

export const FavoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem("favorite", JSON.stringify(state.value));
    },
    removeFavorite: (state, action) => {
      state.value = state.value.filter((item) => item !== action.payload);
      localStorage.setItem("favorite", JSON.stringify(state.value));
    },
  },
});

export const { addFavorite, removeFavorite } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
