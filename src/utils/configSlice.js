import { createSlice } from "@reduxjs/toolkit";
import languageChoice from "./languageConstants";

const configSlice = createSlice({
  name: "config",
  initialState: {
    currentLanguage: {
      language: "English",
      data: {
        search: "Search",
        getSearchPlaceholder: "What Would you Like to Search",
      },
    },
    languages: languageChoice,
  },
  reducers: {
    changeLanguage: (state, action) => {
      const selectedLanguage = state.languages.find(
        (lang) => Object.keys(lang)[0] === action.payload
      );
      if (selectedLanguage) {
        state.currentLanguage.language = action.payload;
          state.currentLanguage.data = selectedLanguage[action.payload];
      }
    },
  },
});

export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;
