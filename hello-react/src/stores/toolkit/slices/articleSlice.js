import { createSlice } from "@reduxjs/toolkit";
// ReduxToolkit slice store 생성.
export const articleSlice = createSlice({
  name: "article-slice",
  initialState: {
    list: [],
  },
  reducers: {
    refresh() {},
    loginSuccess() {},
    write() {},
    pagination() {},
  },
});
