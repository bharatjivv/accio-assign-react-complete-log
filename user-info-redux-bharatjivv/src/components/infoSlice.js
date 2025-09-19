import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  email: "",
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export default infoSlice.reducer;

export const { setName, setEmail } = infoSlice.actions;