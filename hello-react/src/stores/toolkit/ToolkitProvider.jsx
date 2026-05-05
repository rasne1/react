import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slices/todoSlice";
import { Provider } from "react-redux";
import { articleSlice } from "./slices/articleSlice";
import { userSlice } from "./slices/userSlice";

const toolkitStore = configureStore({
  //toolkit store에 slice store를 등록.
  reducer: {
    // todo 이름의 state를 만든다.
    todo: todoSlice.reducer,
    article: articleSlice.reducer,
    user: userSlice.reducer,
    //article: articleSlice.reducer,
    //user: userSlice.reducer,
  },
});

export const ToolkitProvider = ({ children }) => {
  return <Provider store={toolkitStore}>{children}</Provider>;
};
