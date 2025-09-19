import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./infoSlice";

const store = configureStore({
  reducer: {
    details: infoSlice,
  },
});

export default store;