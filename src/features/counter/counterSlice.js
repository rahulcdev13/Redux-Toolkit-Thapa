import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    addData: (state, action) => {
    },
    showData: (state,action) => {
        state.value = action.payload;
    },
  },
});
export const { addData, showData } = counterSlice.actions;
export default counterSlice.reducer;
