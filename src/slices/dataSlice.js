import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datas: [
    {
      id: 0,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다",
      isDone: false,
    },
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다",
      isDone: true,
    },
  ],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    dataReducer: (state, action) => {
      const { title, content } = action.payload;
      const newDatas = [...state.datas];
      const newId = newDatas.length ? newDatas[newDatas.length - 1].id : 0;
      newDatas.push({
        id: newId + 1,
        title: title,
        content: content,
        isDone: false,
      });
      state.datas = newDatas;
    },

    deleteReducer: (state, action) => {
      let id = action.payload;
      state.datas = state.datas.filter((data) => data.id !== id);
    },

    toggleReducer: (state, action) => {
      let id = action.payload;
      const newDatas = [...state.datas];
      newDatas.forEach((v) => {
        if (v.id === id) v.isDone = !v.isDone;
      });
      state.datas = newDatas;
    },
  },
});

export const { dataReducer, deleteReducer, toggleReducer } = dataSlice.actions;

export const saveData = (title, content) => {
  return (dispatch) => {
    dispatch(dataReducer({ title: title, content: content }));
  };
};

export const deleteData = (id) => {
  return (dispatch) => {
    dispatch(deleteReducer(id));
  };
};

export const toggleData = (id) => {
  return (dispatch) => {
    dispatch(toggleReducer(id));
  };
};

export default dataSlice.reducer;
