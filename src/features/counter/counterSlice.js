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
    showData: (state) => {
        state.value = state.value;
    },
  },
});
export const { addData, showData } = counterSlice.actions;
export default counterSlice.reducer;
