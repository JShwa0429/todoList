import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  content: "",
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    inputReducer: (state, action) => {
      state.title = action.payload.title;
      state.content = action.payload.content;
    },
  },
});

export const { inputReducer } = inputSlice.actions;

export const saveInput = (title, content) => {
  return (dispatch) => {
    dispatch(inputReducer({ title: title, content: content }));
  };
};

export const clearInput = () => {
  return (dispatch) => {
    dispatch(inputReducer({ title: "", content: "" }));
  };
};

export default inputSlice.reducer;
