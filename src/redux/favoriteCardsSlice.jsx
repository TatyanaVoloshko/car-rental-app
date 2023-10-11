import { createSlice } from "@reduxjs/toolkit";

const favoriteCardsSlice = createSlice({
  name: "favoriteCards",

  initialState: [],

  reducers: {
    toggleFavorite: (state, action) => {
      const { id } = action.payload;
      const existingIndex = state.favoriteCards.findIndex(
        (card) => card.id === id
      );

      if (existingIndex !== -1) {
        state.favoriteCards.splice(existingIndex, 1);
      } else {
        state.favoriteCards.push(action.payload);
      }
    },
  },
});
export const { toggleFavorite, removeFromFavorites } = favoriteCardsSlice.actions;
export default favoriteCardsSlice.reducer;
