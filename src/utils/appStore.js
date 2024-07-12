import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice";
import moviesSlice from "./moviesSlice";
import gtpSearchSlice from "./gtpSearchSlice";
import configSlice from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesSlice,
    gptSearch: gtpSearchSlice,
    config  : configSlice
  },
});

export default appStore;
