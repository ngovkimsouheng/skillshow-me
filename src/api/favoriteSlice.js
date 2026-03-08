// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   favorites: [], // store favorite templates
// };

// export const favoriteSlice = createSlice({
//   name: "favorite",
//   initialState,
//   reducers: {
//     addFavorite: (state, action) => {
//       const template = action.payload;
//       // Avoid duplicates
//       if (!state.favorites.find((f) => f.id === template.id)) {
//         state.favorites.push(template);
//       }
//     },
//     removeFavorite: (state, action) => {
//       const id = action.payload;
//       state.favorites = state.favorites.filter((f) => f.id !== id);
//     },
//   },
// });

// export const { addFavorite, removeFavorite } = favoriteSlice.actions;

// export default favoriteSlice.reducer;