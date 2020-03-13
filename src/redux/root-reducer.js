import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from "cookies-js";

import authReducer from "./auth/auth.reducer";

const persistConfig = {
  key: "root",
  storage: new CookieStorage(Cookies)
};

const rootReducer = combineReducers({
  auth: authReducer
});

export default persistReducer(persistConfig, rootReducer);
