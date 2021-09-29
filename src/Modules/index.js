import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { all } from "redux-saga/effects";
import getListReducer from './getListReducer';
import headerReducer from './headerReducer';

//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";

enableES5();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["getListReducer"]
};

const rootReducer = combineReducers({
  getListReducer,
  headerReducer
});

// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);

//wathcer saga
export function* rootSaga() {
  yield all([
  ]);
}
