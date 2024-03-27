import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
  name: "timeDuration",
  initialState: { currentTime: "1hr", repeat: false },
  reducers: {
    changeTimeDuration: (state, action) => {
      state.currentTime = action.payload;
      state.repeat = true;
    },
    noRepeat: (state) => {
      state.repeat = false;
    },
  },
});

export const { changeTimeDuration, noRepeat } = timeSlice.actions;

export default timeSlice.reducer;
