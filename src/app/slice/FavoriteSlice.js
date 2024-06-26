import { createSlice } from "@reduxjs/toolkit";

export const FavoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addFavorite: (state) => {
      state.push();
    },
  },
});
export const { addFavorite } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
