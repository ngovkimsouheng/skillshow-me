import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";
import authReducer from "../api/authSlice";

export const store = configureStore({
  // reducer: {
  //   auth: authReducer,
  //   [authApi.reducerPath]: authApi.reducer,
  // },
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// import { configureStore } from "@reduxjs/toolkit";
// import { api } from "../api/api";
// import authReducer from "../api/authSlice";
// import favoriteReducer from "../api/favoriteSlice";

// export const store = configureStore({
//   reducer: {
//     favorite: favoriteReducer,
//     auth: authReducer,
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware),
// });
