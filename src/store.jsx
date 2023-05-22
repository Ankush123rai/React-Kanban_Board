import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./components/features/listSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';


const persistConfig = {
  key: "root",
  version: 1,
  storage,
};


const rootReducer = combineReducers({
  lists: listReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer );

const store = configureStore({
  reducer: persistedReducer
});

const persistor = persistStore(store);


export { store, persistor};