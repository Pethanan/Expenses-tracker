import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = { isPremiumActivated: false };
const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    changeTheme(state, action) {
      state.isPremiumActivated = true;
    },
  },
});

export default themeSlice.reducer;
export const themeActions = themeSlice.actions;
