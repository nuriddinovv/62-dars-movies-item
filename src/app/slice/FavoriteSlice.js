import { createSlice } from "@reduxjs/toolkit";

export const FavoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    value: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.value.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.value = state.value.filter((item) => item !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
