import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "./timeSlice";

const appStore = configureStore({
  reducer: {
    time: timeReducer,
  },
});

export default appStore;
