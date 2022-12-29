// import { createStore } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers/rootReducer";

const persistConfig = {
  key : 'root',
  storage
}

const  persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({reducer : persistedReducer});

const persistor = persistStore(store)


export {
  store,
  persistor
}
