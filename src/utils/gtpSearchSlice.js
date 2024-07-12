import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
    suggestedGptMovies: null,
    tmdbMoviesResults : null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
      },
      // storing gpt suggested movies which are fetch from TMDB api
      addGptSuggestedMovies: (state, action) => {
        const { gptSuggestedMoviesNames, tmdbMoviesResults } = action.payload;
        state.tmdbMoviesResults = tmdbMoviesResults;
        state.suggestedGptMovies = gptSuggestedMoviesNames;
      }
  }
});

export const {toggleGptSearchView, addGptSuggestedMovies} = gptSearchSlice.actions
export default gptSearchSlice.reducer