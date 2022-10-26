import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incCounter: (state, action) => {
      state.counter++;
    },
    descCounter: (state, action) => {
      state.counter--;
    },
    addTenToCounter: (state, action) => {
      state.counter = state.counter + action.payload;
    },
  },
});

export const { incCounter, descCounter, addTenToCounter } =
  counterSlice.actions;
export const getCounter = (state) => state.counter.counter;

export default counterSlice.reducer;
