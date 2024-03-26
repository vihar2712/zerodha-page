import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
  name: "timeDuration",
  initialState: { currentTime: "1day" },
  reducers: {
    changeTimeDuration: (state, action) => {
      state.currentTime = action.payload;
    },
  },
});

export const { changeTimeDuration, callFn } = timeSlice.actions;

export default timeSlice.reducer;
