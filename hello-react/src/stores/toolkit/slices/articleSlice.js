import { createSlice } from "@reduxjs/toolkit";
// ReduxToolkit slice store 생성.
export const articleSlice = createSlice({
  name: "article-slice",
  initialState: {
    list: [],
    viewPageNO: 0,
    count: 0,
    pagination: {},
  },
  reducers: {
    refresh(store, action) {
      store.list = action.payload.result;
      store.count = action.payload.count;
      store.pagination = action.payload.pagination;
    },
  },
});

export const articleAction = articleSlice.actions;
