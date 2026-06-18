import { createSlice } from "@reduxjs/toolkit";
import {
  fetchJsonWebToken,
  fetchMyInfo,
} from "../../../http/articles/fetchArticles";
import { isString } from "../../../utils/type";
import { getValidationReuslt } from "../../../utils/errorHandler";
// ReduxToolkit slice store 생성.
export const userSlice = createSlice({
  name: "user-slice",
  initialState: {
    token: null,
    info: null,
    error: null,
  },
  reducers: {
    autoLogin(store) {
      //sessionStorage 에 있는 token 을 가져와서 userSlice에 등록한다
      const token = sessionStorage.getItem("token");
      if (token) {
        store.token = token;
      }
    },
    loginSuccess(store, action) {
      store.token = action.payload;
    },
    logout(store) {
      store.token = null;
      store.info = null;
    },
    loadMyInfo(store, action) {
      store.info = action.payload;
      store.error = null;
    },
    error(store, action) {
      if (isString(action.payload)) {
        store.error = action.payload;
      } else {
        store.error = getValidationReuslt(action.payload);
      }

      store.error = action.payload;
    },
  },
});

export const userAction = userSlice.actions;

//toolkit slice store에 대한 custom action(reducer) ==> fetch + dispatch 생성
export const userThunks = {
  login(email, password) {
    //useDispatch()의 결과가 파라미터로 전달.
    return async (dispatcher) => {
      //fetch
      const loginResult = await fetchJsonWebToken(email, password);
      //dispatch
      if (!loginResult.error) {
        sessionStorage.setItem("token", loginResult.token);
        dispatcher(userAction.loginSuccess(loginResult.token));
      } else {
        dispatcher(userAction.error(loginResult.error));
      }
    };
  },
  loadMyInfo() {
    return async (dispatcher) => {
      const sessionToken = sessionStorage.getItem("token");
      const myInfo = await fetchMyInfo(sessionToken);

      if (myInfo.error) {
        sessionStorage.removeItem("token");
        dispatcher(userAction.logout());
      } else {
        dispatcher(userAction.loadMyInfo(myInfo));
      }
    };
  },
  logout() {
    return async (dispatcher) => {
      sessionStorage.removeItem("token");
      dispatcher(userAction.logout());
    };
  },
};
