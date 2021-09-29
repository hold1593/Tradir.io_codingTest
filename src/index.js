import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./Routes";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import rootReducer from "./Modules";
import { rootSaga } from "./Modules";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware,ReduxThunk)
    // ,
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__
    //   ? composeWithDevTools()
    //   : (f) => f
  )
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
  ,
  document.getElementById('root')
);
